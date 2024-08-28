/**
 * Manages the state and actions related to filtering hikes.
 *
 * This module defines the properties and initial state of the hike filters,
 * and provides actions to modify these filters. The filters include:
 * - `difficulty`: The difficulty level of the hikes.
 * - `localisation`: The location of the hikes.
 * - `time`: The estimated time to complete the hikes.
 *
 * The module also includes actions to clear all filters.
 *
 * @module hikesFilters
 */

import { createAction, createReducer } from '@reduxjs/toolkit';

export type HikesFiltersProps = {
  difficulty: string;
  localisation: string;
  time: number | null;
};

const initialState: HikesFiltersProps = {
  difficulty: '',
  localisation: '',
  time: null,
};

/**
 * Action to change the difficulty filter.
 *
 * @action
 * @param {string} payload - The new difficulty level.
 */

export const changeDifficulty = createAction<string>(
  'HIKES_FILTERS/CHANGE_DIFFICULTY'
);

/**
 * Action to change the localisation filter.
 *
 * @action
 * @param {string} payload - The new location.
 */

export const changeLocalisation = createAction<string>(
  'HIKES_FILTERS/CHANGE_LOCALISATION'
);

/**
 * Action to change the time filter.
 *
 * @action
 * @param {number} payload - The new time value.
 */

export const changeTime = createAction<number>('HIKES_FILTERS/CHANGE_TIME');

/**
 * Action to clear all hike filters.
 *
 * @action
 */

export const clearHikesFilters = createAction(
  'HIKES_FILTERS/CLEAR_HIKES_FILTERS'
);

/**
 * Reducer to handle the hike filter actions and update the state accordingly.
 *
 * @function
 * @param {HikesFiltersProps} state - The current state of the filters.
 * @param {object} action - The dispatched action containing the type and payload.
 */

export const hikesFiltersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocalisation, (state, action) => {
      state.localisation = action.payload;
    })
    .addCase(changeDifficulty, (state, action) => {
      state.difficulty = action.payload;
    })
    .addCase(changeTime, (state, action) => {
      state.time = action.payload;
    })
    .addCase(clearHikesFilters, (state) => {
      state.difficulty = '';
      state.localisation = '';
      state.time = null;
    });
});
