import styles from './page.module.scss';
import {Sidebar} from '@designer/shared/ui'
/* eslint-disable-next-line */
export interface PageProps {}

export function Page(props: PageProps) {
  return (
    <div className={styles['container']}>
      <Sidebar/>
    </div>
  );
}

export default Page;
