import { useState } from 'react';
import { restaurants } from '../../mock';
import Layout from '../../components/Layout/component';
import Restaurant from '../../components/Restaurant/component';
import RestaurantTabs from '../../components/RestaurantTabs/component';

export default function Main() {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState<number>(0);

  return (
    <>
      <Layout>
        <>
          <RestaurantTabs
            restaurants={restaurants}
            activeRestaurantIndex={activeRestaurantIndex}
            onTabSelect={setActiveRestaurantIndex}
          />
          <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
        </>
      </Layout>
    </>
  );
}
