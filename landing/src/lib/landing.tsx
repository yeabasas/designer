import { Dnd, Sidebar } from '@designer/shared/ui';
/* eslint-disable-next-line */
export interface LandingProps {}

export function Landing(props: LandingProps) {
  return (
    <div className="flex">
      <Sidebar/>
      <Dnd/>
    </div>
  );
}

export default Landing;
