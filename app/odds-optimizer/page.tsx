import { Boundary } from '#/ui/boundary';
import { Mdx } from '#/ui/codehike';
import oddsOptimizer from './oddsOptimizer.mdx';

export default async function Page() {
  return (
    <Boundary label="Personal Project" kind="solid" animateRerendering={false} className="flex flex-col gap-9">
      <Mdx source={oddsOptimizer}/>
    </Boundary>
  );
}
