'use client';

import { loginAction } from '@/app/actions/auth';
import { LoginFormData, loginSchema } from '@/lib/schemas/auth';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await loginAction(data);
    } catch (error: unknown) {
      throw new Error(`Login failed. ${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </Label>
        <Input
          {...register('name', { required: true })}
          id="name"
          name="name"
          type="text"
          className="mt-1"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div>
        <Label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </Label>
        <Input
          {...register('username', { required: true })}
          id="username"
          name="username"
          type="text"
          className="mt-1"
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}
      </div>
      <div>
        <Label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </Label>
        <Input
          {...register('password', { required: true })}
          id="password"
          name="password"
          type="password"
          className="mt-1"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <Button type="submit" className="w-full">
        Sign in
      </Button>
    </form>
  );
};
