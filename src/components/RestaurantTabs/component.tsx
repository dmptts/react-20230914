import { Dispatch, SetStateAction } from 'react';
import Tab from '../Tab/component';
import { IRestaurant } from '../../types';
import Container from '../Container/component';

interface Props {
  restaurants: IRestaurant[];
  activeRestaurantIndex: number;
  onTabSelect: Dispatch<SetStateAction<number>>;
}

export default function RestaurantTabs({
  restaurants,
  activeRestaurantIndex,
  onTabSelect,
}: Props) {
  return (
    <Container>
      {restaurants.map(({ id, name }, i) => (
        <Tab
          key={id}
          isActive={activeRestaurantIndex === i}
          onClick={() => onTabSelect(i)}
        >
          {name}
        </Tab>
      ))}
    </Container>
  );
}
