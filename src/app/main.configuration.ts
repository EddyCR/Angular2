import { Injectable } from '@angular/core';

@Injectable()

export class Configurations{
	public api_baseUrl: string = 'https://api.themoviedb.org/3/';
	public apiKey: string = '6408fa9bdc13488b08ba9293f6473167';
	public  base_url: string = 'http://image.tmdb.org/t/p/';
	//img sizes are "w92", "w154", w185", "w342", "w500", "w780", or "original";
	//get configurations: https://api.themoviedb.org/3/configuration?api_key=6408fa9bdc13488b08ba9293f6473167
	public poster_size: string = 'w185';
	public backdrop_size: string = 'w500';
	public youtube_baseUrl = 'https://www.youtube.com/watch?v=';
}