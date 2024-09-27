import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// types
import { Hike } from '../../@types/hike';



export type HikesList = {
  hikesList: Hike[];
  loading: boolean;
  error: string | undefined | null;
};

const initialState: HikesList = {
  hikesList: [],
  loading: false,
  error: null,
};

/**
 * AsyncThunk to load the list of hikes.
 * 
 * This action fetches the list of hikes from the server.
 *
 * @async
 * @function getHikes
 * @returns {Promise<Hike[]>} The list of hikes retrieved from the server.
 * @throws Will throw an error if the hikes cannot be retrieved.
 */

export const getHikes = createAsyncThunk('HIKES/LOAD_HIKES', async () => {
  try {
    const { data } = await axios.get(`/api/hikes`);
    return data;
  } catch {
    throw new Error('Pas de randonnées trouvées');
  }
});

/**
 * Reducer for handling the hikes list state.
 * 
 * Manages the state for the list of hikes, including loading, success, and error states.
 *
 * @function hikesListReducer
 * @param {HikesList} state - The initial state for the hikes list.
 * @param {import('@reduxjs/toolkit').AnyAction} action - The action dispatched.
 * @returns {HikesList} The new state after applying the action.
 */

export const hikesListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getHikes.pending, (state) => {
      state.loading = true;
    })
    .addCase(getHikes.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    })
    .addCase(getHikes.fulfilled, (state, action) => {
      state.hikesList = action.payload;
      state.loading = false;
    });
});
