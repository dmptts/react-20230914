import { Dispatch, SetStateAction } from 'react';
import Tab from '../Tab/component';
import { IRestaurant } from '../../types';

interface Props {
  restaurants: IRestaurant[];
  onTabSelect: Dispatch<SetStateAction<number>>;
}

export default function RestaurantTabs({ restaurants, onTabSelect }: Props) {
  return (
    <div>
      {restaurants.map(({ id, name }, i) => (
        <Tab key={id} onClick={() => onTabSelect(i)}>
          {name}
        </Tab>
      ))}
    </div>
  );
}
