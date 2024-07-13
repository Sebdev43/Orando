import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

import axios from 'axios';

type initialStateProps = {
  token: string;
  loading: boolean;
};

const initialState: initialStateProps = {
  token: '',
  loading: false,
};

// email:  toto45@gmail.com
// password: Henri26!aufond

export const postLoginDatas = createAsyncThunk(
  'USER/POST_LOGIN_DATAS',
  async (datas: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/accounts/login`, datas);
      console.log('je suis le try', data);
      return data;
    } catch (error) {
      console.log('je suis le catch', error);
      throw new Error('Impossible de se connecter');
    }
  }
);

export const userConnectionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(postLoginDatas.pending, (state) => {
      state.loading = true;
    })
    .addCase(postLoginDatas.rejected, (state, action) => {
      console.log('je suis rejected', action.error.message);
      state.loading = false;
    })
    .addCase(postLoginDatas.fulfilled, (state, action) => {
      console.log('je suis fulfilled', action.payload);
      state.loading = false;
      state.token = action.payload.token;
    });
});
