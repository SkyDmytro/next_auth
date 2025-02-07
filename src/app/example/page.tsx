import ClientComponent from '@/components/ClientExample/ClientComponent';
import ServerWrapper from '@/lib/auth/withSessionWrapper';

const page = () => {
  return (
    <ServerWrapper>
      {({ session }) => <ClientComponent session={session} />}
    </ServerWrapper>
  );
};

export default page;
