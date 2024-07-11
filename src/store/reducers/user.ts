import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//  le typage TS pour tout l'état (le state hikes du store.tsx)
export type userProps = {};

// les propriétés par défaut du state hikes (le state du store.tsx)
const initialState: userProps = {};

// En asynchrone, on utilise la méthode "createasyncThunk" pour récupérer les données d'une API
export const GETunTRUC = createAsyncThunk(
  'USER/LOAD_FROM_API',
  async (id: number) => {
    try {
      const { data } = await axios.get(`/api/hikes/${id}`);
      return data;
    } catch {
      throw new Error('Pas de user trouvé');
    }
  }
);

export const POSTunTRUC = createAsyncThunk(
  'USER/POST_TO_API',
  async (id: number) => {
    try {
      const { data } = await axios.get(`/api/user/${id}`);
      return data;
    } catch {
      throw new Error('Pas de user trouvé');
    }
  }
);

export const PATCHunTRUC = createAsyncThunk(
  'USER/PATCH_INTO_API',
  async (id: number) => {
    try {
      const { data } = await axios.get(`/api/user/${id}`);
      return data;
    } catch {
      throw new Error('Pas de user trouvé');
    }
  }
);

export const DELETEunTRUC = createAsyncThunk(
  'USER/DELETE_INTO_API',
  async (id: number) => {
    try {
      const { data } = await axios.get(`/api/user/${id}`);
      return data;
    } catch {
      throw new Error('Pas de user trouvé');
    }
  }
);

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GETunTRUC.pending, (state) => {})
    .addCase(GETunTRUC.rejected, (state, action) => {})
    .addCase(GETunTRUC.fulfilled, (state, action) => {})
    // POST
    .addCase(POSTunTRUC.pending, (state) => {})
    .addCase(POSTunTRUC.rejected, (state, action) => {})
    .addCase(POSTunTRUC.fulfilled, (state, action) => {})
    // PATCH
    .addCase(PATCHunTRUC.pending, (state) => {})
    .addCase(PATCHunTRUC.rejected, (state, action) => {})
    .addCase(PATCHunTRUC.fulfilled, (state, action) => {})
    // DELETE
    .addCase(DELETEunTRUC.pending, (state) => {})
    .addCase(DELETEunTRUC.rejected, (state, action) => {})
    .addCase(DELETEunTRUC.fulfilled, (state, action) => {});
});
