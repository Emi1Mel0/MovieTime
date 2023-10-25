import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _MovieApiServiceService: MovieApiServiceService) {}

  bannerResult: any = [];
  trendingMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }

  bannerData() {
    this._MovieApiServiceService.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerResult#');
      this.bannerResult = result.results;
    });
  }

  trendingData(){
    this._MovieApiServiceService.trendingMoviesApiData().subscribe((result)=>{
      console.log(result,`trendingresults#`)
      this.trendingMovieResult = result.results;
    })
  }
}
