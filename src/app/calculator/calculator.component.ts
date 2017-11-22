import { Component, OnInit } from '@angular/core';
import { PricingService } from '../general/pricing.service';

@Component({
	selector: 'calculator',
	templateUrl: './calculator.template.html',
	styleUrls: ['./calculator.styles.css']
})

export class CalculatorComponent implements OnInit{
	cantidad: number = 0;
	valMovie: number;
	priceDollar: number;

	constructor(private ps: PricingService){}

	ngOnInit(){
		this.valMovie = this.ps.getPriceMovie();
		this.priceDollar = this.ps.getDollar();
	}
}