import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AlbumService {

  public constructor(
    private db: AngularFireDatabase
  ) {}

  public getAlbums(): Observable<{}> {
    return this.db.object('albums').valueChanges();
  }

  public addAlbum(album: Album) {
    this.db.list<Album>('albums').push(album);
  }
}
