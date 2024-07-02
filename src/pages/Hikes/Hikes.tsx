import { useSelector } from 'react-redux';
import { Hike } from '../../@types/hike';

import './Hikes.scss';
import CardComponent from '../../components/CardComponent/CardComponent';

function Hikes() {
  const hikes = useSelector((state: any) => state.hikesList.list);

  const hikesRender = (hikes: Hike[]) => {
    return hikes.map((hike: Hike) => {
      return <CardComponent key={hike.id} {...hike} />;
    });
  };

  return (
    <div className="hikes">
      <h1>Hello World from Hikes !</h1>
      <ul>{hikesRender(hikes)}</ul>
    </div>
  );
}

export default Hikes;
