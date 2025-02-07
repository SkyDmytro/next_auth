'use client';

import { registerAction } from '@/app/actions/auth';

import { useState } from 'react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export const RegisterForm = () => {
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (data: FormData): Promise<void> => {
    try {
      await registerAction(data);
    } catch (err: unknown) {
      console.error('Registration error:', err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong');
      }
    }
  };
  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <Label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </Label>
        <Input id="name" name="name" type="text" required className="mt-1" />
      </div>
      <div>
        <Label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </Label>
        <Input
          id="username"
          name="username"
          type="text"
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          className="mt-1"
        />
      </div>
      {error && <span className="text-red-500 text-sm mt-2">{error}</span>}
      <Button type="submit" className="w-full">
        Sign up
      </Button>
    </form>
  );
};
