import { configureStore } from '@reduxjs/toolkit';

import { hikesListReducer } from './reducers/hikesAll';
import { breadcrumbsReducer } from './reducers/breadcrumbs';
import { hikesRandomReducer } from './reducers/hikesRandom';
import { menuReducer } from './reducers/menu';
import { hikeOneReducer } from './reducers/hikeOne';
import { settingsReducer } from './reducers/settings';
import { hikesFiltersReducer } from './reducers/hikesFilters';

const store = configureStore({
  reducer: {
    websiteSettings: settingsReducer,
    hikesRandom: hikesRandomReducer,
    hikesAll: hikesListReducer,
    hikeOne: hikeOneReducer,
    // menu: menuReducer,
    breadcrumbs: breadcrumbsReducer,
    hikesFilters: hikesFiltersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
