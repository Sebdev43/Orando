import {
  createReducer,
  createAsyncThunk,
  createAction,
} from '@reduxjs/toolkit';
import axios from 'axios';

//  le typage TS pour tout l'état (le state hikes du store.tsx)
export type Credentials = {
  nickname: string;
  localisation: string;
  email: string;
  password: string;
};

export type userProps = {
  loading: boolean;
  messageResponse: string[];
  isRegistered: boolean;
  successMessage: string;
};

// les propriétés par défaut du state hikes (le state du store.tsx)
const initialState: userProps = {
  loading: false,
  messageResponse: [],
  successMessage: '',
  isRegistered: false,
};

// En asynchrone, on utilise la méthode "createasyncThunk" pour récupérer les données d'une API
export const postRegisterDatas = createAsyncThunk(
  'USER/POST_REGISTER_DATAS',
  async (datas: Credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/accounts/signup`, datas);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({
          message: "L'enregistrement n'a pas fonctionné",
        });
      }
    }
  }
);

export const userRegistrationReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(postRegisterDatas.pending, (state) => {
        state.loading = true;
      })
      .addCase(postRegisterDatas.rejected, (state, action: any) => {
        state.loading = false;
        // je récupère tous les messages d'erreur de l'API pour les indiquer à mon utilisateur
        // sur la page s'enregistrer, afin qu'il fasse les changements attendus.
        const messages = action.payload.errors.map((error: any) => {
          return error.msg;
        });
        state.messageResponse = messages as string[];
      })
      .addCase(postRegisterDatas.fulfilled, (state, action) => {
        state.successMessage = action.payload.message;
        state.messageResponse = [];
        state.loading = false;
        state.isRegistered = true;
      });
  }
);
