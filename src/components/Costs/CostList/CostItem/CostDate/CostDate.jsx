import s from './CostDate.module.scss';

const CostDate = ({date}) => {
  const day = date.toLocaleString('ru-RU', {day: '2-digit'});
  const month = date.toLocaleString('ru-RU', {month: 'long'});
  const year = date.getFullYear();

  return (
    <div className={s.date}>
      <div className={s.month}>{month}</div>
      <div className={s.year}>{year}</div>
      <div className={s.day}>{day}</div>
    </div>
  );
};

export default CostDate;