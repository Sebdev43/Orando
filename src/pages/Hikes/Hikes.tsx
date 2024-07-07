import { useSelector } from 'react-redux';

import './Hikes.scss';
import HikesFilters from '../../components/HikesFilters/HikesFilters';
import renderHikes from '../../utils/skeletonLoader';

function Hikes() {
  const loading = useSelector((state: any) => state.hikes.loadingAllHikes);
  const hikes = useSelector((state: any) => state.hikes.list);

  return (
    <>
      <h1>Hello World from Hikes !</h1>
      <div className="hikes">
        <section className="hikes__filters">
          <HikesFilters />
        </section>
        {/* j'utilise la fonction renderHikes depuis utils/skeletonLoader 
        pour afficher le loarder(skeleton) jusqu'à ce que les randos soient chargées*/}
        <section className="hikes__list">{renderHikes(loading, hikes)}</section>
      </div>
    </>
  );
}

export default Hikes;
