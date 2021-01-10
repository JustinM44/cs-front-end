import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../Services/Auth.service';
import { UserDataService } from '../Services/UserData.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest;

  constructor(private formBuilder: FormBuilder, private authservice: AuthService, public userData: UserDataService) { 
    this.loginRequest = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(loginData){
    console.log(loginData)
    this.authservice.login(loginData).subscribe(data => {
      this.userData.setUserId(data.userId);
      this.userData.setUserName(data.username);
      this.userData.setUserRole(data.role);
    });
    console.log(this.userData);
    this.loginRequest.reset();
  }



}
