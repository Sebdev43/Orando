import { Favorite } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { addBookmark } from '../../store/reducers/bookmarks';

export type BookmarksProps = {
  id: number;
};
export default function Bookmarks({ id }: BookmarksProps) {
  const dispatch = useAppDispatch();

  // Actions
  function handleClick(id: number) {
    console.log(id);
    dispatch(addBookmark(id));
  }

  return (
    <IconButton
      onClick={() => handleClick(id)}
      aria-label="Like minimal photography"
      size="small"
      sx={{
        position: 'absolute',
        zIndex: 20,
        borderRadius: '50%',
        right: '0.3rem',
        bottom: '0.3rem',
        transform: 'translateY(0%)',
        color: 'red',
        '&:hover': { color: '#da7b29' },
      }}
    >
      <Favorite />
    </IconButton>
  );
}
