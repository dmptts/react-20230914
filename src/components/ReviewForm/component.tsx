import { useReducer } from 'react';
import Button from '../Button/component';

type Action =
  | { type: 'setName'; payload: string }
  | { type: 'setReviewText'; payload: string }
  | { type: 'submit' };

const INITIAL_STATE = {
  name: '',
  reviewText: '',
};

const reducer = (state: typeof INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload };
    case 'setReviewText':
      return { ...state, reviewText: action.payload };
    case 'submit':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default function ReviewForm() {
  const [formValue, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <form>
      <input
        type="text"
        id="name-field"
        value={formValue.name}
        onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
      />
      <label htmlFor="name-field">Ваше Имя</label>
      <textarea
        name="review-text"
        id="review-field"
        value={formValue.reviewText}
        onChange={(e) =>
          dispatch({ type: 'setReviewText', payload: e.target.value })
        }
      ></textarea>
      <label htmlFor="review-field">Отзыв</label>
      <Button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: 'submit' });
        }}
      >
        Сохранить
      </Button>
    </form>
  );
}
