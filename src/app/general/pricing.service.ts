import { Injectable } from '@angular/core';

const priceDollar: number = 575,
	  priceMovie: number = 300;

@Injectable()
export class PricingService{
	getDollar(): number{
		return priceDollar;
	}

	getPriceMovie(): number{
		return priceMovie;
	}
}