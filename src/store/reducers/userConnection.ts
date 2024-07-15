import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

type initialStateProps = {
  token: string;
  messageResponse: string;
  isLogged?: boolean;
  resetMessage: string;
};

const initialState: initialStateProps = {
  token: '',
  messageResponse: '',
  isLogged: false,
  resetMessage: '',
};

// donnée de test :
// email:  toto45@gmail.com
// password: Henri26!aufond

// Pour se connecter
export const postLoginDatas = createAsyncThunk(
  'USER/POST_LOGIN_DATAS',
  async (datas: FormData) => {
    try {
      const { data } = await axios.post(`/api/accounts/login`, datas);
      console.log('je suis le try', data);
      return data;
    } catch (error) {
      console.log('je suis le catch !!!!!!!!!!!!!!');
      throw new Error("L'email ou le mot de passe sont incorrects");
    }
  }
);

// Faire une demande de reinitialisation du mot de passe
export const postResetDatas = createAsyncThunk(
  'USER/POST_RESET_DATAS',
  async (datas: FormData) => {
    try {
      const { data } = await axios.post(`/api/accounts/forgot-password`, datas);
      console.log('je suis le try', data);
      return data;
    } catch (error) {
      throw new Error("L'email est incorrect ou inexistant");
    }
  }
);

// la route pour reinitialiser le mot de passe
//  api/accounts/reset-password/
export const postReinitDatas = createAsyncThunk(
  'USER/POST_REINIT_DATAS',
  async (datas: FormData) => {
    try {
      const { data } = await axios.post(`api/accounts/reset-password/`, datas);
      console.log('je suis le try', data);
      return data;
    } catch (error) {
      throw new Error('Le mot de passe ne convient pas');
    }
  }
);

export const userConnectionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(postLoginDatas.pending, (state) => {})
    .addCase(postLoginDatas.rejected, (state, action) => {
      // console.log('je suis rejected');

      state.messageResponse = action.error.message as string;
    })
    .addCase(postLoginDatas.fulfilled, (state, action) => {
      // console.log('je suis fulfilled', action.payload);
      state.token = action.payload.token;
      state.isLogged = true;
    })
    // Demande de reset du mot de passe
    .addCase(postResetDatas.pending, (state) => {})
    .addCase(postResetDatas.rejected, (state, action) => {
      state.resetMessage = action.error.message as string;
    })
    .addCase(postResetDatas.fulfilled, (state, action) => {
      state.resetMessage =
        "Si l'adresse mail existe, un lien vous a été envoyé sur votre adresse email";
    })
    // Demande de reinitialisation du mot de passe
    .addCase(postReinitDatas.pending, (state) => {})
    .addCase(postReinitDatas.rejected, (state, action) => {
      state.resetMessage = action.error.message as string;
    })
    .addCase(postReinitDatas.fulfilled, (state, action) => {
      state.resetMessage = action.payload.message;
    });
});
