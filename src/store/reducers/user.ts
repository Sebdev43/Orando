import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//  le typage TS
export type Credentials = {
  nickname: string;
  localisation: string;
  email: string;
  password: string;
};

export type userProps = {
  loading: boolean;
  messageResponse: string;
  isRegistered: boolean;
  successMessage: string;
};

// les propriétés par défaut du state hikes (le state du store.tsx)
const initialState: userProps = {
  loading: false,
  messageResponse: '',
  successMessage: '',
  isRegistered: false,
};

// En asynchrone, on utilise la méthode "createasyncThunk" pour récupérer les données d'une API
export const postRegisterDatas = createAsyncThunk(
  'USER/POST_REGISTER_DATAS',
  async (datas: Credentials) => {
    try {
      const { data } = await axios.post(`/api/accounts/signup`, datas);
      console.log(data);
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message); // c'est OK
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
        state.messageResponse = action.error.message as string;
        state.loading = false;
      })
      .addCase(postRegisterDatas.fulfilled, (state, action) => {
        state.successMessage = action.payload.message;
        state.messageResponse = '';
        state.loading = false;
        state.isRegistered = true;
      });
  }
);
