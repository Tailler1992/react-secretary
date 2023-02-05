import CostDate from './CostDate/CostDate';

import s from './CostItem.module.scss';


const CostItem = ({date, amount, description}) => {
  return (
    <li className={s.item}>
      <CostDate date={date}/>
      <div className={s.content}>
        <h2>{description}</h2>
        <div className={s.price}>${amount}</div>
      </div>
    </li>
  );
};

export default CostItem;