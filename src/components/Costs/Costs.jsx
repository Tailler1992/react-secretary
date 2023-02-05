import {useState} from 'react';

import Container from '../UI/Container/Container';
import CostsFilter from './CostsFilter/CostsFilter';
import CostList from './CostList/CostList';
import CostsDiagram from './CostsDiagram/CostsDiagram';

const Costs = ({costs}) => {
  const currentYear = new Date().getFullYear().toString()
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = costs.filter(item => item.date.getFullYear().toString() === selectedYear);

  return (
    <Container>
      <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear}/>
      <CostList costs={filteredCosts}/>
      <CostsDiagram costs={filteredCosts}/>
    </Container>
  );
};

export default Costs;