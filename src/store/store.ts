import { configureStore } from '@reduxjs/toolkit';

import { hikesListReducer } from './reducers/hikesListReducer';
import { breadcrumbsReducer } from './reducers/breadcrumbsReducer';

// TODO : il faut trouver une solution pour charger le logo avant le chargement du site, peu importe l'URL demandé en 1er
const store = configureStore({
  reducer: {
    breadcrumbs: breadcrumbsReducer,
    hikesList: hikesListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
