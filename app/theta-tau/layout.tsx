'use cache';

import React from 'react';
import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { ClickCounter } from '#/ui/click-counter';
import { Tabs } from '#/ui/tabs';
import { type Metadata } from 'next';
import { Mdx } from '#/ui/codehike';
import aboutThetaTau from './aboutThetaTau.mdx';
import aboutFratDev from './aboutFratWeb.mdx';

export async function generateMetadata(): Promise<Metadata> {
  const demo = db.demo.find({ where: { slug: 'theta-tau' } });

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
  const demo = db.demo.find({ where: { slug: 'theta-tau' } });
  const sections = db.section.findMany();

  return (
    <>
      <Boundary label="Demo" kind="solid" animateRerendering={false}>
        <img
          src="images/theta-tau.png"
          alt="Theta Tau Logo"
          style={{ maxHeight: '200px', width: 'auto', padding: '5px' }}
        />
        <div className='p-3'>
          <a>Theta Tau - Delta Gamma Website → </a>
          <a 
            href="https://thetatau-dg.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 underline font-medium hover:text-blue-600 transition-colors"
          >
            thetatau-dg.org
          </a>
        </div>

        <Mdx source={aboutThetaTau} collapsed={true} />
      </Boundary>
      <Boundary
        label="layout.tsx"
        kind="solid"
        animateRerendering={false}
        className="flex flex-col gap-9"
      >
        <Mdx source={aboutFratDev}/>
      </Boundary>
    </>
  );
}
