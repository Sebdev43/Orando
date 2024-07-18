import { Favorite } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addBookmark, deleteBookmark } from '../../store/reducers/bookmarks';

// MUI
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export type BookmarksProps = {
  id: number;
};

//------------------------------- Le composant actuel
export default function Bookmarks({ id }: BookmarksProps) {
  const dispatch = useAppDispatch();

  const bookmarks = useAppSelector((state) => state.bookmarks.bookmarks);

  function handleClick(id: number, e: React.MouseEvent<HTMLButtonElement>) {
    // e.stopPropagation();

    if (bookmarks.find((bookmark) => bookmark.id === id)) {
      dispatch(deleteBookmark(id));
    } else {
      dispatch(addBookmark(id));
    }
  }

  const isFavorite = bookmarks.some((bookmark) => bookmark.id === id);

  return isFavorite ? (
    <IconButton
      onClick={(e) => handleClick(id, e)}
      aria-label="Like minimal photography"
      size="small"
      sx={{
        position: 'absolute',
        backgroundColor: 'whitesmoke',
        zIndex: 2000,
        borderRadius: '50%',
        width: '2.5rem',
        height: '2.5rem',
        right: '0.4em',
        top: '0.4em',
        transform: 'translateY(0%)',
        color: 'red',
        '&:hover': { color: '#da7b29' },
      }}
    >
      <Favorite />
    </IconButton>
  ) : (
    <IconButton
      onClick={(e) => handleClick(id, e)}
      aria-label="Like minimal photography"
      size="small"
      sx={{
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 2000,
        borderRadius: '50%',
        width: '2.5rem',
        height: '2.5rem',
        right: '0.4em',
        top: '0.4em',
        transform: 'translateY(0%)',
        color: 'red',
        '&:hover': { color: '#da7b29', backgroundColor: 'white' },
      }}
    >
      <FavoriteBorder />
    </IconButton>
  );
}
