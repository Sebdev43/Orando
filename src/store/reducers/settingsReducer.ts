import { useMediaQuery } from '@mui/material';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  widthMediaScreen: 840 as number,
};

export const setWidth = createAction<string>('SETTINGS/MAX_WIDTH_MEDIASCREEN');

export const settingsReducer = createReducer(initialState, (builder) => {
  builder;
});
