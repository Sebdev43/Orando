import { createAction, createReducer } from '@reduxjs/toolkit';

export type HikesFilters = {
  difficulty: string[];
  distance: string[];
  time: number[];
};

const initialState: HikesFilters = {
  difficulty: [],
  distance: [],
  time: [],
};

export const changeDifficulty = createAction<string>(
  'HIKES_FILTERS/CHANGE_DIFFICULTY'
);
export const changeDistance = createAction<string>(
  'HIKES_FILTERS/CHANGE_DISTANCE'
);
export const changeTime = createAction<number>('HIKES_FILTERS/CHANGE_TIME');

export const hikesFiltersReducer = createReducer(initialState, (builder) => {
  builder;
});
