import {useState} from 'react';
import NewCost from '../../components/NewCost/NewCost';
import Costs from '../../components/Costs/Costs';
import INITIAL_COSTS from './INITIAL_COSTS';


const CostAccounting = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </>
  );
};

export default CostAccounting;