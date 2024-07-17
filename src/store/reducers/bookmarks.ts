import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { Hike } from '../../@types/hike';

// Le typage des données
type BookmarksProps = {
  bookmarks: Hike[];
  isLoading: boolean;
};

//------------------------------  Le composant actuel
const initialState: BookmarksProps = {
  bookmarks: [],
  isLoading: false,
};

export const getBookmarks = createAsyncThunk(
  'BOOKMARKS/GET_BOOKMARKS',
  async (_, thunkAPI) => {
    try {
      const rootstate = thunkAPI.getState() as RootState;
      const token = rootstate.userConnection.token;

      const { data } = await axios.get('/api/bookmarks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Dans le try de GET BOOKMARKS', data);

      return data;
    } catch (error) {
      throw new Error('Une erreur est survenue');
    }
  }
);

export const deleteBookmark = createAsyncThunk(
  'BOOKMARKS/DELETE_BOOKMARKS',
  async (hikeId, thunkAPI) => {
    try {
      const rootstate = thunkAPI.getState() as RootState;
      const token = rootstate.userConnection.token;

      const { data } = await axios.delete('/api/bookmarks', {
        data: hikeId,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Dans le try de DELETE BOOKMARK', data);

      return data;
    } catch (error) {
      throw new Error('Une erreur est survenue');
    }
  }
);

export const addBookmark = createAsyncThunk(
  'BOOKMARKS/POST_BOOKMARKS',
  async (id, thunkAPI) => {
    try {
      const rootstate = thunkAPI.getState() as RootState;
      const token = rootstate.userConnection.token;

      console.log('dans le try ADD BOOKMARK', id, token);

      const { data } = await axios.post(
        '/api/bookmarks',
        { hikeId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Dans le try de POST BOOKMARK', data);

      return data;
    } catch (error) {
      throw new Error('Une erreur est survenue');
    }
  }
);

// Le reducer
export const bookmarksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getBookmarks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bookmarks = action.payload;
    })
    .addCase(deleteBookmark.fulfilled, (state, action) => {
      state.bookmarks = action.payload;
      console.log(state.bookmarks);
    })
    .addCase(addBookmark.fulfilled, (state, action) => {
      state.bookmarks = action.payload;
      console.log(state.bookmarks);
    });
});
