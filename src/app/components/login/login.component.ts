import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthServiceTsService } from 'src/app/services/auth.service.ts.service';
import { UserServiceTsService } from 'src/app/services/user.service.ts.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private userService : UserServiceTsService, 
    private userAuthService : AuthServiceTsService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    if(localStorage.getItem('id')){
      this.router.navigate(['/home']);
    }
  }

  onSubmit(): void {
    this.userService.login(this.loginForm.value).subscribe( 
      (response:any) => {
        this.userAuthService.setId(response.id);
        this.userAuthService.setFirstName(response.firstName);
        this.userAuthService.setLastName(response.lastName);
        this.userAuthService.setUserName(response.userName);
        this.userAuthService.setEmail(response.email);
        this.userAuthService.setMobileNumber(response.mobileNumber);
        this.userAuthService.setUserRole(response.userRole);
        this.userAuthService.setToken(response.token);
        window.location.reload();
        // this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed', error);
        // Handle error response
      }
    );
  }
}
