import { Navigate, useParams } from 'react-router-dom';
import { Hike } from '../../@types/hike';
import { useAppSelector } from '../../hooks/redux';
import './OneHike.scss';

// Components
import HikeDetail from '../../components/HikeDetail/HikeDetail';

// The actual component
function OneHike() {
  const { slug } = useParams();

  const hikes = useAppSelector((state) => state.hikes.hikesList);
  const hike = hikes.find((hike: Hike) => hike.slug === slug);

  if (!hike) {
    return <Navigate to="/error" replace />;
  }

  return (
    <div className="hike">
      <HikeDetail {...hike!} />
    </div>
  );
}

export default OneHike;
