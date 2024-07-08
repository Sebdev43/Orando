import { configureStore } from '@reduxjs/toolkit';

import { hikesListReducer } from './reducers/hikesListReducer';
import { breadcrumbsReducer } from './reducers/breadcrumbsReducer';
import { menuReducer } from './reducers/menuReducer';
import { settingsReducer } from './reducers/settingsReducer';
import { hikesFiltersReducer } from './reducers/hikesFiltersReducer';

const store = configureStore({
  reducer: {
    websiteSettings: settingsReducer,
    menu: menuReducer,
    breadcrumbs: breadcrumbsReducer,
    hikes: hikesListReducer,
    hikesFilters: hikesFiltersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
