import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { ErrorResponse } from '../../@types/axiosError';

/**
 * Types for User Registration state properties.
 * 
 * @typedef {Object} UserProps
 * @property {string[]} messagesResponse - The list of response messages, typically for validation errors.
 * @property {boolean} isRegistered - Indicates whether the user has successfully registered.
 * @property {string} successMessage - A message indicating successful registration.
 */

export type UserProps = {
  messagesResponse: string[];
  isRegistered: boolean;
  successMessage: string;
};

// les propriétés par défaut du state hikes (le state du store.tsx)
const initialState: UserProps = {
  isRegistered: false,
  messagesResponse: [],
  successMessage: '',
};

/**
 * AsyncThunk to handle user registration.
 * 
 * This action sends user registration data to the server and handles the response.
 *
 * @async
 * @function postRegisterDatas
 * @param {FormData} datas - The registration form data.
 * @returns {Promise<Object>} The response data from the server.
 * @throws Will throw an error if the registration fails.
 */

export const postRegisterDatas = createAsyncThunk(
  'USER/POST_REGISTER_DATAS',
  async (datas: FormData) => {
    try {
      const { data } = await axios.post(`/api/accounts/signup`, datas);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response && axiosError.response.status === 400) {
          const errors = {
            msg: [...axiosError.response.data.errors.map((err) => err.msg)],
          };
          return errors;
        }
      }
      throw new Error(
        "Une erreur est survenue lors de l'inscription. Merci de réessayer"
      );
    }
  }
);

/**
 * Reducer for handling user registration state.
 * 
 * Manages the state for user registration including success and error messages.
 *
 * @function userRegistrationReducer
 * @param {UserProps} state - The initial state for user registration.
 * @param {import('@reduxjs/toolkit').AnyAction} action - The action dispatched.
 * @returns {UserProps} The new state after applying the action.
 */

export const userRegistrationReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(postRegisterDatas.fulfilled, (state, action) => {
      if (action.payload.message) {
        state.successMessage = action.payload.message;
        state.isRegistered = true;
      }
      if (action.payload.msg) {
        state.messagesResponse = action.payload.msg;
      }
    });
  }
);
