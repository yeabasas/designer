import styles from './core-services.module.scss';

/* eslint-disable-next-line */
export interface CoreServicesProps {}

export function CoreServices(props: CoreServicesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CoreServices!</h1>
    </div>
  );
}

export default CoreServices;
