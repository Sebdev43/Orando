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
  credentials: Credentials | null;
  messageValidation: string;
};

// les propriétés par défaut du state hikes (le state du store.tsx)
const initialState: userProps = {
  loading: false,
  credentials: {
    nickname: '',
    localisation: '',
    email: '',
    password: '',
  },
  messageValidation: '',
};

export type KeysOfCredentials = keyof Credentials;
export const changeField = createAction<{
  value: string;
  name: KeysOfCredentials;
}>('user/changeField');

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

export const userRegistrationReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(postRegisterDatas.pending, (state) => {
        state.loading = true;
      })
      .addCase(postRegisterDatas.rejected, (state, action) => {
        state.loading = false;
        console.log('register message : ' + action.error.message);
      })
      .addCase(postRegisterDatas.fulfilled, (state, action) => {
        state.loading = false;
        console.log('register : la réponse du server est OK');
        console.log(action.payload);
        state.messageValidation = action.payload;
      });
  }
);
