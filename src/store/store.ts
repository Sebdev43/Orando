import { configureStore } from '@reduxjs/toolkit';

import { hikesListReducer } from './reducers/hikesAll';
import { breadcrumbsReducer } from './reducers/breadcrumbs';
import { hikesRandomReducer } from './reducers/hikesRandom';
import { hikeOneReducer } from './reducers/hikeOne';
import { settingsReducer } from './reducers/settings';
import { hikesFiltersReducer } from './reducers/hikesFilters';
import { userRegistrationReducer } from './reducers/userRegistration';
import { userConnectionReducer } from './reducers/userConnection';
import { hikeCreationReducer } from './reducers/hikeCreation';
import { userAccountReducer } from './reducers/userAccount';
import { bookmarksReducer } from './reducers/bookmarks';
// import { menuReducer } from './reducers/menu';

const store = configureStore({
  reducer: {
    userRegistration: userRegistrationReducer,
    userConnection: userConnectionReducer,
    userAccount: userAccountReducer,
    bookmarks: bookmarksReducer,
    websiteSettings: settingsReducer,
    hikesRandom: hikesRandomReducer,
    hikesAll: hikesListReducer,
    hikeOne: hikeOneReducer,
    breadcrumbs: breadcrumbsReducer,
    hikesFilters: hikesFiltersReducer,
    hikeCreation: hikeCreationReducer,
    // menu: menuReducer,
  },
});

export default store;
