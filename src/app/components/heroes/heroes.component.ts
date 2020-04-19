import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';

// Imports
import { first } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  loading: boolean = true;

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes()
      .pipe(first())
      .subscribe(response => {
        this.heroes = response;
        this.loading = false;
      });
  }

  deleteHeroe(heroe: HeroeModel, i: number) {
    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${heroe.name}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(response => {
      if (response.value) {
        this.heroes.splice(i, 1);
        this.heroesService.deleteHeroe(heroe.id)
          .pipe(first())
          .subscribe();
      }
    });
  }
}
