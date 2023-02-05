import s from './CostsFilter.module.scss';

const CostsFilter = ({onChangeYear, year}) => {
  const yearChangeHandler = (event) => {
    onChangeYear(event.target.value);
  };

  return (
    <div className={s.filter}>
      <div className={s.control}>
        <label>Выбор по году</label>
        <select value={year} onChange={yearChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;