import { useState } from 'react';
import { IDish } from '../../types';
import Button from '../Button/component';

interface Props {
  data: IDish;
}

export default function Dish({ data }: Props) {
  const [amount, setAmount] = useState<number>(0);

  return (
    <div>
      {data.name}
      <Button disabled={amount === 0} onClick={() => setAmount(amount - 1)}>
        -
      </Button>
      {amount}
      <Button disabled={amount === 5} onClick={() => setAmount(amount + 1)}>
        +
      </Button>
    </div>
  );
}
