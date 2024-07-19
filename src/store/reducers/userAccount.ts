import { RootState } from '../store';
import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';

import { Credential, PatchCredential } from '../../@types/form';
import { Cookie } from '@mui/icons-material';
// Le typage des données
type UserAccountProps = {
  credentials: Credential;
  editingField: string | null;
  errorUserDatas: string;
  fulfiledMessage: string;
};

const initialState: UserAccountProps = {
  credentials: {
    nickname: '',
    localisation: '',
    email: '',
    password: '',
  },
  errorUserDatas: '',
  fulfiledMessage: '',
  editingField: null,
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
    } catch (errors: any) {
      throw new Error(errors.response.data.errors[0].msg);
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
      console.log(error);
    }
  }
);

export const actionToLogout = createAction('USER/LOGOUT');
export const clearErrorUserDatas = createAction(
  'USER/CLEAR_USER_ERROR_MESSAGE'
);

export const userAccountReducer = createReducer(initialState, (builder) => {
  builder
    // Get user datas
    .addCase(getUserDatas.rejected, (state) => {
      localStorage.removeItem('token');
    })
    .addCase(getUserDatas.fulfilled, (state, action) => {
      state.credentials.nickname = action.payload.nickname;
      state.credentials.localisation = action.payload.localisation;
      state.credentials.email = action.payload.email;
      state.credentials.password = action.payload.password;
    })

    // Patch user datas
    .addCase(patchUserDatas.rejected, (state, action) => {
      state.errorUserDatas = action.error.message as string;

      console.log(state.errorUserDatas);
    })
    .addCase(patchUserDatas.fulfilled, (state, action) => {
      state.fulfiledMessage = action.payload.message;
      state.credentials.nickname = action.payload.nickname;
      state.credentials.localisation = action.payload.localisation;
      state.credentials.email = action.payload.email;
      state.credentials.password = action.payload.password;
    })
    .addCase(clearErrorUserDatas, (state) => {
      state.errorUserDatas = '';
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
      localStorage.removeItem('token');
    })
    // DELETE ACCOUNT
    .addCase(deleteAccount.fulfilled, (state) => {
      localStorage.removeItem('token');
      state.credentials.nickname = '';
      state.credentials.localisation = '';
      state.credentials.email = '';
      state.credentials.password = '';
    });
});
