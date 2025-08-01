'use cache';

import React from 'react';
import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { ClickCounter } from '#/ui/click-counter';
import { Tabs } from '#/ui/tabs';
import { type Metadata } from 'next';
import { Mdx } from '#/ui/codehike';
import readme from './readme.mdx';

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
      <Boundary label="Demo" kind="solid" animateRerendering={false}>
        <Mdx source={readme} collapsed={true} />
      </Boundary>
      <Boundary
        label="Courses"
        kind="solid"
        animateRerendering={false}
        className="flex flex-col gap-9"
      >
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
