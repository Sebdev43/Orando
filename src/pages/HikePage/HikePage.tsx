import { useLocation, useParams } from 'react-router-dom';
import { Hike } from '../../@types/hike';
import { useAppSelector } from '../../hooks/redux';
import HikeDetail from '../../components/HikeDetail/HikeDetail';

function HikePage() {
  const { slug } = useParams();

  const hikes = useAppSelector((state: any) => state.hikesList.list);
  const hike = hikes.find((hike: Hike) => hike.slug === slug);

  return (
    <div className="hike">
      <HikeDetail {...hike} />
    </div>
  );
}

export default HikePage;
