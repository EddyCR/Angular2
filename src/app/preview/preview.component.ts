import { Component, Input, ViewChild } from '@angular/core';

import { Movie } from '../movie/movie';
import { DownloadComponent } from '../download/download.component';

@Component({
	selector: 'preview',
	templateUrl: './preview.template.html',
	styleUrls: ['./preview.styles.css']
})

export class PreviewComponent{
	//Inputs pasados por medio de la directiva/html
	@Input() mov: Movie;
	//@Input() videos: Array<{}>;

	// Se acede a toda la implementación del component hijo
	@ViewChild(DownloadComponent) dwn: DownloadComponent ;
}