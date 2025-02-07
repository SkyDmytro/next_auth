'use server';

import { LoginFormData, RegisterFormData } from '@/lib/schemas/auth';
import { login, register } from '@/lib/services/auth';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(formData: LoginFormData) {
  try {
    const response = await login(formData);
    const c = await cookies();
    c.set('token', response.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    });
  } catch (error) {
    console.error('Login failed.', error);
    throw new Error('Login failed.');
  }
  redirect('/');
}
export async function registerAction(formData: RegisterFormData) {
  try {
    await register(formData);
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
