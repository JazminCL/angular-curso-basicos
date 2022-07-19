import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  heroes 		: string [] = ['Spiderman','Acuaman','Thor','Batman','Mujer Maravilla', 'Airoman', 'Hormiga'];
  heroe_borrado : string 	= '';

  borrarHeroe(){
	// this.heroes.splice(this.heroes.length-1,1);
	// this.heroes.splice(0,1);
	this.heroe_borrado = this.heroes.shift() || '';
	
  }

}
