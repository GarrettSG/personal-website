'use cache';

import { Boundary } from '#/ui/boundary';
import { Mdx } from '#/ui/codehike';
import aboutASU from './aboutASU.mdx';
import aboutMajor from './aboutMajor.mdx';

export default async function Page() {
  return (
    <div>
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
    </div>
  );
}
