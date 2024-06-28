// 2 - création du store
// 2a - import de configurestore
import { configureStore } from '@reduxjs/toolkit';

import { hikesListReducer } from './reducers/hikesListReducer';

// 2b - on déclare nos différents states avec leurs reducers
const store = configureStore({
  reducer: {
    hikesList: hikesListReducer,
  },
});

// 5a - extraction des types de notre store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
