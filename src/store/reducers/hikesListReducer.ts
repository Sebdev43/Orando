import { createReducer, createAction } from '@reduxjs/toolkit';
import { Hike } from '../../@types/hike';

import hikesByTen from '../../data/hikesByTen.json';

export type HikesList = {
  list: Hike[];
};

const initialState: HikesList = {
  list: hikesByTen,
};

//TODO Il va falloir utiliser l'apiThunk pour charger la liste de randonnées dans le state, depuis notre API
// // créer un asyncThunk pour récupérer les recipes
// // dispatch(loadRecipes())
// export const loadRecipes = createAsyncThunk("recipes/loadRecipes", async () => {
//   const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/recipes`);
//   return data;
// })
// const recipesReducer = createReducer(initialState, (builder) => {
//   builder.addCase(loadRecipes.pending, (state) => {
//     state.loading = true;
//   }).addCase(loadRecipes.rejected, (state, action) => {
//     state.error = action.error.message;
//     state.loading = false;
//   }).addCase(loadRecipes.fulfilled, (state, action) => {
//     state.list = action.payload;
//     state.loading = false;
//   })
// });

export const getHikesFromApi = createAction<string>('LIST/DISPLAY_HIKES');

export const hikesListReducer = createReducer(initialState, (builder) => {
  builder.addCase(getHikesFromApi, (state, action) => {
    console.log(state.list);
  });
});
