'use client';

import { logoutAction } from '@/app/actions/auth';

import { Button } from '../ui/button';

export const LogoutButton = () => {
  return <Button onClick={logoutAction}>Log out</Button>;
};
