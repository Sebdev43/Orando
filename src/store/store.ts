import { configureStore } from '@reduxjs/toolkit';

import { hikesListReducer } from './reducers/hikesAll';
import { breadcrumbsReducer } from './reducers/breadcrumbs';
import { hikesRandomReducer } from './reducers/hikesRandom';
import { hikeOneReducer } from './reducers/hikeOne';
import { settingsReducer } from './reducers/settings';
import { hikesFiltersReducer } from './reducers/hikesFilters';
import { userReducer } from './reducers/user';
import { menuReducer } from './reducers/menu';

const store = configureStore({
  reducer: {
    user: userReducer,
    websiteSettings: settingsReducer,
    hikesRandom: hikesRandomReducer,
    hikesAll: hikesListReducer,
    hikeOne: hikeOneReducer,
    breadcrumbs: breadcrumbsReducer,
    hikesFilters: hikesFiltersReducer,
    // menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
