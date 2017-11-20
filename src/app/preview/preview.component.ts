import { Component, Input } from '@angular/core';

import { Movie } from '../movie/movie';

@Component({
	selector: 'preview',
	templateUrl: './preview.template.html',
	styleUrls: ['./preview.styles.css']
})

export class PreviewComponent{
	//Inputs pasados por medio de la directiva/html
	@Input() mov: Movie;
	@Input() videos: Array<{}>;

}