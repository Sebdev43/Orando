import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { Credentials } from './user';
import axios from 'axios';

type initialStateProps = {};

const initialState: initialStateProps = {};

// Pour se connecter et tester :
// pseudo: toto45
// localisation : Ardeche
// email:  toto45@gmail.com
// password: Henri26!aufond

// En asynchrone, on utilise la méthode "createasyncThunk" pour récupérer les données d'une API
export const postRegisterDatas = createAsyncThunk(
  'USER/POST_REGISTER_DATAS',
  async (datas: Credentials) => {
    try {
      const { data } = await axios.post(`/api/accounts/signup`, datas);
      return data;
    } catch (error) {
      throw new Error("L'enregistrement n'a pas fonctionné");
    }
  }
);

export const userConnectionReducer = createReducer(initialState, (builder) => {
  builder.addCase(postRegisterDatas.pending, (state) => {});
});
