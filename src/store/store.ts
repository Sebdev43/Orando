import { configureStore } from '@reduxjs/toolkit';

import { hikesListReducer } from './reducers/hikesListReducer';
import { breadcrumbsReducer } from './reducers/breadcrumbsReducer';

const store = configureStore({
  reducer: {
    websiteLogo: () => './src/assets/logo_fond_blanc.png',
    breadcrumbs: breadcrumbsReducer,
    hikesList: hikesListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
