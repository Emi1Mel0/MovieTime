import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private _HttpClient: HttpClient) {}

  baseurl = 'https://api.themoviedb.org/3';
  apikey = '1feaaea8618497e31f3989b8c5601e98';

  bannerApiData(): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}/trending/all/week?api_key=${this.apikey}`
    );
  }

  trendingMoviesApiData(): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}/trending/all/day?api_key=${this.apikey}`
    );
  }
}
