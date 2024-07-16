import {
  createAction,
  createAsyncThunk,
  createReducer,
  isRejected,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { Credential } from '../../@types/form';
import { RootState } from '../store';

// Le typage des données
type UserAccountProps = {
  credentials: Credential;
  favorites: string[];
  token: string | null;
  editingField: string | null;
  passwordError: string | null;
};

const initialState: UserAccountProps = {
  credentials: {
    nickname: '', // il faudra persister cette info
    localisation: '', // il faudra persister cette info
    email: '',
    password: '',
  },
  editingField: null,
  passwordError: null,

  token: localStorage.getItem('token'),
  favorites: [],
};

export const changeEditingField = createAction<string | null>(
  'USER_ACCOUNT/CHANGE_EDITING_FIELD'
);

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
  async (datas: Credential, thunkAPI) => {
    try {
      const rootstate = thunkAPI.getState() as RootState;
      const token = rootstate.userAccount.token;

      console.log('dans le try', datas);

      const { data } = await axios.patch(
        '/api/users',
        {
          nickname: datas.nickname,
          localisation: datas.localisation,
          email: datas.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('dans le try', data);

      return data;
    } catch (error) {
      throw new Error('Une erreur est survenue');
    }
  }
);

export const userAccountReducer = createReducer(initialState, (builder) => {
  builder
    // Get user datas
    .addCase(getUserDatas.fulfilled, (state, action) => {
      state.credentials.nickname = action.payload.nickname;
      state.credentials.localisation = action.payload.localisation;
      state.credentials.email = action.payload.email;
      state.credentials.password = action.payload.password;
    })

    // Patch user datas
    .addCase(patchUserDatas.fulfilled, (state, action) => {
      state.credentials.nickname = action.payload.nickname;
      state.credentials.localisation = action.payload.localisation;
      state.credentials.email = action.payload.email;
      state.credentials.password = action.payload.password;
    })
    // Change editing field
    .addCase(changeEditingField, (state, action) => {
      state.editingField = action.payload;
    });
});
