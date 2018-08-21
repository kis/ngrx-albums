import * as CartActions from '../common/actions/cart';
import * as AlbumActions from '../common/actions/album';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit {

  public albums: Observable<Album[]>;

  public constructor(
    private _store: Store<AppState>,
    private _matSnackBar: MatSnackBar
  ) {
    this.albums = _store.select('album');
  }

  public ngOnInit(): void {
    this._store.dispatch(new AlbumActions.LoadAlbums());
  }

  public addAlbum(album: Album): void {
    this._store.dispatch(new CartActions.AddToCart(album));
    this._matSnackBar.open(`${album.ALB_TITLE} +1`, '', {duration: 1000});
  }

}
