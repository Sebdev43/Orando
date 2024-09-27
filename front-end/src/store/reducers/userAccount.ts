
import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../../@types/root';
import { Credential, PatchCredential } from '../../@types/form';
import { isTokenValid } from '../../utils/decodeJwt';

/**
 * Types for User Account properties.
 * 
 * @typedef {Object} UserAccountProps
 * @property {Credential} credentials - The credentials of the user, including nickname, location, email, and password.
 * @property {string | null} editingField - The field currently being edited, or null if no field is being edited.
 * @property {string} errorUserDatas - Error message related to user data operations.
 * @property {string} fulfiledMessage - Success message after successful operations.
 */

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

/**
 * Action to change the currently editing field in the user account form.
 *
 * @type {import('@reduxjs/toolkit').ActionCreator<string | null>}
 */

export const changeEditingField = createAction<string | null>(
  'USER_ACCOUNT/CHANGE_EDITING_FIELD'
);

/**
 * AsyncThunk to fetch user data based on a valid token.
 * 
 * This action retrieves the authenticated user's data using their token stored in localStorage.
 *
 * @async
 * @function getUserDatas
 * @returns {Promise<Object>} The user data retrieved from the API.
 * @throws Will throw an error if the request fails.
 */

export const getUserDatas = createAsyncThunk('USER/GET_USER', async () => {
  try {
    const token = isTokenValid(localStorage.getItem('token') as string);

    const { data } = await axios.get('/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Une erreur est survenue');
  }
});

/**
 * AsyncThunk to update user account information.
 * 
 * This action patches the user's account data, such as nickname, location, email, and password.
 *
 * @async
 * @function patchUserDatas
 * @param {PatchCredential} datas - The updated user data to be patched.
 * @returns {Promise<Object>} The updated user data from the API.
 * @throws Will throw an error if the request fails, with a message from the server.
 */

export const patchUserDatas = createAsyncThunk(
  'USER/PATCH_USER',
  async (datas: PatchCredential) => {
    try {
      const token = isTokenValid(localStorage.getItem('token') as string);

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

      return data;
    } catch (errors: any) {
      throw new Error(errors.response.data.errors[0].msg);
    }
  }
);

export const deleteUser = createAsyncThunk('USER/DELETE_ACCOUNT', async () => {
  try {
    const token = isTokenValid(localStorage.getItem('token') as string);

    const { data } = await axios.delete('/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Une erreur est survenue');
  }
});

export const actionToLogout = createAction('USER/LOGOUT');
export const clearErrorUserDatas = createAction(
  'USER/CLEAR_USER_ERROR_MESSAGE'
);

export const userAccountReducer = createReducer(initialState, (builder) => {
  builder
    // Get user datas
    .addCase(getUserDatas.rejected, () => {
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
    // Actions to logout
    .addCase(actionToLogout, (state) => {
      state.credentials.nickname = '';
      state.credentials.localisation = '';
      state.credentials.email = '';
      state.credentials.password = '';
      localStorage.removeItem('token');
    })
    // DELETE ACCOUNT
    .addCase(deleteUser.fulfilled, (state) => {
      localStorage.removeItem('token');
      state.credentials.nickname = '';
      state.credentials.localisation = '';
      state.credentials.email = '';
      state.credentials.password = '';
    });
});
