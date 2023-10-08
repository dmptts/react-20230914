import { IDish } from '../../types';
import Dish from '../Dish/component';

interface Props {
  data: IDish[];
}

export default function Menu({ data }: Props) {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {data.map((dish) => (
          <li key={dish.id}>
            <Dish data={dish} />
          </li>
        ))}
      </ul>
    </>
  );
}
