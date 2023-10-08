import { ComponentPropsWithoutRef, useContext } from 'react';
import classNames from 'classnames';
import Container from '../Container/component';
import styles from './styles.module.scss';
import Button from '../Button/component';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Header({
  className,
  ...props
}: ComponentPropsWithoutRef<'header'>) {
  const themeContextObj = useContext(ThemeContext);

  return (
    <header className={classNames(styles.root, className)} {...props}>
      <Container className={styles.container}>
        <span>Агрегатор ресторанов&trade;</span>
        <Button
          onClick={() =>
            themeContextObj!.setTheme(
              themeContextObj!.theme === 'light' ? 'dark' : 'light'
            )
          }
        >
          Сменить тему
        </Button>
      </Container>
    </header>
  );
}
