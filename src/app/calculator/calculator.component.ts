import { Component, OnInit } from '@angular/core';

import { PricingService } from '../general/pricing.service';
import { ConnService } from '../general/connection.service';


@Component({
	selector: 'calculator',
	templateUrl: './calculator.template.html',
	styleUrls: ['./calculator.styles.css']
})

export class CalculatorComponent implements OnInit{
	cantidad: number = 0;
	valMovie: number;

	constructor(private ps: PricingService, private conn: ConnService){}

	ngOnInit(){
		this.valMovie = this.ps.getPriceMovie();

		this.conn.observable.subscribe(msg=>{
			console.log('Información recibida: ',msg);
		});
	}
}