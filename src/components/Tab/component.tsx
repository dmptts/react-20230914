import { ComponentPropsWithoutRef } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props extends ComponentPropsWithoutRef<'button'> {
  isActive?: boolean;
}

export default function Tab({ children, isActive = false, ...props }: Props) {
  return (
    <button
      className={classNames(styles.root, { [styles.active]: isActive })}
      {...props}
    >
      {children}
    </button>
  );
}
