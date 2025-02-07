'use server';

import { loginSchema, registerSchema } from '@/lib/schemas/auth';
import { login, register } from '@/lib/services/auth';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData) {
  const username = formData.get('username') as string;
  const name = formData.get('name') as string;
  const password = formData.get('password') as string;

  const result = loginSchema.safeParse({ username, password, name });

  if (!result.success) {
    const errorMessage = result.error.errors
      .map((err) => err.message)
      .join(', ');
    throw new Error(`Invalid Data: ${errorMessage}`);
  }

  try {
    const response = await login(result.data);
    const c = await cookies();
    c.set('token', response.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    });
  } catch (error) {
    throw new Error(`Login failed. ${error}`);
  }
  redirect('/');
}
export async function registerAction(formData: FormData) {
  const username = formData.get('username') as string;
  const name = formData.get('name') as string;
  const password = formData.get('password') as string;

  const result = registerSchema.safeParse({ username, password, name });

  if (!result.success) {
    const errorMessage = result.error.errors
      .map((err) => err.message)
      .join(', ');
    throw new Error(`Invalid Data: ${errorMessage}`);
  }

  try {
    await register(result.data);
  } catch (e) {
    console.log('error', e);
    throw new Error('Registration failed');
  }

  redirect('/auth/login');
}

export async function logoutAction() {
  try {
    const c = await cookies();
    c.delete('token');
  } catch (error) {
    console.log('error', error);
    throw new Error('Logout failed');
  }
  redirect('/auth/login');
}
