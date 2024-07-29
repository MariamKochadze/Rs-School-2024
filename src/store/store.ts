import { configureStore } from '@reduxjs/toolkit';
import { rmApi } from './api/rmApi';
import { charactersReducer } from './charactersSlice';
import { favoritesReducer } from './favoritesSlice';
import { errorsNotifyMiddleware } from './middlewares/errorNotifyMiddleware';

export const store = configureStore({
  reducer: {
    [rmApi.reducerPath]: rmApi.reducer,
    characters: charactersReducer,
    favorites: favoritesReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rmApi.middleware, errorsNotifyMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
