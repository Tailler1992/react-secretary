import {useState} from 'react';
import Container from '../UI/Container/Container';

import s from './NewCost.module.scss';

const NewCost = ({onAddCost}) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const [isFormVisible, setIsFormVisible] = useState(false);
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      id: Math.random(),
      description: name,
      amount,
      date: new Date(date)
    };

    onAddCost(costData);

    setName('');
    setAmount('');
    setDate('');
    setIsFormVisible(false);
  };

  const btn = <button type="button" onClick={() => setIsFormVisible(true)}>Добавить Новый Расход</button>;

  return (
    <Container className={s['new-cost']}>
      {!isFormVisible ? btn :
        <form onSubmit={submitHandler}>
          <div className={s.controls}>
            <div className={s.control}>
              <label>Название</label>
              <input type="text" value={name} onChange={nameChangeHandler}/>
            </div>
            <div className={s.control}>
              <label>Сумма</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={amount}
                onChange={amountChangeHandler}/>
            </div>
            <div className={s.control}>
              <label>Дата</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={date}
                onChange={dateChangeHandler}/>
            </div>
          </div>
          <div className={s.actions}>
            <button type="submit">Добавить Расход</button>
            <button type="button" onClick={() => setIsFormVisible(false)}>Отмена</button>
          </div>
        </form>
      }
    </Container>
  );
};

export default NewCost;