import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie/movie';

@Component({
	selector: 'movie',
	templateUrl: './movie.template.html',
	styleUrls: ['./movie.styles.css']
})

export class MovieComponent{
	@Input() mov: Movie;
	@Output() selectedMovieEvent: EventEmitter<Movie> = new EventEmitter<Movie>();

	selectMovie(movie: Movie){
		this.selectedMovieEvent.emit(movie);
	}
}