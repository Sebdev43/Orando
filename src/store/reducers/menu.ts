/**
 * Manages the state and actions related to the application menu.
 *
 * This module defines the properties and initial state of the menu, which includes:
 * - `nav`: An array of strings representing the navigation items in the menu.
 *
 * It also provides an action to display the menu items.
 *
 * @module menu
 */

import { createReducer, createAction } from '@reduxjs/toolkit';

export type PropsMenu = {
  nav: string[];
};

const initialState: PropsMenu = {
  nav: ['Accueil', 'Voir les Randos', 'Favoris'],
};

/**
 * Action to display the menu items.
 *
 * @action
 * @param {string} payload - Additional information or commands related to displaying the menu items.
 */

export const getMenuItems = createAction<string>('MENU/DISPLAY_ITEMS');

/**
 * Reducer to handle the menu state based on the dispatched actions.
 *
 * @function
 * @param {PropsMenu} state - The current state of the menu.
 * @param {object} action - The dispatched action containing the type and payload.
 */

export const menuReducer = createReducer(initialState, (builder) => {
  builder.addCase(getMenuItems, (state, action) => {
    console.log(state.nav);
  });
});
