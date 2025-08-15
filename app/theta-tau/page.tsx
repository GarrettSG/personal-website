'use cache';

import { Boundary } from '#/ui/boundary';
import { Mdx } from '#/ui/codehike';
import aboutThetaTau from './aboutThetaTau.mdx';
import aboutFratDev from './aboutFratWeb.mdx';

export default async function Page() {
  return (
    <div>
      <Boundary label="About Theta Tau" kind="solid" animateRerendering={false}>
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
        label="Website Development"
        kind="solid"
        animateRerendering={false}
        className="flex flex-col gap-9"
      >
        <Mdx source={aboutFratDev}/>
      </Boundary>
    </div>
  );
}
