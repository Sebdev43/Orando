import CardComponent from '../components/CardComponent/CardComponent';
import Skeleton from '@mui/joy/Skeleton/Skeleton';
import Box from '@mui/joy/Box/Box';
import { Hike } from '../@types/hike';

function renderHikes(loading: boolean, hikes: Hike[]) {
  if (loading) {
    return (
      <>
        {Array.from(new Array(4)).map((_, index) => (
          <Box key={index}>
            <Skeleton variant="rectangular" width={360} height={360} />
            <Skeleton variant="text" sx={{ fontSize: '2rem', width: 360 }} />
            <Skeleton variant="rectangular" width={360} height={80} />
          </Box>
        ))}
      </>
    );
  }
  return hikes.map((hike: Hike, index: number) => (
    <CardComponent key={index} {...hike} />
  ));
}

export default renderHikes;
