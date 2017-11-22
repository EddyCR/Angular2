import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../movie/movie';
import { MoviesService } from './movies.service';
import { Configurations } from '../general/configurations.service';

@Component({
	selector: 'movies',
	templateUrl: './movies.template.html',
	styleUrls: ['./movies.styles.css']
})

export class MoviesComponent implements OnInit{
	list: Movie[];
	ListMovies;
	selectedMovie: Movie;
	movieVideos: Array<{}> = new Array<{}>(); 

	constructor(private http: HttpClient, private sm: MoviesService, private config: Configurations){}

	ngOnInit(){
		this.list = this.sm.getMovies();

	    // this.sm.getMovies().subscribe(data => {
	    //   	this.ListMovies = data['results'];
	    //   	this.ListMovies.map( movie =>{
	    //   		movie.backdrop_path = `${this.config.base_url}/${this.config.backdrop_size}${movie.backdrop_path}`;
	    //   		movie.poster_path =`${this.config.base_url}/${this.config.poster_size}${movie.poster_path}`;
	    //   	}) 
	    // });
	}

	getMovie(movie){
		//this.getVideo(movie.id);
		this.selectedMovie = movie;
		console.log('selected',this.selectedMovie);
	}	

	getVideo(id){
	    this.sm.getVideo(id).subscribe(data => {
      		data['results'].forEach( result => {
	      		if (result.site === "YouTube" && result.type === "Trailer") {
	      			result.video_url = `${this.config.youtube_baseUrl}${result.key}`;
	      		 	this.movieVideos.push(result);      			}
      		});
      		console.log('videos',this.movieVideos);
	    });
	}
}