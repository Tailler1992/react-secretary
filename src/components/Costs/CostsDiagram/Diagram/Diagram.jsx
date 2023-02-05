import DiagramBar from './DiagramBar/DiagramBar';

import s from'./Diagram.module.scss';

const Diagram = ({dataSets}) => {

  const dataSetsValues = dataSets.map(dataSet => dataSet.value);
  const maxMonthCosts = Math.max(...dataSetsValues);

  return (
    <div className={s.diagram}>
      {dataSets.map(dataSet =>
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />)}
    </div>

  );
};

export default Diagram;