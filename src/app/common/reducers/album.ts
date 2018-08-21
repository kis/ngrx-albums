import * as AlbumActions from '../actions/album';
import { Action, ActionReducer } from '@ngrx/store';

const initialState: Album[] = [];

export function albumReducer(state: Album[] = initialState, action: AlbumActions.Actions): Album[] {
  switch (action.type) {

    case AlbumActions.LOAD_ALBUMS: {
      if (action.payload) return [...action.payload];
    }

    case AlbumActions.LOAD_ALBUMS_SUCCESS: {
      if (action.payload) return [...action.payload];
    }

    case AlbumActions.ADD_ALBUM_SUCCESS: {
      // return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
}
