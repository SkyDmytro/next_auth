'use client';

import { useFormStatus } from 'react-dom';

export function ErrorMessage() {
  const { data } = useFormStatus();
  const error = data?.error;

  if (!error) return null;

  return (
    <div className="text-red-500 text-sm mt-2">
      {typeof error === 'string'
        ? error
        : 'Invalid input. Please check your credentials.'}
    </div>
  );
}
