import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Hike } from '../../@types/hike';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import './OneHike.scss';

// Components
import HikeDetail from '../../components/HikeDetail/HikeDetail';
import { useEffect } from 'react';
import { getOneHike } from '../../store/reducers/hikeOne';

// Le composant actuel est la page Une randonnée
function OneHike() {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = Number(params.id);

  // on provoque la requête qui charge les informations de la randonnée dans le store
  useEffect(() => {
    dispatch(getOneHike(id));
  }, [id, dispatch]);

  const hike = useAppSelector((state) => state.hikeOne.oneHike);
  const loading = useAppSelector((state) => state.hikeOne.loading);
  const error = useAppSelector((state) => state.hikeOne.error);

  useEffect(() => {
    if (error) {
      return navigation('/error');
    }
  }, [error, navigation]);

  // on affiche le chargement
  if (loading) {
    return <h1 className="page_title">Chargement des randonnées</h1>;
  }

  return (
    <div className="hike">
      <HikeDetail hike={hike as Hike} />
    </div>
  );
}

export default OneHike;
