import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { countryApi } from './api/countryApi';
import { countriesReducer } from './countriesSlice';
import { errorsNotifyMiddleware } from './middlewares/errorsNotifyMiddleware';
import { reactHookFormReducer } from './reactHookFormSlice';
import { uncontrolledFormReducer } from './uncontrolledFormSlice';

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
    countries: countriesReducer,
    uncontrolledForm: uncontrolledFormReducer,
    reactHookForm: reactHookFormReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(countryApi.middleware, errorsNotifyMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
