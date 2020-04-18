import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';

// Imports
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url: string = 'https://heroes-angularjs-e6365.firebaseio.com';

  constructor(
    private http: HttpClient
  ) { }

  creatHeroe(heroe: HeroeModel) {
    return this.http.post(`${ this.url }/heroes.json`, heroe)
      .pipe(map(response => {
        heroe.id = response['name'];
        return heroe;
      }));
  }

  updateHeroe(heroe: HeroeModel) {
    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id;

    return this.http.put(`${ this.url }/heroes/${ heroe.id }.json`, heroeTemp)
      .pipe(map(response => {
        return heroe;
      }));
  }
}
