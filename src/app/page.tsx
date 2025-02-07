import { LogoutButton } from '@/components/LogoutButton/LogoutButton';
import { getServerSession } from '@/lib/auth/session';

export default async function HomePage() {
  const session = await getServerSession();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome, {session.user?.username || 'User'}!
            </h1>
            <LogoutButton />
          </div>
          <div className="mt-8 bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p>You are successfully logged in!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
