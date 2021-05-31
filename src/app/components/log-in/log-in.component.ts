import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AppService } from '../../services/AppService';
import { REST_API } from '../../constants/REST_API';

@Component({
  selector: 'login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  pageTitle: string = 'Login'
  loginFormFields = { username: '', password: '' };
  isRegistered: boolean = false;
  loginForm: FormGroup;
  serverErrorMessage: string = '';
  constructor(
    public appService: AppService,
    public api: REST_API,
    public router: Router) { }
  ngOnInit(): void {
    this.appService.getRegisteredUserObs().subscribe(res => {
      this.isRegistered = res;
    })

    this.loginForm = new FormGroup({
      'username': new FormControl(this.loginFormFields.username, [
        Validators.required
      ]),
      'password': new FormControl(this.loginFormFields.password, [
        Validators.required, Validators.minLength(8)
      ])
    });
  }

  get username() { return this.loginForm.get('username'); }

  get password() { return this.loginForm.get('password'); }

  login(evt: Event) {
    let userLoginDetails: any = this.loginForm.value;

    this.appService.login(this.api.authAPIs.login, userLoginDetails)
      .pipe(first())
      .subscribe(res => {
        if (res.userId && res.token) {
          this.router.navigate(['/dashboard']);
        }
      }, (err) => {
        console.log('Error', err);
        this.serverErrorMessage = err;
      });
  }

  register() {
    this.router.navigate(['register']);
  }
}