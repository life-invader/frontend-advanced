import { useState } from 'react';
import * as style from './Counter.module.scss';

export const Counter = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <div className={style.counter}>
      <p className={style.text}>{value}</p>

      <button className={style.button} onClick={increment}>
        Increment
      </button>
    </div>
  );
};
