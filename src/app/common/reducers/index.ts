import { ActionReducerMap } from '@ngrx/store';
import { createFeatureSelector, createSelector, MemoizedSelector  } from '@ngrx/store';

import { albumReducer } from './album';
import { cartReducer } from './cart';
import { authReducer } from './auth';
import { formReducer } from './form';

export const reducers: ActionReducerMap<AppState> = {
  album: albumReducer,
  cart: cartReducer,
  auth: authReducer,
  form: formReducer
};

export const getCartState: MemoizedSelector<object, Album[]> = createFeatureSelector<Album[]>('cart');

export const getCartAmount: MemoizedSelector<AppState, number> = createSelector(
  getCartState,
  (items: Album[]) => items.length
);
export const getCartTotalSum: MemoizedSelector<AppState, number> = createSelector(
  getCartState,
  (items: Album[]) => items.reduce((acc: number, item: Album) => acc + 1, 0)
);
