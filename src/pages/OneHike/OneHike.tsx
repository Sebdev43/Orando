import { NavLink, Navigate, useParams } from 'react-router-dom';
import { Hike } from '../../@types/hike';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import './OneHike.scss';

// Components
import HikeDetail from '../../components/HikeDetail/HikeDetail';
import { useEffect } from 'react';
import { loadAPI } from '../../store/reducers/hikesListReducer';
import { Error } from '@mui/icons-material';

// The actual component
function OneHike() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    dispatch(loadAPI(id));
  }, [id, dispatch]);

  const hike = useAppSelector((state) => state.hikes.hikeById);
  const loading = useAppSelector((state) => state.hikes.load);
  const error = useAppSelector((state) => state.hikes.err);

  if (error) {
    return <Navigate to="/error" replace />;
  }
  if (loading) {
    return <h1 className="page_title">Chargement des randonnées</h1>;
  }

  // if (!hike) {
  //   return null; // Ou afficher un message de chargement ou une alternative appropriée
  // }

  // if (hike.id !== id) {
  //   return <Navigate to="/error" replace />;
  // }

  console.log(hike);

  return (
    <div className="hike">
      <HikeDetail hike={hike as Hike} />
    </div>
  );
}

export default OneHike;
