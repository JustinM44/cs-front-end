import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { UserDataService } from './UserData.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient, public userData: UserDataService) { }

login(loginBody): Observable<any> {
  return this.http.post<any>('http://localhost:8080/login', loginBody).pipe(map(result => result))
}
}
