import { IDish } from '../../types';
import Dish from '../Dish/Dish';

interface Props {
  data: IDish[];
}

export default function Menu({ data }: Props) {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {data.map((dish) => (
          <li>
            <Dish data={dish} />
          </li>
        ))}
      </ul>
    </>
  );
}
