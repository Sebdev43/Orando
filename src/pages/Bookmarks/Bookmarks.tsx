import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getBookmarks } from '../../store/reducers/bookmarks';
import { NavLink } from 'react-router-dom';

// Le typage des données
import { Hike } from '../../@types/hike';

// components
import HikeFilters from '../../components/HikesFilters/HikeFilters';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';
import CardComponent from '../../components/CardComponent/CardComponent';

//------------------------------- Le composant actuel est la page Favoris
export default function Bookmarks() {
  const dispatch = useAppDispatch();

  // On récupère les propriétés du state bookmarks dans bookmarksReducer
  const tokenStore = useAppSelector((state) => state.userConnection.token);
  const tokenStorage = localStorage.getItem('token');
  const bookmarks = useAppSelector(
    (state) => state.bookmarks.bookmarks
  ) as Hike[];
  const isLoading = useAppSelector(
    (state) => state.bookmarks.isLoading
  ) as boolean;

  useEffect(() => {
    return () => {
      dispatch(getBookmarks());
    };
  }, [dispatch]);

  // On récupère les propriétés du state hikesFilters dans hikesFiltersReducer
  const currentDifficulty = useAppSelector(
    (state) => state.hikesFilters.difficulty
  );
  const currentLocation = useAppSelector(
    (state) => state.hikesFilters.localisation
  );

  // je filtre les favoris par difficulté et par localisation
  const filteredBookmarks = bookmarks.filter((hike: Hike) => {
    const difficultyMatches: boolean =
      currentDifficulty === '' || hike.difficulty === currentDifficulty;
    const locationMatches: boolean =
      currentLocation === '' || hike.localisation === currentLocation;

    return difficultyMatches && locationMatches;
  });

  return (
    <>
      <header>
        <h1>Favoris</h1>
      </header>
      <main className="bookmarks">
        {tokenStore || tokenStorage ? (
          <>
            <section className="bookmarks__filters">
              <HikeFilters data={bookmarks} />
            </section>
            <section className="bookmarks__list">
              {isLoading ? (
                <SkeletonLoader skeletonNumber={20} />
              ) : // Si la liste des favoris n'est pas vide
              filteredBookmarks.length > 0 ? (
                // On affiche la liste des favoris ici
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
  );
}
