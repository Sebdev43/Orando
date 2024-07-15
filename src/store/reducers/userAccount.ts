import {
  createAction,
  createAsyncThunk,
  createReducer,
  isRejected,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { Credential, FormData } from '../../@types/form';
import { RootState } from '../store';

// Le typage des données
type UserAccountProps = {
  credentials: Credential;
  favorites: string[];
  token: string | null;
};

const initialState: UserAccountProps = {
  credentials: {
    nickname: '',
    localisation: '',
    email: '',
    password: '',
  },

  token: localStorage.getItem('token'),
  favorites: [],
};

// Récupérer les données du User identifié avec le token
export const getUserDatas = createAsyncThunk(
  'USER/GET_USER',
  async (_, thunkAPI) => {
    try {
      const rootstate = thunkAPI.getState() as RootState;
      const token = rootstate.userAccount.token;

      const { data } = await axios.get('/api/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      throw new Error('Une erreur est survenue');
    }
  }
);

// Patch pour modifier les infos du compte
export const patchUserDatas = createAsyncThunk(
  'USER/PATCH_USER',
  async (datas: FormData, thunkAPI) => {
    try {
      const rootstate = thunkAPI.getState() as RootState;
      const token = rootstate.userAccount.token;

      const { data } = await axios.get('/api/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      throw new Error('Une erreur est survenue');
    }
  }
);

// // Pour ajouter un favori
// export const getBookmarks = createAsyncThunk(
//   'USER/GET_BOOKMARKS',
//   async (id: number) => {
//     try {
//       const { data } = await axios.post(`/api/favorites`, id);
//       console.log('try de getBookmarks', data);
//       return data;
//     } catch (error) {
//       console.log('je suis le catch');
//       throw new Error('La liste des favoris est vide');
//     }
//   }
// );

export const userAccountReducer = createReducer(initialState, (builder) => {
  builder.addCase(getUserDatas.fulfilled, (state, action) => {
    state.credentials.nickname = action.payload.nickname;
    state.credentials.localisation = action.payload.localisation;
    state.credentials.email = action.payload.email;
    state.credentials.password = action.payload.password;
  });
});
