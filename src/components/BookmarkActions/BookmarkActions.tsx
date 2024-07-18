import { Favorite } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  addBookmark,
  deleteBookmark,
  getBookmarks,
} from '../../store/reducers/bookmarks';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export type BookmarksProps = {
  id: number;
};

//------------------------------- Le composant actuel
export default function Bookmarks({ id }: BookmarksProps) {
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector((state) => state.bookmarks.bookmarks);

  // const location = useLocation().pathname;

  // useEffect(() => {
  //   dispatch(getBookmarks());
  // }, [bookmarks]);

  function handleClick(id: number) {
    if (bookmarks.find((bookmark) => bookmark.id === id)) {
      dispatch(deleteBookmark(id));
    } else {
      dispatch(addBookmark(id));
    }
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
