import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { FormReinitData, FormResetData } from '../../@types/form';
import { isTokenOk } from '../../utils/decodeJwt';

/**
 * Types for the initial state of user connection.
 * 
 * @typedef {Object} InitialStateProps
 * @property {string | null} token - The authentication token of the user.
 * @property {string} serverResponse - The server response message related to user actions.
 * @property {boolean} [isLogged] - Indicates whether the user is logged in or not.
 * @property {string} resetMessage - Message related to password reset operations.
 */

type InitialStateProps = {
  token: string | null;
  serverResponse: string;
  isLogged?: boolean;
  resetMessage: string;
};

const initialState: InitialStateProps = {
  token: '',
  serverResponse: '',
  isLogged: isTokenOk(localStorage.getItem('token') as string) || false,
  resetMessage: '',
};

/**
 * AsyncThunk to handle user login.
 * 
 * This action sends user credentials to the server and returns the authentication token.
 *
 * @async
 * @function postLoginDatas
 * @param {FormData} datas - The login form data including email and password.
 * @returns {Promise<Object>} The response data containing the authentication token.
 * @throws Will throw an error if the login credentials are incorrect.
 */

export const postLoginDatas = createAsyncThunk(
  'USER/POST_LOGIN_DATAS',
  async (datas: FormData) => {
    try {
      const { data } = await axios.post(`/api/accounts/login`, datas);
      return data;
    } catch (error) {
      throw new Error("L'email ou le mot de passe sont incorrects");
    }
  }
);

/**
 * AsyncThunk to request a password reset.
 * 
 * This action sends the user's email to request a password reset link.
 *
 * @async
 * @function postResetDatas
 * @param {FormResetData} datas - The form data containing the user's email.
 * @returns {Promise<Object>} The server's response to the reset request.
 * @throws Will throw an error if the email is incorrect or doesn't exist.
 */

export const postResetDatas = createAsyncThunk(
  'USER/POST_RESET_DATAS',
  async (datas: FormResetData) => {
    try {
      const { data } = await axios.post(`/api/accounts/forgot-password`, datas);
      return data;
    } catch (error) {
      throw new Error("L'email est incorrect ou inexistant");
    }
  }
);

/**
 * AsyncThunk to reset the user's password.
 * 
 * This action allows the user to reset their password using a token provided by the server.
 *
 * @async
 * @function postReinitDatas
 * @param {FormReinitData} datas - The form data containing the new password and the reset token.
 * @returns {Promise<Object>} The server's response to the password reset.
 * @throws Will throw an error if the new password is not accepted.
 */

export const postReinitDatas = createAsyncThunk(
  'USER/POST_REINIT_DATAS',
  async (datas: FormReinitData) => {
    try {
      const { data } = await axios.post(`/api/accounts/reset-password`, {
        newPassword: datas.newPassword,
        token: datas.token,
      });
      return data;
    } catch (error) {
      throw new Error('Le mot de passe ne convient pas');
    }
  }
);



export const tokenLogout = createAction('USER/LOGOUT');



export const clearServerResponse = createAction('USER/CLEAR_SERVER_RESPONSE');

/**
 * Reducer for handling user connection states.
 * 
 * Manages the states for login, logout, password reset, and server responses.
 *
 * @function userConnectionReducer
 * @param {InitialStateProps} state - The initial state for the user connection.
 * @param {import('@reduxjs/toolkit').AnyAction} action - The action dispatched.
 * @returns {InitialStateProps} The new state after applying the action.
 */

export const userConnectionReducer = createReducer(initialState, (builder) => {
  builder
    // LOGIN
    .addCase(postLoginDatas.rejected, (state, action) => {
      state.serverResponse = action.error.message as string;
    })
    .addCase(postLoginDatas.fulfilled, (state, action) => {
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
      state.isLogged = true;
    })
    .addCase(clearServerResponse, (state) => {
      state.serverResponse = '';
    })
    // LOGOUT
    .addCase(tokenLogout, (state) => {
      state.token = null;
      state.isLogged = false;
      localStorage.removeItem('token');
    })
    // Ask reset password
    .addCase(postResetDatas.rejected, (state, action) => {
      state.resetMessage = action.error.message as string;
    })
    .addCase(postResetDatas.fulfilled, (state) => {
      state.resetMessage = 'Un lien vous a été envoyé';
    })
    // Reinit password
    .addCase(postReinitDatas.rejected, (state, action) => {
      state.resetMessage = action.error.message as string;
    })
    .addCase(postReinitDatas.fulfilled, (state, action) => {
      state.resetMessage = action.payload.message;
    });
});
