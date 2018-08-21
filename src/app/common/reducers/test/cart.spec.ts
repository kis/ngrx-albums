import { album } from './mocks/cart';
import * as CartActions from '../../actions/cart';
import { Action, ActionReducer } from '@ngrx/store';
import { cartReducer } from '../cart';

describe('cartReducer', () => {

  it('should handle ADD_TO_CART', () => {
    const initialState: Album[] = [];
    const expected: Album[] = [{...album}];

    expect(cartReducer(initialState, new CartActions.AddToCart(album)))
    .toEqual(expected);
  });

  it('should handle ADD_TO_CART +1', () => {
    const initialState: Album[] = [{...album}];
    const expected: Album[] = [{...album}];

    expect(cartReducer(initialState, new CartActions.AddToCart(album)))
    .toEqual(expected);
  });

  it('should handle DELETE_ITEM', () => {
    const initialState: Album[] = [album];
    const expected: Album[] = [];

    expect(cartReducer(initialState, new CartActions.DeleteItem(album)))
    .toEqual(expected);
  });

  it('should handle REDUCE_ITEM', () => {
    const initialState: Album[] = [{...album}];
    const expected: Album[] = [{...album}];

    expect(cartReducer(initialState, new CartActions.ReduceItem({...album})))
    .toEqual(expected);
  });

  it('should handle INCREASE_ITEM', () => {
    const initialState: Album[] = [{...album}];
    const expected: Album[] = [{...album}];

    expect(cartReducer(initialState, new CartActions.IncreaseItem({...album})))
    .toEqual(expected);
  });

});

