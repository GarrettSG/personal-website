'use cache';

import React from 'react';
import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { type Metadata } from 'next';
import { Mdx } from '#/ui/codehike';
import aboutMeritage from './aboutMeritage.mdx';
import aboutPosition from './aboutPosition.mdx';

export async function generateMetadata(): Promise<Metadata> {
  const demo = db.demo.find({ where: { slug: 'meritage-homes' } });

  return {
    title: demo.name,
    openGraph: { title: demo.name, images: [`/api/og?title=${demo.name}`] },
  };
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Boundary label="About Meritage" kind="solid" animateRerendering={false}>
        <img
          src="images/MeritageHomes.png"
          alt="ASU Fulton Engineering logo"
          style={{ maxHeight: '150px', width: 'auto', padding: '12px' }}
        />
        <Mdx source={aboutMeritage} collapsed={true} />
      </Boundary>
      <Boundary label="Position" kind="solid" animateRerendering={false} className="flex flex-col gap-9">
        <Mdx source={aboutPosition} />
      </Boundary>
    </>
  );
}
