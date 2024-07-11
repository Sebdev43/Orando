import { NavLink, Navigate, useParams } from 'react-router-dom';
import { Hike } from '../../@types/hike';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import './OneHike.scss';

// Components
import HikeDetail from '../../components/HikeDetail/HikeDetail';
import { useEffect } from 'react';
import { loadAPI } from '../../store/reducers/hikeOne';

// The actual component
function OneHike() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    dispatch(loadAPI(id));
  }, [id, dispatch]);

  const hike = useAppSelector((state) => state.hikeOne.oneHike);
  const loading = useAppSelector((state) => state.hikeOne.loading);
  const error = useAppSelector((state) => state.hikeOne.error);

  if (error) {
    return <Navigate to="/error" replace />;
  }
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
