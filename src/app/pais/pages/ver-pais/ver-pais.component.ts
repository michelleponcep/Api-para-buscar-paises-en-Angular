import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country, Translation } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  //styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  Translations!: string[];

  constructor(
    private activadedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
    this.activadedRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.ObtenerPaisCodigo(id)),
      tap(console.log)
      //switchMap((param) => this.paisService.ObtenerPaisCodigo(param['id']))
    )
    .subscribe( pais => this.pais = pais[0]);
      
    

    // this.activadedRoute.params
    // .subscribe( ({id}) => {
    //   console.log(id);

    //   this.paisService.ObtenerPaisCodigo(id)
    //   .subscribe( pais => {
    //     console.log(pais);
    //   })

    // });
  }

}
