'use cache';

import { Boundary } from '#/ui/boundary';
import { Mdx } from '#/ui/codehike';
import fultonMarkdown from './aboutFulton.mdx';
import taMarkdown from './aboutTA.mdx';

export default async function Page() {
  return (
    <div>
      <Boundary label="About Fulton" kind="solid" animateRerendering={false}>
        <img
          src="images/asu_fultonengineering.png"
          alt="ASU Fulton Engineering logo"
          style={{ maxHeight: '150px', width: 'auto', padding: '5px' }}
        />
        <Mdx source={fultonMarkdown} collapsed={true} />
      </Boundary>
      <Boundary label="Position" kind="solid" animateRerendering={false} className="flex flex-col gap-9">
        <Mdx source={taMarkdown}/>
      </Boundary>
    </div>
  );
}
