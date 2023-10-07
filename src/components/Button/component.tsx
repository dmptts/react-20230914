import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export default function Button({
  children,
  ...props
}: ComponentPropsWithoutRef<'button'>) {
  return (
    <button className={classNames(styles.root)} {...props}>
      {children}
    </button>
  );
}
