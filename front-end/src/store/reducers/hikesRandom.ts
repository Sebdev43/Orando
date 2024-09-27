/**
 * Manages the state and actions related to fetching random hikes.
 *
 * This module defines the properties and initial state for the random hikes list,
 * and provides an asynchronous action to fetch random hikes from an API. 
 * The state includes:
 * - `randomHikesList`: An array of random hikes.
 * - `loading`: A boolean indicating whether the data is currently being fetched.
 * - `error`: An error message if the fetching fails.
 *
 * @module hikesRandom
 */

import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// types
import { Hike } from '../../@types/hike';

export type HikesList = {
  randomHikesList: Hike[];
  loading: boolean;
  error: string | undefined | null;
};

// initial properties for the random hikes state
const initialState: HikesList = {
  randomHikesList: [],
  loading: false,
  error: null,
};

/**
 * Asynchronous thunk action to fetch random hikes from the API.
 *
 * @async
 * @function
 * @returns {Promise<Hike[]>} The fetched random hikes data.
 * @throws Will throw an error if the fetch fails.
 */

export const getRandomHikes = createAsyncThunk(
  'HIKES/LOAD_RANDOM_HIKES',
  async () => {
    try {
      const { data } = await axios.get(`/api/hikes/random`);
      return data;
    } catch {
      throw new Error('Pas de randonnées "random" trouvées');
    }
  }
);

/**
 * Reducer to handle the state of random hikes based on the dispatched actions.
 *
 * @function
 * @param {HikesList} state - The current state of the random hikes list.
 * @param {object} action - The dispatched action containing the type and payload.
 */

export const hikesRandomReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getRandomHikes.pending, (state) => {
      state.loading = true;
    })
    .addCase(getRandomHikes.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    })
    .addCase(getRandomHikes.fulfilled, (state, action) => {
      state.randomHikesList = action.payload;
      state.loading = false;
    });
});
