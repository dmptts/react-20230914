import { useState } from 'react';
import { IRestaurant } from '../../types';
import Container from '../Container/component';
import Menu from '../Menu/component';
import ReviewForm from '../ReviewForm/component';
import Reviews from '../Reviews/component';
import Button from '../Button/component';
import { createPortal } from 'react-dom';
import Modal from '../Modal/component';

interface Props {
  restaurant: IRestaurant;
}

export default function Restaurant({ restaurant }: Props) {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <Container>
      <h2>{restaurant.name}</h2>
      <Menu data={restaurant.menu} />
      <Reviews data={restaurant.reviews} />
      <Button onClick={() => setIsModalOpened(true)}>Создать отзыв</Button>
      {isModalOpened &&
        createPortal(
          <Modal closeModal={() => setIsModalOpened(false)}>
            <ReviewForm />
          </Modal>,
          document.getElementById('modal-container')!
        )}
    </Container>
  );
}
