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

  private getQuery(query: string, body: any) {
    const url = `${ this.url }${ query }`;

    return this.http.post(url, body);
  }

  creatHeroe(heroe: HeroeModel) {
    return this.getQuery('/heroes.json', heroe)
      .pipe(map(response => {
        heroe.id = response['name'];
        return heroe;
      }));
  }
}
