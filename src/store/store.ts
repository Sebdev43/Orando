import { configureStore } from '@reduxjs/toolkit';

import { hikesListReducer } from './reducers/hikesListReducer';
import { breadcrumbsReducer } from './reducers/breadcrumbsReducer';
import { menuReducer } from './reducers/menuReducer';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    breadcrumbs: breadcrumbsReducer,
    hikesList: hikesListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
