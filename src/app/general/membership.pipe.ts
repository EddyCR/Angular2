import { Pipe, PipeTransform } from '@angular/core';
import { PricingService } from './pricing.service';

@Pipe({ name: 'membership'})
export class MembershipPipe implements PipeTransform{
	constructor(private ps: PricingService){}

	transform(value: number){
		if(value > 0){
			return (value * this.ps.getPriceMovie())/this.ps.getDollar();
		}else{
			return 0;
		}
	}
} 