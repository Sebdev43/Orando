import { useSelector } from 'react-redux';
import { Hike } from '../../@types/hike';
import './Hikes.scss';

// components
import HikeFilters from '../../components/HikesFilters/HikeFilters';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';
import CardComponent from '../../components/CardComponent/CardComponent';
import { useAppSelector } from '../../hooks/redux';

function Hikes() {
  const loading = useSelector((state: any) => state.hikes.loadingAllHikes);
  const hikes = useSelector((state: any) => state.hikes.list);

  const currentDifficulty = useAppSelector(
    (state) => state.hikesFilters.difficulty
  );
  const currentLocation = useAppSelector(
    (state) => state.hikesFilters.localisation
  );

  // je filtre les randonnées par difficulté et par localisation
  const filteredHikes = hikes.filter((hike: Hike) => {
    const difficultyMatches: boolean =
      currentDifficulty === '' || hike.difficulty === currentDifficulty;
    const locationMatches: boolean =
      currentLocation === '' || hike.localisation === currentLocation;

    return difficultyMatches && locationMatches;
  });

  return (
    <>
      <h1>Hello World from Hikes !</h1>
      <div className="hikes">
        <section className="hikes__filters">
          <HikeFilters />
        </section>
        <section className="hikes__list">
          {loading ? (
            <SkeletonLoader {...loading} />
          ) : (
            filteredHikes.map((hike: Hike, index: number) => (
              <CardComponent key={index} {...hike} />
            ))
          )}
        </section>
      </div>
    </>
  );
}

export default Hikes;
