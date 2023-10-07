import { IReview } from '../../types';

interface Props {
  data: IReview;
}

export default function Review({ data }: Props) {
  return (
    <p>
      {data.user}: {data.text}
    </p>
  );
}
