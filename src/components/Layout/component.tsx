import { PropsWithChildren } from 'react';
import Header from '../Header/component';
import Footer from '../Footer/component';
import styles from './styles.module.scss';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header className={styles.header} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
