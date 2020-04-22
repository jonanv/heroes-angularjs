import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';

import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

// Imports
import { first } from 'rxjs/operators';
import Swal from "sweetalert2";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor(
    private heroesService: HeroesService,
    private activatedRouter: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id');

    if(id !== 'nuevo') {
      this.heroesService.getHeroe(id)
        .pipe(first())
        .subscribe((response: HeroeModel) => {
          this.heroe = response;
          this.heroe.id = id;
        });
    }

  }

  save(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardado informacion',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;
    let message: string;

    if (this.heroe.id) {
      peticion = this.heroesService.updateHeroe(this.heroe);
      message = 'Se actualizo correctamente';
    }
    else {
      peticion = this.heroesService.createHeroe(this.heroe);
      message = 'Se creo correctamente';
    }

    peticion
      .pipe(first())
      .subscribe(response => {
        Swal.fire({
          title: this.heroe.name,
          text: message,
          icon: 'success'
        });
      });
  }

}
