import * as CartActions from './../actions/cart';
import { Action, ActionReducer } from '@ngrx/store';

const initialState: Album[] = [];

export function cartReducer(albums: Album[] = initialState, action: CartActions.Actions): Album[] {
  switch (action.type) {

    case CartActions.ADD_TO_CART: {
      const itemIndex: number = albums.findIndex((album: Album) => album.ALB_ID === action.payload.ALB_ID);
      if (itemIndex !== -1) {
        const updatedItem: Album = {...action.payload };
        albums.splice(itemIndex, 1, updatedItem);
        return [...albums];
      }
      return [...albums, {...action.payload }];
    }

    case CartActions.DELETE_ITEM: {
      const itemIndex: number = albums.findIndex((album: Album) => album.ALB_ID === action.payload.ALB_ID);
      albums.splice(itemIndex, 1);
      return [...albums];
    }

    case CartActions.REDUCE_ITEM: {
      const itemIndex: number = albums.findIndex((album: Album) => album.ALB_ID === action.payload.ALB_ID);
      const updatedItem: Album = {...action.payload };
      albums.splice(itemIndex, 1, updatedItem);
      return [...albums];
    }

    case CartActions.INCREASE_ITEM: {
      const itemIndex: number = albums.findIndex((album: Album) => album.ALB_ID === action.payload.ALB_ID);
      const updatedItem: Album = {...action.payload };
      albums.splice(itemIndex, 1, updatedItem);
      return [...albums];
    }

    default: {
      return albums;
    }
  }
}
