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
  loadingRandomsHikes: boolean;
  list: Hike[];
  loadingAllHikes: boolean;
  error: string | undefined | null;
};
const initialState: HikesList = {
  randomList: [],
  loadingRandomsHikes: false,
  list: [],
  loadingAllHikes: false,
  error: null,
};

// En asynchrone, on utilise la méthode "createasyncThunk" pour récupérer les données d'une API
export const loadrandomHikes = createAsyncThunk(
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

export const loadHikes = createAsyncThunk('HIKES/LOAD_HIKES', async () => {
  try {
    const { data } = await axios.get(`/api/hikes`);
    return data;
  } catch {
    throw new Error('Pas de randonnées trouvées');
  }
});

export const hikesListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadrandomHikes.pending, (state) => {
      state.loadingRandomsHikes = true;
      // console.log('Je suis random et je charge', Date().toString());
    })
    .addCase(loadrandomHikes.rejected, (state, action) => {
      state.error = action.error.message;
      state.loadingRandomsHikes = false;
      // Gestion des erreurs
      // console.log("Je suis random et j'ai rencontré un pbm");
    })
    .addCase(loadrandomHikes.fulfilled, (state, action) => {
      state.randomList = action.payload;
      state.loadingRandomsHikes = false;
      // console.log("Je suis random et j'ai finis de charger les données");
    })
    .addCase(loadHikes.pending, (state) => {
      state.loadingAllHikes = true;
    })
    .addCase(loadHikes.rejected, (state, action) => {
      state.error = action.error.message;
      state.loadingAllHikes = false;
      // Gestion des erreurs
    })
    .addCase(loadHikes.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loadingAllHikes = false;
    });
});
