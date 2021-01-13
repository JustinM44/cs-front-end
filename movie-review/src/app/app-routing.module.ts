import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviereviewComponent } from './moviereview/moviereview.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path: '', redirectTo:'moviereview', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'moviereview', component: MoviereviewComponent},
  {path: 'moviedetails/:movieId', component:MovieDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
