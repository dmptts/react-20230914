import { IRestaurant } from '../../types';
import Container from '../Container/component';
import Menu from '../Menu/component';
import ReviewForm from '../ReviewForm/component';
import Reviews from '../Reviews/component';

interface Props {
  restaurant: IRestaurant;
}

export default function Restaurant({ restaurant }: Props) {
  return (
    <Container>
      <h2>{restaurant.name}</h2>
      <Menu data={restaurant.menu} />
      <Reviews data={restaurant.reviews} />
      <ReviewForm />
    </Container>
  );
}
