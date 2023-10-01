import { useState } from 'react';
import { IDish } from '../../types';

interface Props {
  data: IDish;
}

export default function Dish({ data }: Props) {
  const [amount, setAmount] = useState<number>(0);

  return (
    <div>
      {data.name}
      <button disabled={amount === 0} onClick={() => setAmount(amount - 1)}>
        -
      </button>
      {amount}
      <button disabled={amount === 5} onClick={() => setAmount(amount + 1)}>
        +
      </button>
    </div>
  );
}
