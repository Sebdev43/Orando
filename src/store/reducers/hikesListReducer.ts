import {
  createReducer,
  createAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

//  le typage TS pour une randonnée = Hike
// Une liste s'exprime par un tableau (en général)
// ligne 14, le tableau des randonnées est doonc un [tableau] de type "Hike" = Hike[]
import { Hike } from '../../@types/hike';

//  le typage TS pour tout l'état (le state hikes du store.tsx)
export type HikesList = {
  randomList: Hike[];
  loadingRandoms: boolean;
  list: Hike[];
  loadingAll: boolean;
  error: string | undefined | null;
};
const initialState: HikesList = {
  randomList: [],
  loadingRandoms: false,
  list: [],
  loadingAll: false,
  error: null,
};

// En asynchrone, on utilise la méthode "createasyncThunk" pour récupérer les données d'une API
export const loadrandomHikes = createAsyncThunk(
  'HIKES/LOAD_RANDOM_HIKES',
  async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/hikes/random`);
      console.log(data);
      return data;
    } catch {
      throw new Error('Pas de randonnées "random" trouvées');
    }
  }
);

export const loadHikes = createAsyncThunk('HIKES/LOAD_HIKES', async () => {
  try {
    const { data } = await axios.get(`http://localhost:4000/hikes`);
    return data;
  } catch {
    throw new Error('Pas de randonnées trouvées');
  }
});

export const hikesListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadrandomHikes.pending, (state) => {
      state.loadingRandoms = true;
    })
    .addCase(loadrandomHikes.rejected, (state, action) => {
      state.error = action.error.message;
      state.loadingRandoms = false;
      // Gestion des erreurs
    })
    .addCase(loadrandomHikes.fulfilled, (state, action) => {
      state.randomList = action.payload;
      state.loadingRandoms = false;
    })
    .addCase(loadHikes.pending, (state) => {
      state.loadingAll = true;
    })
    .addCase(loadHikes.rejected, (state, action) => {
      state.error = action.error.message;
      state.loadingAll = false;
      // Gestion des erreurs
    })
    .addCase(loadHikes.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loadingAll = false;
    });
});
