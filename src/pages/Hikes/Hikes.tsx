import { useSelector } from 'react-redux';
import { Hike } from '../../@types/hike';
import './Hikes.scss';

// components
import HikesFilters from '../../components/HikesFilters/HikesFilters';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';
import CardComponent from '../../components/CardComponent/CardComponent';

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
        <section className="hikes__list">
          {loading ? (
            <SkeletonLoader {...loading} />
          ) : (
            hikes.map((hike: Hike, index: number) => (
              <CardComponent key={index} {...hike} />
            ))
          )}
        </section>
      </div>
    </>
  );
}

export default Hikes;
