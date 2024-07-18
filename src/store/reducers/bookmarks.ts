import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { Hike } from '../../@types/hike';

// Le typage des données
type BookmarksProps = {
  bookmarks: Hike[];
  isLoading: boolean;
  isFavorite: boolean;
};

//------------------------------  Le composant actuel
const initialState: BookmarksProps = {
  bookmarks: [],
  isLoading: false,
  isFavorite: false,
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
      return data;
    } catch (error) {
      throw new Error('Une erreur est survenue');
    }
  }
);

export const deleteBookmark = createAsyncThunk(
  'BOOKMARK/DELETE_BOOKMARK',
  async (id: number, thunkAPI) => {
    try {
      const rootState = thunkAPI.getState() as RootState;
      const token = rootState.userConnection.token;

      const { data } = await axios.delete('/api/bookmarks', {
        data: { hikeId: id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      throw new Error('Une erreur est survenue');
    }
  }
);

export const addBookmark = createAsyncThunk(
  'BOOKMARK/POST_BOOKMARK',
  async (id: number, thunkAPI) => {
    try {
      const rootstate = thunkAPI.getState() as RootState;
      const token = rootstate.userConnection.token;

      console.log('dans le try ADD', id);

      const { data } = await axios.post(
        '/api/bookmarks',
        { hikeId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      throw new Error('Une erreur est survenue');
    }
  }
);

// Le reducer
export const bookmarksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getBookmarks.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getBookmarks.fulfilled, (state, action) => {
      state.bookmarks = action.payload;
      state.isLoading = false;
    })
    .addCase(deleteBookmark.fulfilled, (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (hike: Hike) => hike.id !== action.payload.hikeId
      );
    })
    .addCase(addBookmark.fulfilled, (state, action) => {
      state.bookmarks.push(action.payload.hike);
    });
});
