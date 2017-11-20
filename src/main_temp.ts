// Boilerplate

//Injector
import { Injectable } from '@angular/core';
@Injectable()
class utils{
	log(text:string){
		console.log(text);
	}
}

//Componente
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `Boilerplate {{ title }} <p (click)='see()'>See</p>` 
})
class principal{

	title = 'Angular';

	constructor(private l:utils){}

	see(){
		this.l.log('Se acaba de construir el componente.');
	}
}

//Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	declarations: [principal],
	imports:[ BrowserModule ],
	providers: [utils],
	bootstrap: [principal]
})
class MainModule{

}

// Angular
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);
