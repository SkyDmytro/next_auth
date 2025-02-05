import { cookies } from 'next/headers';

import { getCurrentUser } from '../services/auth';
import type { User } from '../types/auth';

export async function getServerSession(): Promise<{
  user: User | null;
  token: string | null;
}> {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value ?? null;
  console.log('token', token);

  if (!token) {
    return { user: null, token: null };
  }

  try {
    const user = await getCurrentUser(token);
    console.log('user', user);
    return { user, token };
  } catch (error) {
    console.error('Error:', error);
    return { user: null, token: null };
  }
}
