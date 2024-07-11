import { Navigate, useParams } from 'react-router-dom';
import { Hike } from '../../@types/hike';
import { useAppSelector } from '../../hooks/redux';

import './OneHike.scss';

// Components
import HikeDetail from '../../components/HikeDetail/HikeDetail';

function OneHike() {
  const { slug } = useParams();

  const hikes = useAppSelector((state) => state.hikes.hikesList);
  if (!hikes) {
    return <Navigate to="/error" replace />;
  }
  const hike = hikes.find((hike: Hike) => hike.slug === slug);

  return (
    <>
      <HikeDetail {...hike!} />
    </>
  );
}

export default OneHike;
