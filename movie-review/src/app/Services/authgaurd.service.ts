import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {

constructor() { }

isLoggedIn(){
  return !!sessionStorage.getItem('userId');
}

}
