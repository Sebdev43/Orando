import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';

// Le typage TS
export type hikeCreationProps = {
  hikeLocations: string[];
};

const initialState: hikeCreationProps = {
  hikeLocations: [''],
};

// export const setWidth = createAction<string>('SETTINGS/MAX_WIDTH_MEDIASCREEN');

export const locationsFromAPI = createAsyncThunk(
  'HIKE_LOCATION/LOAD_HIKE_LOCATIONS',
  async () => {
    try {
      const { data } = await axios.get(`API DU GOUVERNEMENT`);
      return data;
    } catch {
      throw new Error('Pas de localisation trouvées');
    }
  }
);

export const hikeCreationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(locationsFromAPI.pending, (state) => {})
    .addCase(locationsFromAPI.rejected, (state, action) => {
      // Gestion des erreurs
    })
    .addCase(locationsFromAPI.fulfilled, (state, action) => {});
});
