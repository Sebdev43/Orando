import { createReducer, createAction } from '@reduxjs/toolkit';
import { Hike } from '../../@types/hike';

import datas from '../../data/hikes.json';

export type HikesList = {
  list: Hike[];
};

const initialState: HikesList = {
  list: datas,
};

export const getAllHikes = createAction<string>('LIST/DISPLAY_HIKES');

//TODO Il va falloir utiliser l'apiThunk pour charger la liste de randonnées dans le state, depuis notre API

export const hikesListReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllHikes, (state, action) => {
    console.log(state.list);
  });
});
