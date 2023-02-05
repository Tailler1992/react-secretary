import CostItem from './CostItem/CostItem';
import s from'./CostList.module.scss';

const CostList = ({costs}) => {

  if (costs.length === 0) {
    return <h2 className={s.hint}>В этом году расходов нет.</h2>;
  }

  return (
    <ul className={s.list}>
      {costs.map((item) => (
        <CostItem
          key={item.id}
          date={item.date}
          description={item.description}
          amount={item.amount}
        />
      ))}
    </ul>
  );
};

export default CostList;

