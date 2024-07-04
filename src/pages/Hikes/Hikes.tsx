import { useSelector } from 'react-redux';
import { Hike } from '../../@types/hike';

import './Hikes.scss';
import CardComponent from '../../components/CardComponent/CardComponent';
import HikesFilters from '../../components/HikesFilters/HikesFilters';

function Hikes() {
  const hikes = useSelector((state: any) => state.hikes.list);

  const hikesRender = (hikes: Hike[]) => {
    return hikes.map((hike: Hike) => {
      return <CardComponent key={hike.id} {...hike} />;
    });
  };

  return (
    <>
      <h1>Hello World from Hikes !</h1>
      <div className="hikes">
        <section className="hikes__filters">
          <HikesFilters />
        </section>
        <section className="hikes__list">{hikesRender(hikes)}</section>
      </div>
    </>
  );
}

export default Hikes;
