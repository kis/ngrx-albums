import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public transform(albums: Album[], queryString?: string): Album[] {

    if (!queryString) {
      return albums;
    }
    return albums.filter((album: Album) => {
      return  album.ALB_TITLE.toLowerCase().indexOf(queryString.toLowerCase()) !== -1;
    });
  }

}
