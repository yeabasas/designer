/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Link } from 'react-router-dom';
import {Banner} from '@designer/shared/ui';

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  return (
    <div className="text-blue-400 p-6 w-1/5 shadow-2xl h-screen rounded m-1">
      <Banner text='Design'/>
      <Link to='/application'>Application</Link>
    </div>
  );
}

export default Sidebar;
