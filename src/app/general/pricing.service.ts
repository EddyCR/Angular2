import { Injectable } from '@angular/core';

const priceDollar: number = 575;
const priceMovie: number = 300;

@Injectable()
export class PricingService{
	getDollar(){
		return priceDollar;
	}

	getPriceMovie(){
		return priceMovie;
	}
}