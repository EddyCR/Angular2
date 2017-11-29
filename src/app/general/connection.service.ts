import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ConnService{

	private source = new Subject();
	observable = this.source.asObservable(); 

	sendNotification(msg: string){
		this.source.next(msg);
	}
}