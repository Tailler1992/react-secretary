import s from './Container.module.scss';

const Container = ({className, children}) => {
  return (
    <div className={`${s.card} ${className}`}>
      {children}
    </div>
  );
};

export default Container;