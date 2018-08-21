import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  public transform(albums: Album[], queryString?: string): Album[] {
    if (!queryString || queryString === 'all') {
      return albums;
    }
    return albums.filter((album: Album) => {
      return  album.ART_NAME.toLowerCase().indexOf(queryString.toLowerCase()) !== -1;
    });
  }

}
