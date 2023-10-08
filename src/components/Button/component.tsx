import { ComponentPropsWithoutRef, useContext } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Button({
  children,
  ...props
}: ComponentPropsWithoutRef<'button'>) {
  const themeContextObj = useContext(ThemeContext);

  return (
    <button
      className={classNames(styles.root, {
        [styles.dark]: themeContextObj!.theme === 'dark',
      })}
      {...props}
    >
      {children}
    </button>
  );
}
