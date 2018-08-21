/* tslint:disable */
import { Action } from '@ngrx/store';

export const ADD_TO_CART = '[Cart] Add Album To Cart';
export const DELETE_ITEM = '[Cart] Delete Item';
export const REDUCE_ITEM = '[Cart] Reduce Item';
export const INCREASE_ITEM = '[Cart] Increase Item';

export class AddToCart implements Action {
  public readonly type = ADD_TO_CART;
  public constructor(public payload: Album) { }
}

export class DeleteItem implements Action {
  public readonly type = DELETE_ITEM;
  public constructor(public payload: Album) { }
}

export class ReduceItem implements Action {
  public readonly type = REDUCE_ITEM;
  public constructor(public payload: Album) { }
}

export class IncreaseItem implements Action {
  public readonly type = INCREASE_ITEM;
  public constructor(public payload: Album) { }
}

export type Actions
  = AddToCart
  | DeleteItem
  | ReduceItem
  | IncreaseItem;
