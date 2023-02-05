import Container from '../UI/Container/Container';
import navData from './navData';
import s from './Navigation.module.scss';


const Navigation = () => {
  return (
    <Container className={s.nav}>
      <ul>
        {navData.map(({id, path, text}) => {
          return (
            <li key={id}>
              <a href={path}>{text}</a>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Navigation;