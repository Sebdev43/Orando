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
      console.log('dans le try DELETE', id);

      const { data } = await axios.delete('/api/bookmarks', {
        data: { hikeId: id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('dans le return du DELETE', data);
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
      console.log('dans le try ADD', data);

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
      console.log(' DANS LE GET PENDING ');
      state.isLoading = true;
    })
    .addCase(getBookmarks.fulfilled, (state, action) => {
      console.log('dans le fulfilled GET');
      state.isLoading = false;
      state.bookmarks = action.payload;
    })
    .addCase(deleteBookmark.fulfilled, (state, action) => {
      console.log('dans le fulfilled DELETE', action.payload);

      state.bookmarks = state.bookmarks.filter(
        (hike: Hike) => hike.id !== action.payload
      );
    })
    .addCase(addBookmark.rejected, (state, action) => {
      console.log('dans le rejected ADD', action);
    })
    .addCase(addBookmark.fulfilled, (state, action) => {
      console.log('dans le fulfilled ADD', action);
      state.bookmarks.push(action.payload);
    });
});
