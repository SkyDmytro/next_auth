import { authUrl } from '@/config/config';

import { LoginFormData } from '../schemas/auth';
import type { LoginCredentials, LoginResponse } from '../types/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function login(
  credentials: LoginFormData,
): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_URL}${authUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
export async function register(
  credentials: LoginCredentials,
): Promise<unknown> {
  const response = await fetch(`${API_URL}${authUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }
  return response;
}

export async function getCurrentUser(token: string) {
  const response = await fetch(`${API_URL}${authUrl}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('Failed to get user');
  }

  return response.json();
}
