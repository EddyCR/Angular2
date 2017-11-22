import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import { MainComponent } from './main.component';
import { MoviesComponent } from './movies/movies.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MovieComponent } from './movie/movie.component';
import { PreviewComponent } from './preview/preview.component';
import { DownloadComponent } from './download/download.component';

// Services
import { MoviesService } from './movies/movies.service';
import { Configurations } from './main.configuration';
import { PricingService } from './general/pricing.service';

// Directives
import { ArrivalDirective } from './movie/movie.directive';

@NgModule({
	declarations: [MainComponent,
		MoviesComponent,
		CalculatorComponent,
		MovieComponent,
		PreviewComponent,
		DownloadComponent,
		ArrivalDirective],
	imports:[ BrowserModule,
		HttpClientModule,
		FormsModule ],
	providers: [MoviesService, Configurations, PricingService],
	bootstrap: [MainComponent]
})

export class MainModule{

}