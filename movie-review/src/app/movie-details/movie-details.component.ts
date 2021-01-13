import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieId;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.params.movieId;
  }

}
