'use server';

import { ReactNode } from 'react';

import { Session } from '../types/auth';
import { getServerSession } from './session';

interface ServerWrapperProps {
  children: (props: { session: Session }) => ReactNode;
}

export default async function ServerWrapper({ children }: ServerWrapperProps) {
  const session = await getServerSession();

  return <>{children({ session })}</>;
}
