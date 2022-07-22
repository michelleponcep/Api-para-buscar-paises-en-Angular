import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  //styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent  {

  termino: string= '';
  Error: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar( termino: string){
    this.Error= false;
    this.termino = termino;
    //console.log(this.termino);

    this.paisService.buscarCapital(this.termino)
    .subscribe( (paises) => {
     console.log(paises);
     this.paises= paises;

      
    }, (err) => {
      this.Error= true;
      this.paises = [];
    });
  }
}


