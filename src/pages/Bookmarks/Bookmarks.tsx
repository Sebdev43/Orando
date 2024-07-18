import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getBookmarks } from '../../store/reducers/bookmarks';
import { NavLink, useNavigate } from 'react-router-dom';

import './Bookmarks.scss';

// Le typage des données
import { Hike } from '../../@types/hike';

// components
import HikeFilters from '../../components/HikesFilters/HikeFilters';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';
import CardComponent from '../../components/CardComponent/CardComponent';
import { isTokenExpired } from '../../utils/decodeJwt';

//------------------------------- Le composant actuel est la page Favoris
export default function Bookmarks() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const bookmarks = useAppSelector((state) => state.bookmarks.bookmarks);
  const isLoading = useAppSelector((state) => state.bookmarks.isLoading);

  const token = localStorage.getItem('token') as string;
  const expiredToken = isTokenExpired(token);

  // On actualise la propriété bookmarks du state à chacun de ses changements
  useEffect(() => {
    dispatch(getBookmarks());
  }, [bookmarks]);

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

  return expiredToken ? (
    <p className="bookmarks__not-logged">
      Vous devez vous <NavLink to="/connexion">connecter</NavLink>
      &nbsp;pour voir vos Favoris
    </p>
  ) : (
    <>
      <header>
        <h1>Favoris</h1>
      </header>
      {/* 
      {isLoading ? (
        <SkeletonLoader skeletonNumber={10} />
      ) : ( */}
      <main className="bookmarks">
        {filteredBookmarks && (
          <>
            <section className="bookmarks__filters">
              <HikeFilters data={bookmarks} />
            </section>
            <section className="bookmarks__list">
              {filteredBookmarks.length === 0 ? (
                <p className="bookmarks__not-found">
                  Vous n'avez pas de favoris
                </p>
              ) : (
                filteredBookmarks.map((hike: Hike, index: number) => (
                  <CardComponent key={index} {...hike} />
                ))
              )}
            </section>
          </>
        )}
      </main>
      {/* )} */}
    </>
  );
}
