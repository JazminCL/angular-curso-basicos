import { Component } from "@angular/core";

@Component({
	selector: 'app-contador',
	template: `
	<h1>Hola mundo</h1>

	<button (click)="acumular(base)">+{{ base }}</button>
	<span>{{ numero }}</span>
	<button (click)="acumular(-base)">-{{ base }}</button>
	`
})
export class ContadorComponent{
	title = 'BASES';
	numero : number = 0
	base : number = 5
  
	acumular(valor : number) {
	  this.numero += valor;
	}
}