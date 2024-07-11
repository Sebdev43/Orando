import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//  le typage TS pour une randonnée = Hike
// Une liste s'exprime par un tableau (en général)
// ligne 14, le tableau des randonnées est donc un [tableau] de type "Hike" = Hike[]
import { Hike } from '../../@types/hike';

//  le typage TS pour tout l'état (le state hikes du store.tsx)
export type HikesList = {
  randomHikesList: Hike[];
  loading: boolean;
  error: string | undefined | null;
};

// les propriétés par défaut du state hikes (le state du store.tsx)
const initialState: HikesList = {
  randomHikesList: [],
  loading: false,
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

export const hikesRandomReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadrandomHikes.pending, (state) => {
      state.loading = true;
    })
    .addCase(loadrandomHikes.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      // Gestion des erreurs
    })
    .addCase(loadrandomHikes.fulfilled, (state, action) => {
      state.randomHikesList = action.payload;
      state.loading = false;
    });
});
