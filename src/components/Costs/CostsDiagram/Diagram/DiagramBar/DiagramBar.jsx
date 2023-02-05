import s from'./DiagramBar.module.scss';

const DiagramBar = ({label, maxValue, value}) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = Math.ceil(value / maxValue * 100) + '%';
  }

  return (
    <div className={s.bar}>
      <div className={s.label}>{label}</div>
      <div className={s.inner}>
        <div className={s.fill} style={{width: barFillHeight}}></div>
      </div>

    </div>
  );
};

export default DiagramBar;