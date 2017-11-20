import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Movie } from '../movie/movie';
import { Configurations } from '../main.configuration';

let movies: Movie[] = [
	new Movie(1,'IT', 'Lorem ipsum 1','./assets/movie1.webp','./asssets/background.webp'),
	new Movie(2,'Marvel', 'Lorem ipsum 2','./assets/movie2.webp','./asssets/background.webp'),
	new Movie(3,'Wonder Woman', 'Lorem ipsum 3','./assets/movie3.webp','./asssets/background.webp'),
	new Movie(4,'X-Men', 'Lorem ipsum 4','./assets/movie4.webp','./asssets/background.webp'),
	new Movie(5,'GoT', 'Lorem ipsum 5','./assets/movie5.webp','./asssets/background.webp')
]

@Injectable()

export class MoviesService{
	constructor(private http: HttpClient, private config: Configurations ){};
	
	public getMovies <T>(): Observable <T>{
		//return movies;
		return this.http.get<T>(`${this.config.api_baseUrl}movie/popular?api_key=${this.config.apiKey}&language=en-US&page=1`);
	}

	public getMovie <T>(movieId: number): Observable <T>{
		return this.http.get<T>(`${this.config.api_baseUrl}movie/${movieId}/videos?api_key=6408fa9bdc13488b08ba9293f6473167&language=en-US`);
	}

	public getVideo <T>(movieId: number): Observable <T>{
	    return this.http.get<T>(`${this.config.api_baseUrl}movie/${movieId}/videos?api_key=6408fa9bdc13488b08ba9293f6473167&language=en-US`);
	};
}