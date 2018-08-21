/* tslint:disable */
import { Action } from '@ngrx/store';

export const LOAD_ALBUMS = '[Album] Load Albums';
export const LOAD_ALBUMS_SUCCESS = '[Album] Load Albums Success';
export const LOAD_ALBUMS_FAIL = '[Album] Load Albums Success';
export const ADD_ALBUM = '[Album] Add Album';
export const ADD_ALBUM_SUCCESS = '[Album] Add Album Success';

export class LoadAlbums implements Action {
  public readonly type = LOAD_ALBUMS;
  public constructor(public payload: Album[]) { }
}

export class LoadAlbumsSuccess implements Action {
  public readonly type = LOAD_ALBUMS_SUCCESS;
  public constructor(public payload: Album[]) { }
}

export class LoadAlbumsFail implements Action {
  public readonly type = LOAD_ALBUMS_FAIL;
  public constructor(public payload?: null) { }
}

export class AddAlbum implements Action {
  public readonly type = ADD_ALBUM;
  public constructor(public payload: Album) { }
}

export class AddAlbumSuccess implements Action {
  public readonly type = ADD_ALBUM_SUCCESS;
  public constructor(public payload: Album) { }
}

export type Actions
= LoadAlbums
| LoadAlbumsSuccess
| LoadAlbumsFail
| AddAlbum
| AddAlbumSuccess;
