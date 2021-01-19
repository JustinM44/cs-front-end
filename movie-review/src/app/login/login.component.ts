import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../Services/Auth.service';
import { UserDataService } from '../Services/UserData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserDataService]
})
export class LoginComponent implements OnInit {

  loginRequest: FormGroup;
  isInvalidLogin: boolean

  constructor(private formBuilder: FormBuilder, private authservice: AuthService, private router: Router,
    public userData: UserDataService) 
    {
      this.isInvalidLogin = false; 
    this.loginRequest = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  async onSubmit(loginData){
    this.authservice.login(loginData).subscribe(data => {
      this.userData.setUserId(data.userId);
      this.userData.setUserName(data.username);
      this.userData.setUserRole(data.role);

      if(this.userData.getUserRole() === 'user'){
        sessionStorage.setItem('userId', this.userData.getUserId().toString());
        sessionStorage.setItem('userName', this.userData.getUserName());
        sessionStorage.setItem('userRole', this.userData.getUserRole());

        this.router.navigate(['/moviereview']);
      }
    }, (error) => {
      if(error.status === 401){
        this.isInvalidLogin = true;
      }

    });
    this.loginRequest.reset();
  }
}
