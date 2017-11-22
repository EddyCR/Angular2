import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
	selector: '[newArrival]'
})
export class ArrivalDirective implements OnInit{
	@Input() newArrival: boolean;
	
	constructor(private el: ElementRef){}

	ngOnInit(){
		if(this.newArrival)
			this.el.nativeElement.style.border = '1px solid red';
	}
}
