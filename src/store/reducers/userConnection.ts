import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

type initialStateProps = {
  token: string;
  messageResponse: string;
  isLogged?: boolean;
};

const initialState: initialStateProps = {
  token: '',
  messageResponse: '',
  isLogged: false,
};

// donnée de test :
// email:  toto45@gmail.com
// password: Henri26!aufond

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
    });
});
