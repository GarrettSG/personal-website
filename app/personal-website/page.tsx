import { Boundary } from '#/ui/boundary';
import { Mdx } from '#/ui/codehike';
import personalWebsite from './personalWebsite.mdx';

export default function Page() {
  return (
    <div>
      <Boundary label="Personal Project" kind="solid" animateRerendering={false} className="flex flex-col gap-9">
        <Mdx source={personalWebsite} />
      </Boundary>
    </div>
  );
}
