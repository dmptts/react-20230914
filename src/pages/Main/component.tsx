import { useState } from 'react';
import { restaurants } from '../../mock';
import RestaurantTabs from '../../components/RestaurantTabs/component';
import Restaurant from '../../components/Restaurant/component';

export default function Main() {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState<number>(0);

  return (
    <div>
      <RestaurantTabs
        restaurants={restaurants}
        onTabSelect={setActiveRestaurantIndex}
      />
      <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
    </div>
  );
}
