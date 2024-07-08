import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//  le typage TS pour une randonnée = Hike
// Une liste s'exprime par un tableau (en général)
// ligne 14, le tableau des randonnées est doonc un [tableau] de type "Hike" = Hike[]
import { Hike } from '../../@types/hike';

//  le typage TS pour tout l'état (le state hikes du store.tsx)
export type HikesList = {
  randomList: Hike[];
  loadingRandomsHikes: boolean;
  hikesList: Hike[];
  loadingAllHikes: boolean;
  error: string | undefined | null;
  SkeletonNumberOfCards: number;
};

// les propriétés par défaut du state hikes (le state du store.tsx)
const initialState: HikesList = {
  randomList: [],
  loadingRandomsHikes: false,
  hikesList: [],
  loadingAllHikes: false,
  error: null,
  SkeletonNumberOfCards: 10,
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
    })
    .addCase(loadrandomHikes.rejected, (state, action) => {
      state.error = action.error.message;
      state.loadingRandomsHikes = false;
      // Gestion des erreurs
    })
    .addCase(loadrandomHikes.fulfilled, (state, action) => {
      state.randomList = action.payload;
      state.loadingRandomsHikes = false;
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
      state.hikesList = action.payload;
      state.loadingAllHikes = false;
    });
});
