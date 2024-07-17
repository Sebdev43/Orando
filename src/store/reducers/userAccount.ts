import {
  createAction,
  createAsyncThunk,
  createReducer,
  isRejected,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { Credential, PatchCredential } from '../../@types/form';
import { RootState } from '../store';

// Le typage des données
type UserAccountProps = {
  credentials: Credential;
  favorites: string[];
  editingField: string | null;
};

const initialState: UserAccountProps = {
  credentials: {
    nickname: '',
    localisation: '',
    email: '',
    password: '',
  },
  editingField: null,
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
      const token = rootstate.userConnection.token;

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
  async (datas: PatchCredential, thunkAPI) => {
    try {
      const rootstate = thunkAPI.getState() as RootState;
      const token = rootstate.userConnection.token;

      console.log('dans le try', datas);

      const { data } = await axios.patch(
        '/api/users',
        {
          nickname: datas.nickname,
          localisation: datas.localisation,
          email: datas.email,
          currentPassword: datas.currentPassword,
          newPassword: datas.confirmPassword,
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

export const deleteAccount = createAsyncThunk(
  'USER/DELETE_ACCOUNT',
  async (_, thunkAPI) => {
    try {
      const rootstate = thunkAPI.getState() as RootState;
      const token = rootstate.userConnection.token;

      const { data } = await axios.delete('/api/users', {
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

export const actionToLogout = createAction('USER/LOGOUT');

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
    })
    // Action pour logout
    .addCase(actionToLogout, (state) => {
      state.credentials.nickname = '';
      state.credentials.localisation = '';
      state.credentials.email = '';
      state.credentials.password = '';
      state.favorites = [];
      localStorage.removeItem('token');
    })
    // DELETE ACCOUNT
    .addCase(deleteAccount.fulfilled, (state) => {
      state.credentials.nickname = '';
      state.credentials.localisation = '';
      state.credentials.email = '';
      state.credentials.password = '';
      state.favorites = [];
      localStorage.removeItem('token');
    });
});
