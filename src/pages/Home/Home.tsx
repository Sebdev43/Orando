import { useSelector } from 'react-redux';
import { Hike } from '../../@types/hike';

import './Home.scss';
import CardComponent from '../../components/CardComponent/CardComponent';

function Home() {
  const hikes = useSelector((state: any) => state.hikesList.list);

  function renderHikes() {
    return hikes.map((hike: Hike) => {
      return <CardComponent key={hike.id} {...hike} />;
    });
  }

  return (
    <main className="home">
      <article>
        <img className="home__banner" />
        <h1 className="home__title">Bienvenue sur O'Rando !</h1>
        <p className="home__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </article>
      <h2 className="home__title-cards">Quelques randos ...</h2>
      <article className="cards__content">{renderHikes()}</article>
    </main>
  );
}

export default Home;
