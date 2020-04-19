import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';

// Imports
import { map, delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url: string = 'https://heroes-angularjs-e6365.firebaseio.com';

  constructor(
    private http: HttpClient
  ) { }

  createHeroe(heroe: HeroeModel) {
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

  getHeroes() {
    return this.http.get(`${ this.url }/heroes.json`)
      .pipe(map(response => {
        return this.createArray(response);
      }), delay(1000));
  }

  private createArray(heroesObj: Object) {
    const heroes: HeroeModel[] = [];

    if( heroesObj === null) {
      return [];
    }

    Object.keys(heroesObj)
      .forEach(key => {
        const heroe: HeroeModel = heroesObj[key];
        heroe.id = key;
        heroes.push(heroe);
      });
    return heroes;
  }

  getHeroe(id: string) {
    return this.http.get(`${ this.url }/heroes/${ id }.json`)
      .pipe(map(response => {
        return response;
      }));
  }

  deleteHeroe(id: string) {
    return this.http.delete(`${ this.url }/heroes/${ id }.json`)
      .pipe(map(response => {
        return response;
      }));
  }
}
