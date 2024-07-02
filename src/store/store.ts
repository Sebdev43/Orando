import { configureStore } from '@reduxjs/toolkit';

import { hikesListReducer } from './reducers/hikesListReducer';
import { breadcrumbsReducer } from './reducers/breadcrumbsReducer';

const store = configureStore({
  reducer: {
    breadcrumbs: breadcrumbsReducer,
    hikesList: hikesListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
