import { Boundary } from '#/ui/boundary';
import { Mdx } from '#/ui/codehike';
import nueroTrack from './neuroTrack.mdx';

export default async function Page() {
  return (
    <Boundary label="Personal Project" kind="solid" animateRerendering={false} className="flex flex-col gap-9">
      <Mdx source={nueroTrack}/>
    </Boundary>
  );
}
