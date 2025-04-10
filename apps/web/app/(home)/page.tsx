// import { skills, experience } from '@repo/cms/';
// import { Feed } from '@repo/cms/components/feed';
import { showBetaFeature } from '@repo/feature-flags';
import { createMetadata } from '@repo/seo/metadata';
import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
// import { Cases } from './components/cases';
import { Hero } from './components/hero';
// import { Testimonials } from './components/testimonials';

const meta = {
  title: 'Commity – Your AI-Powered Coding Assistant for GitHub & GitLab',
  description:
    'Commity is an AI-powered assistant that helps developers write code, manage GitHub and GitLab repositories, create issues, open pull/merge requests, and automate tasks — all through a smart, chat-based interface.',
};

export const metadata: Metadata = createMetadata(meta);

const Home = async () => {
  const betaFeature = await showBetaFeature();
  const draft = await draftMode();

  return (
    <>
      {betaFeature && (
        <div className="w-full bg-black py-2 text-center text-white">
          Beta feature now available
        </div>
      )}
      <Hero />
      {/*<Feed queries={[skills.postsQuery]} draft={draft.isEnabled}>*/}
      {/*  {async ([data]) => {*/}
      {/*    'use server';*/}
      {/*    if (!data.personal.skills.items.length) {*/}
      {/*      return null;*/}
      {/*    }*/}
      {/*    return <Cases skills={data.personal.skills.items} />;*/}
      {/*  }}*/}
      {/*</Feed>*/}
      {/*<Feed queries={[experience.postsQuery]} draft={draft.isEnabled}>*/}
      {/*  {async ([data]) => {*/}
      {/*    'use server';*/}

      {/*    if (!data.personal.experience.items.length) {*/}
      {/*      return null;*/}
      {/*    }*/}

      {/*    return <Testimonials experience={data.personal.experience.items} />;*/}
      {/*  }}*/}
      {/*</Feed>*/}
    </>
  );
};

export default Home;
