import style from './Home.module.scss';
import image from '../../profile-card-component-main/images/bg-pattern-top.svg';
import Portail_Card from './Portail_Card/Portail_Card';

function Home() {
  return (
    <div className={style.container}>
      <Portail_Card />
    </div>
  );
}

export default Home;
