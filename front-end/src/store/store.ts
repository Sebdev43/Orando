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

/**
 * Configures the Redux store for the application.
 *
 * This file combines multiple reducers to create a centralized store 
 * for the global state of the application. It includes reducers for managing 
 * hikes, user accounts, filters, site settings, and other specific features of the application.
 *
 * The included reducers are:
 * - `userRegistrationReducer`: Manages the state related to user registration.
 * - `userConnectionReducer`: Manages the state related to user login and authentication.
 * - `userAccountReducer`: Manages user account information.
 * - `bookmarksReducer`: Manages user-created bookmarks.
 * - `settingsReducer`: Manages global site settings.
 * - `hikesRandomReducer`: Manages the list of random hikes.
 * - `hikesListReducer`: Manages the complete list of hikes.
 * - `hikeOneReducer`: Manages the details of a specific hike.
 * - `breadcrumbsReducer`: Manages the navigation breadcrumbs.
 * - `hikesFiltersReducer`: Manages filters applied to the list of hikes.
 * - `hikeCreationReducer`: Manages the creation of a new hike.
 *
 * @module store
 */

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
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
