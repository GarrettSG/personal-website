'use cache'

import { Boundary } from '#/ui/boundary';
import { Mdx } from '#/ui/codehike';
import aboutMeritage from './aboutMeritage.mdx';
import aboutPosition from './aboutPosition.mdx';

export default async function Page() {
  return (
    <div>
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
    </div>
  );
}
