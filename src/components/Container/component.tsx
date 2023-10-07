import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export default function Container({
  children,
  className,
}: ComponentPropsWithoutRef<'div'>) {
  return <div className={classNames(styles.root, className)}>{children}</div>;
}
