import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { FormReinitData } from '../../@types/form';

type initialStateProps = {
  token: string | null;
  messageResponse: string;
  isLogged?: boolean;
  resetMessage: string;
};

const initialState: initialStateProps = {
  token: localStorage.getItem('token') || null,
  messageResponse: '',
  isLogged: false,
  resetMessage: '',
};

// LOGIN
export const postLoginDatas = createAsyncThunk(
  'USER/POST_LOGIN_DATAS',
  async (datas: FormData) => {
    try {
      const { data } = await axios.post(`/api/accounts/login`, datas);
      return data;
    } catch (error) {
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
      return data;
    } catch (error) {
      throw new Error("L'email est incorrect ou inexistant");
    }
  }
);

// la route pour reinitialiser le mot de passe
export const postReinitDatas = createAsyncThunk(
  'USER/POST_REINIT_DATAS',
  async (datas: FormReinitData) => {
    try {
      const { data } = await axios.post(`/api/accounts/reset-password`, {
        newPassord: datas.newPassword,
        token: datas.token,
      });
      return data;
    } catch (error) {
      throw new Error('Le mot de passe ne convient pas');
    }
  }
);

export const userConnectionReducer = createReducer(initialState, (builder) => {
  builder
    // LOGIN
    .addCase(postLoginDatas.rejected, (state, action) => {
      state.messageResponse = action.error.message as string;
    })
    .addCase(postLoginDatas.fulfilled, (state, action) => {
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
      state.isLogged = true;
    })
    // Demande de reset du mot de passe
    .addCase(postResetDatas.rejected, (state, action) => {
      state.resetMessage = action.error.message as string;
    })
    .addCase(postResetDatas.fulfilled, (state, action) => {
      state.resetMessage =
        "Si l'adresse mail existe, un lien vous a été envoyé";
    })
    // Demande de reinitialisation du mot de passe
    .addCase(postReinitDatas.rejected, (state, action) => {
      state.resetMessage = action.error.message as string;
    })
    .addCase(postReinitDatas.fulfilled, (state, action) => {
      state.resetMessage = action.payload.message;
    });
});
