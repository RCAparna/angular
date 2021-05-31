import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AppService } from '../../services/AppService';
import { REST_API } from '../../constants/REST_API';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  serverErrorMessage: string = '';
  constructor(
    public appService: AppService,
    public api: REST_API,
    public router: Router) { }
  pageTitle: string = 'Sign Up'
  registerFormFields = { username: '', email: '', password: '', confirmPassword: '' };
  confPwd: boolean = false;
  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        'username': new FormControl(this.registerFormFields.username, [
          Validators.required
        ]),
        'email': new FormControl(this.registerFormFields.email, [
          Validators.required
        ]),
        'password': new FormControl(this.registerFormFields.password, [
          Validators.required, Validators.minLength(8)
        ]),
        'confirmPassword': new FormControl(this.registerFormFields.confirmPassword, [
          Validators.required,

        ])
      }

    );


  }
  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }
  get email() { return this.registerForm.get('email'); }
  get confirmPassword() {
    if (this.registerForm.get('password').value !== this.registerForm.get('confirmPassword').value) {
      this.registerForm.get('confirmPassword').setErrors({ 'incorrect': true })
    } else {
      this.registerForm.get('confirmPassword').setErrors(null);
    }

    return this.registerForm.get('confirmPassword');
  }

  registerUser(evt: Event) {
    let userRegistrationDetails: any = this.registerForm.value;
    this.appService.register(this.api.authAPIs.register, userRegistrationDetails)
      .pipe(first())
      .subscribe(res => {
        if (res.userId) {
          this.router.navigate(['/login']);
          this.appService.setRegisteredUserObs(true);
        }

      }, (err) => {
        console.log('Error', err);
        this.serverErrorMessage = err;
      });
  }

  signIn(){
  this.router.navigate(['login']);
  }
}