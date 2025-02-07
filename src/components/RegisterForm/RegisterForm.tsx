'use client';

import { registerAction } from '@/app/actions/auth';
import { RegisterFormData, registerSchema } from '@/lib/schemas/auth';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });
  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerAction(data);
    } catch (err: unknown) {
      console.error('Registration error:', err);
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
          id="name"
          {...register('name', { required: true })}
          className="mt-1"
        />
        {errors.name && (
          <span className="text-red-500 text-sm mt-2">
            {errors.name.message}
          </span>
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
          id="username"
          {...register('username', { required: true })}
          className="mt-1"
        />
        {errors.username && (
          <span className="text-red-500 text-sm mt-2">
            {errors.username.message}
          </span>
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
          id="password"
          {...register('password', { required: true })}
          type="password"
          className="mt-1"
        />
        {errors.password && (
          <span className="text-red-500 text-sm mt-2">
            {errors.password.message}
          </span>
        )}
      </div>
      <Button type="submit" className="w-full">
        Sign up
      </Button>
    </form>
  );
};
