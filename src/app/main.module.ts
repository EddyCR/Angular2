import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import { MainComponent } from './main.component';
import { MoviesComponent } from './movies/movies.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MovieComponent } from './movie/movie.component';
import { PreviewComponent } from './preview/preview.component';

//Services
import { MoviesService } from './movies/movies.service';
import { Configurations } from './main.configuration';

@NgModule({
	declarations: [MainComponent,
		MoviesComponent,
		CalculatorComponent,
		MovieComponent,
		PreviewComponent],
	imports:[ BrowserModule,
		HttpClientModule ],
	providers: [MoviesService, Configurations],
	bootstrap: [MainComponent]
})

export class MainModule{

}