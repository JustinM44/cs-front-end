import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { UserDataService } from './UserData.service';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginresponse
constructor(private http: HttpClient, public userData: UserDataService) { }

login(loginBody) {
  return this.http.post<any>(environment.api + environment.paths.auth.login, loginBody)
}
}
