import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getBookmarks } from '../../store/reducers/bookmarks';
import { NavLink } from 'react-router-dom';

import './Bookmarks.scss';

// Le typage des données
import { Hike } from '../../@types/hike';

// components
import HikeFilters from '../../components/HikesFilters/HikeFilters';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';
import CardComponent from '../../components/CardComponent/CardComponent';

//------------------------------- Le composant actuel est la page Favoris
export default function Bookmarks() {
  const dispatch = useAppDispatch();

  const bookmarks = useAppSelector(
    (state) => state.bookmarks.bookmarks
  ) as Hike[];

  const isLoading = useAppSelector(
    (state) => state.bookmarks.isLoading
  ) as boolean;

  const tokenStore = useAppSelector((state) => state.userConnection.token);

  // On actualise la propriété bookmarks du state à chacun de ses changements
  useEffect(() => {
    dispatch(getBookmarks());
  }, []);

  // On récupère les propriétés du state hikesFilters dans hikesFiltersReducer
  const currentDifficulty = useAppSelector(
    (state) => state.hikesFilters.difficulty
  );
  const currentLocation = useAppSelector(
    (state) => state.hikesFilters.localisation
  );

  // je filtre les favoris par difficulté et par localisation
  const filteredBookmarks = bookmarks?.filter((hike: Hike) => {
    const difficultyMatches: boolean =
      currentDifficulty === '' || hike.difficulty === currentDifficulty;
    const locationMatches: boolean =
      currentLocation === '' || hike.localisation === currentLocation;

    return difficultyMatches && locationMatches;
  });

  return (
    !isLoading && (
      <>
        <header>
          <h1>Favoris</h1>
        </header>
        <main className="bookmarks">
          {tokenStore ? (
            <>
              <section className="bookmarks__filters">
                {bookmarks.length > 0 ? <HikeFilters data={bookmarks} /> : ''}
              </section>
              <section className="bookmarks__list">
                {filteredBookmarks.length > 0 ? (
                  filteredBookmarks.map((hike: Hike, index: number) => (
                    <CardComponent key={index} {...hike} />
                  ))
                ) : (
                  <p className="bookmarks__not-found">
                    Vous n'avez pas de favoris
                  </p>
                )}
              </section>
            </>
          ) : (
            <p className="bookmarks__not-logged">
              Vous devez vous <NavLink to="/connexion">connecter</NavLink>
              &nbsp;pour voir vos Favoris
            </p>
          )}
        </main>
      </>
    )
  );
}
