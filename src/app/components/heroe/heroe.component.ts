import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';

import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

// Imports
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if(this.heroe.id) {
      this.heroesService.updateHeroe(this.heroe)
        .pipe(first())
        .subscribe(response => {
          console.log(response);
        });
    }
    else {
      this.heroesService.creatHeroe(this.heroe)
        .pipe(first())
        .subscribe(response => {
          console.log(response);
        });
    }

  }

}
