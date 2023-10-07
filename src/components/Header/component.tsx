import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';
import Container from '../Container/component';
import styles from './styles.module.scss';

export default function Header({
  className,
  ...props
}: ComponentPropsWithoutRef<'header'>) {
  return (
    <header className={classNames(styles.root, className)} {...props}>
      <Container className={styles.container}>
        <span>Агрегатор ресторанов&trade;</span>
      </Container>
    </header>
  );
}
