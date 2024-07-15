import { useNavigate, useParams } from 'react-router-dom';
import { Hike } from '../../@types/hike';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import './OneHike.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const error = useAppSelector((state) => state.hikeOne.error);

  // on provoque la requête qui charge les informations de la randonnée dans le store
  useEffect(() => {
    dispatch(getOneHike(id));
    if (error) {
      return navigation('/error');
    }
  }, [id, dispatch, error, navigation]);

  const hike = useAppSelector((state) => state.hikeOne.oneHike);
  const loading = useAppSelector((state) => state.hikeOne.loading);

  return (
    <div className="hike">
      {loading ? '' : <HikeDetail hike={hike as Hike} />}
    </div>
  );
}

export default OneHike;
