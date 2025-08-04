'use cache';

import React from 'react';
import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { type Metadata } from 'next';
import { Mdx } from '#/ui/codehike';
import aboutASU from './aboutASU.mdx';
import aboutMajor from './aboutMajor.mdx';

export async function generateMetadata(): Promise<Metadata> {
  const demo = db.demo.find({ where: { slug: 'arizona-state' } });

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
  const demo = db.demo.find({ where: { slug: 'arizona-state' } });
  const sections = db.section.findMany();

  return (
    <>
      <Boundary label="ASU" kind="solid" animateRerendering={false}>
        <img
          src="images/ASU-Logo.png"
          alt="ASU Fulton Engineering logo"
          style={{ maxHeight: '100px', width: 'auto', padding: '15px' }}
        />
        <Mdx source={aboutASU} collapsed={true} />
      </Boundary>
      <Boundary label="My Education" kind="solid" animateRerendering={false} className="flex flex-col gap-9">
        <Mdx source={aboutMajor}/>
      </Boundary>
    </>
  );
}
