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

//  datas locales si panne de DB
import hikes from '../../data/hikesByTen.json';

export type HikesList = {
  list: Hike[];
  loading: boolean;
  error: string | undefined | null;
};

const initialState: HikesList = {
  list: [],
  loading: false,
  error: null,
};

// En asynchrone, on utilise la méthode "createasyncThunk" pour récupérer les données d'une API
export const loadHikes = createAsyncThunk('HIKES/LOAD_HIKES', async () => {
  try {
    const { data } = await axios.get(`http://localhost:4000/hikes/random`);
    console.log(data);
    return data;
  } catch {
    throw new Error('Pas de randonnées "random" trouvées');
  }
});

export const hikesListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadHikes.pending, (state) => {
      state.loading = true;
    })
    .addCase(loadHikes.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      // Gestion des erreurs
    })
    .addCase(loadHikes.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
});
