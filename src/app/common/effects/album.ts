import { MatSnackBar } from '@angular/material';
import { AlbumService } from '../../shared/services/album.service';
import * as AlbumActions from '../actions/album';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AlbumEffects {

  @Effect()
  public loadAlbums$: Observable<Action> = this.actions$
    .ofType(AlbumActions.LOAD_ALBUMS)
    .switchMap(() => this._albumService.getAlbums())
    .map((albums: Album[]) => new AlbumActions.LoadAlbumsSuccess(albums))
    .do(() => this._matSnackBar.open('Products were loaded', '', {duration: 1000}))
    .catch((err: Error) => {
      // tslint:disable-next-line
      console.log(err);
      return of(new AlbumActions.LoadAlbumsFail());
    });

  // @Effect()
  // public addProduct$: Observable<Action> = this.actions$
  //   .ofType(AlbumActions.ADD_ALBUM)
  //   .map((action: AlbumActions.AddAlbum) => action.payload)
  //   .switchMap((album: Album) => this._albumService.addAlbum(album))
  //   .map((album: Album) => new AlbumActions.AddAlbumSuccess(album))
  //   .do(() => this._matSnackBar.open('Product has been added', '', {duration: 3000}));

  public constructor(
    private actions$: Actions,
    private _albumService: AlbumService,
    private _matSnackBar: MatSnackBar
  ) {}
}

