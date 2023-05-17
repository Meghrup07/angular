import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private loginService: LoginService, private localService: LocalStorageService, private router: Router,) { }

  ngOnInit(): void {
    this.getLoginForm();
  }

  getLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    })
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe((res) => {
      const token = res.result.token;
      this.localService.setItem('token', token);
      this.router.navigate(['/member']);
    })
  }

  //   {
  //   "email": "tony.stark@yopmail.com",
  //     "password": "909004"
  // }

}
