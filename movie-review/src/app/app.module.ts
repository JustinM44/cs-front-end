import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviereviewComponent } from './moviereview/moviereview.component';
import { UserDataService } from './Services/UserData.service';
import { AuthService } from './Services/Auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list'
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RaitingComponent } from './Components/raiting/raiting.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthInterceptorService } from './Services/AuthInterceptor.service';

@NgModule({
  declarations: [			
    AppComponent,
      LoginComponent,
      MoviereviewComponent,
      MovieDetailsComponent,
      RaitingComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule
  ],
  providers: [UserDataService, {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
