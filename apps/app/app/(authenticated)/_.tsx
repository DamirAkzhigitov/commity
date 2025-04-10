import { env } from '@/env';
import { auth } from '@repo/auth/server';
import { database } from '@repo/database';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { AvatarStack } from './components/avatar-stack';
import { Cursors } from './components/cursors';
import { Header } from './components/header';
// import { captureException } from '@sentry/nextjs';

const title =
  'DA-MR Dashboard | Manage AI Tools, Deployments, and Bot Automation';
const description =
  'Access the DA-MR Console for full control over AI-powered tools, automated deployments, and bot helpers. Monitor, manage, and streamline workflows with ease.';

const CollaborationProvider = dynamic(() =>
  import('./components/collaboration-provider').then(
    (mod) => mod.CollaborationProvider,
  ),
);

export const metadata: Metadata = {
  title,
  description,
};

const App = async () => {
  const pages = await database.page.findMany();
  const { orgId } = await auth();

  if (!orgId) {
    notFound();
  }

  // captureException(new Error('My error message'));

  return (
    <>
      <Header pages={['Building Your Application']} page="Home">
        {env.LIVEBLOCKS_SECRET && (
          <CollaborationProvider orgId={orgId}>
            <AvatarStack />
            <Cursors />
          </CollaborationProvider>
        )}
      </Header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {pages.map((page) => (
            <div
              key={page.id}
              className="aspect-video rounded-xl bg-muted/50 p-5"
            >
              {page.name}
            </div>
          ))}
        </div>
        {/*<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />*/}
      </div>
    </>
  );
};

export default App;
