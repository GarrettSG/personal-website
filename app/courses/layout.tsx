'use cache';

import React from 'react';
import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { Tabs } from '#/ui/tabs';
import { type Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const demo = await db.demo.find({ where: { slug: 'courses' } });

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
  const demo = await db.demo.find({ where: { slug: 'courses' } });
  const sections = await db.section.findMany();

  return (
    <>
      <Boundary label="Courses at Arizona State University" kind="solid" animateRerendering={false}>
        <div className='p-0.75'>Cumulative GPA: 4.00</div>
        <div className='p-0.75'>Major GPA: 4.00</div>
      </Boundary>
      <Boundary kind="solid" animateRerendering={false} className="flex flex-col gap-9">
        <div className="flex justify-between">
          <Tabs
            basePath={`/${demo.slug}`}
            items={[
              { text: 'All' },
              ...sections.map((x) => ({ text: x.name, slug: x.slug })),
            ]}
          />
        </div>

        {children}
      </Boundary>
    </>
  );
}
