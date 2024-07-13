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
  messagesResponse: string[];
  isRegistered: boolean;
  successMessage: string;
};

// les propriétés par défaut du state hikes (le state du store.tsx)
const initialState: userProps = {
  loading: false,
  isRegistered: false,
  messagesResponse: [],
  successMessage: '',
};

// En asynchrone, on utilise la méthode "createasyncThunk" pour récupérer les données d'une API
export const postRegisterDatas = createAsyncThunk(
  'USER/POST_REGISTER_DATAS',
  async (datas: Credentials) => {
    try {
      const { data } = await axios.post(`/api/accounts/signup`, datas);
      return data;
    } catch (error: any) {
      if (error.response.status === 400) {
        const errors = {
          msg: [...error.response.data.errors.map((error: any) => error.msg)],
        };
        return errors;
      }
      throw new Error(
        "Une erreur est survenue lors de l'inscription. Merci de réessayer"
      );
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
      .addCase(postRegisterDatas.rejected, (state, action) => {
        state.loading = false;
        console.log('je suis rejected dans REGISTRATION pourquoi ???');
        console.log(action);
      })
      .addCase(postRegisterDatas.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action.payload.msg);

        if (action.payload.message) {
          state.successMessage = action.payload.message;
          state.isRegistered = true;
          console.log(state.successMessage);
        }

        if (action.payload.msg) {
          state.messagesResponse = action.payload.msg;
          console.log(state.messagesResponse);
        }
      });
  }
);
