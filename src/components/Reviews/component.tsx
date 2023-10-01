import { IReview } from '../../types';
import Review from '../Review/Review';

interface Props {
  data: IReview[];
}

export default function Reviews({ data }: Props) {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {data.map((review) => (
          <li>
            <Review data={review} />
          </li>
        ))}
      </ul>
    </>
  );
}
