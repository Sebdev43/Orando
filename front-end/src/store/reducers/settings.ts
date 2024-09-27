/**
 * Manages the state related to the application settings.
 *
 * This module defines the initial state for the application settings, which includes:
 * - `widthMediaScreen`: A number representing the width of the media screen.
 * - `SkeletonNumberOfCards`: A number representing the number of skeleton cards displayed during loading.
 *
 * The reducer is provided to handle potential future actions that may modify these settings.
 *
 * @module settings
 */

import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  widthMediaScreen: 840 as number,
  SkeletonNumberOfCards: 10 as number,
};

/**
 * Reducer to manage the application settings state.
 *
 * Currently, the reducer does not handle any actions but sets up the state management
 * structure for potential future changes.
 *
 * @function
 * @param {object} state - The current state of the application settings.
 * @param {object} action - The dispatched action containing the type and payload.
 */

export const settingsReducer = createReducer(initialState, (builder) => {
  builder;
});
