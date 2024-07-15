import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Credential } from '../../@types/form';

//  le typage TS pour tout l'état (le state hikes du store.tsx)

export type userProps = {
  messagesResponse: string[];
  isRegistered: boolean;
  successMessage: string;
};

// les propriétés par défaut du state hikes (le state du store.tsx)
const initialState: userProps = {
  isRegistered: false,
  messagesResponse: [],
  successMessage: '',
};

// En asynchrone, on utilise la méthode "createasyncThunk" pour récupérer les données d'une API
export const postRegisterDatas = createAsyncThunk(
  'USER/POST_REGISTER_DATAS',
  async (datas: Credential) => {
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
    builder.addCase(postRegisterDatas.fulfilled, (state, action) => {
      if (action.payload.message) {
        state.successMessage = action.payload.message;
        state.isRegistered = true;
      }
      if (action.payload.msg) {
        state.messagesResponse = action.payload.msg;
      }
    });
  }
);
