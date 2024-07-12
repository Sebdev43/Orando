import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

import axios from 'axios';

type initialStateProps = {
  token: string;
};

const initialState: initialStateProps = {
  token: '',
};

// Pour se connecter et tester :
// pseudo: toto45
// localisation : Ardeche
// email:  toto45@gmail.com
// password: Henri26!aufond

// En asynchrone, on utilise la méthode "createasyncThunk" pour récupérer les données d'une API
export const postLoginDatas = createAsyncThunk(
  'USER/POST_CONNECTION',
  async (datas: FormData) => {
    try {
      const { data } = await axios.post(`/api/accounts/login`, datas);
      return data;
    } catch (error) {
      throw new Error("La connexion n'a pas fonctionnée");
    }
  }
);

export const userConnectionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(postLoginDatas.pending, (state, action) => {
      console.log(action);
    })
    .addCase(postLoginDatas.rejected, (state, action) => {
      console.log(action.error.message);
    })
    .addCase(postLoginDatas.fulfilled, (state, action) => {
      console.log(action.payload);
      state.token = action.payload.token;
    });
});
