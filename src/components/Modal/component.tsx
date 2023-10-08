import { PropsWithChildren } from 'react';
import Button from '../Button/component';
import styles from './styles.module.scss';

interface Props extends PropsWithChildren {
  closeModal?: () => void;
}

export default function Modal({ children, closeModal }: Props) {
  return (
    <>
      <div className={styles.root}>
        {children}
        <Button onClick={closeModal}>Закрыть</Button>
      </div>
    </>
  );
}
