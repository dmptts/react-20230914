import { IRestaurant } from '../../types';
import Menu from '../Menu/Menu';
import Reviews from '../Reviews/component';

interface Props {
  restaurant: IRestaurant;
}

export default function Restaurant({ restaurant }: Props) {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu data={restaurant.menu} />
      <Reviews data={restaurant.reviews} />
    </div>
  );
}
