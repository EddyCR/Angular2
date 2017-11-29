import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Ccmponents
import { MainComponent } from './main.component';
import { MoviesComponent } from './movies/movies.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MovieComponent } from './movie/movie.component';
import { PreviewComponent } from './preview/preview.component';
import { DownloadComponent } from './download/download.component';

// Services
import { MoviesService } from './movies/movies.service';
import { Configurations } from './general/configurations.service';
import { PricingService } from './general/pricing.service';
import { ConnService } from './general/connection.service';


// Directives
import { ArrivalDirective } from './movie/movie.directive';

// Pipe
import { MembershipPipe } from './general/membership.pipe';
import { NewArrivalsPipe } from './general/new-arrivals.pipe';

@NgModule({
	declarations: [MainComponent,
		MoviesComponent,
		CalculatorComponent,
		MovieComponent,
		PreviewComponent,
		DownloadComponent,
		ArrivalDirective,
		MembershipPipe,
		NewArrivalsPipe],
	imports:[ BrowserModule, HttpClientModule, FormsModule ],
	providers: [MoviesService, 
		Configurations, 
		PricingService,
		ConnService],
	bootstrap: [MainComponent]
})

export class MainModule{

}