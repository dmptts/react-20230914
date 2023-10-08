import { useReducer } from 'react';
import Button from '../Button/component';
import styles from './styles.module.scss';

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
    <form className={styles.root}>
      <div className={styles.inputWrapper}>
        <label htmlFor="name-field" className={styles.label}>
          Ваше Имя
        </label>
        <input
          type="text"
          id="name-field"
          className={styles.input}
          value={formValue.name}
          onChange={(e) =>
            dispatch({ type: 'setName', payload: e.target.value })
          }
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="review-field" className={styles.label}>
          Отзыв
        </label>
        <textarea
          name="review-text"
          id="review-field"
          className={styles.textarea}
          value={formValue.reviewText}
          onChange={(e) =>
            dispatch({ type: 'setReviewText', payload: e.target.value })
          }
        ></textarea>
      </div>
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
