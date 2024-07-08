import { Hike } from '../../@types/hike';

// imports MUI
import Skeleton from '@mui/joy/Skeleton/Skeleton';
import Box from '@mui/joy/Box/Box';

function SkeletonLoader() {
  return (
    <>
      {Array.from(new Array(4)).map((_, index) => (
        <Box key={index}>
          <Skeleton variant="rectangular" width={480} height={700} />
          <Skeleton variant="text" sx={{ fontSize: '2rem', width: 480 }} />
          <Skeleton variant="rectangular" width={480} height={80} />
        </Box>
      ))}
    </>
  );
}

export default SkeletonLoader;
