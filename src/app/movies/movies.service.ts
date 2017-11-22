import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Movie } from '../movie/movie';
import { Configurations } from '../general/configurations.service';

let movies: Movie[] = [
	new Movie(1,'Alias Grace','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, quidem!','./assets/movie1.webp','./assets/bg1.webp', true),
	new Movie(2,'Sense 8','Lorem ipsum dolor sit amet.','./assets/movie2.webp','./assets/bg2.webp', false),
	new Movie(3,'The Sinner','Lorem ipsum dolor sit amet, consectetur.','./assets/movie3.webp','./assets/bg3.webp', false),
	new Movie(4,'Black mirror','Lorem ipsum dolor sit amet, consectetur adipisicing.','./assets/movie4.webp','./assets/bg4.webp', true),
	new Movie(5,'Van Helsing','Lorem ipsum dolor sit amet, consectetur adipisicing elit.','./assets/movie5.webp','./assets/bg5.webp', false)
]

@Injectable()

export class MoviesService{
	constructor(private http: HttpClient, private config: Configurations ){};
	
	getMovies(){
		return movies;
	}

	// public getMovies <T>(): Observable <T>{
	// 	//return movies;
	// 	return this.http.get<T>(`${this.config.api_baseUrl}movie/popular?api_key=${this.config.apiKey}&language=en-US&page=1`);
	// }

	public getMovie <T>(movieId: number): Observable <T>{
		return this.http.get<T>(`${this.config.api_baseUrl}movie/${movieId}/videos?api_key=6408fa9bdc13488b08ba9293f6473167&language=en-US`);
	}

	public getVideo <T>(movieId: number): Observable <T>{
	    return this.http.get<T>(`${this.config.api_baseUrl}movie/${movieId}/videos?api_key=6408fa9bdc13488b08ba9293f6473167&language=en-US`);
	};
}