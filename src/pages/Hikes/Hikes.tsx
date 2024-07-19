import { useEffect } from 'react';
import { getBookmarks } from '../../store/reducers/bookmarks';
import { isTokenExpired } from '../../utils/decodeJwt';
import { Hike } from '../../@types/hike';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import './Hikes.scss';

// components
import HikeFilters from '../../components/HikesFilters/HikeFilters';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';
import CardComponent from '../../components/CardComponent/CardComponent';

//------------------------------ Le composant actuel est la page Voir les randonnées
export default function Hikes() {
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.hikesAll.loading);
  const hikes = useAppSelector((state) => state.hikesAll.hikesList);
  const token = localStorage.getItem('token') as string;
  const expiredToken = isTokenExpired(token);

  useEffect(() => {
    expiredToken ? null : dispatch(getBookmarks());
  }, []);

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
      <h1 className="page_title">Toutes les randonnées du catalogue </h1>
      <div className="hikes">
        <section className="hikes__filters">
          <HikeFilters data={hikes} />
        </section>
        <section className="hikes__list">
          {loading ? (
            <SkeletonLoader skeletonNumber={20} />
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
