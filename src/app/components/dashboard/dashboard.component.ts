import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { REST_API } from '../../constants/REST_API';
import { AppService } from '../../services/AppService';
import { first } from 'rxjs/operators';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalAmount: number =  0
  dasboardSuccess: string = '';
  serverErrorMessage: string = '';
  dashboardData: any;
  user: any;
  constructor(
    public appService: AppService,
    public api: REST_API,
    public router: Router) { }
  dashboardFormFields = { description: '', amount: '', teammember: '', role: '' };
  dashboardForm: FormGroup;

  ngOnInit(): void {
    this.dashboardForm = new FormGroup(
      {
       
        'description': new FormControl(this.dashboardFormFields.description, [
          Validators.required, Validators.min(100), Validators.max(100)
        ]),
        'amount': new FormControl(this.dashboardFormFields.amount, [
          Validators.required
        ]),
        'teammember': new FormControl(this.dashboardFormFields.teammember, [
          Validators.required
        ]),
        'role': new FormControl(this.dashboardFormFields.role, [
          Validators.required
        ])
      }

    );

    this.retreiveUserDashBoardDetails();
  }
  get description() { return this.dashboardForm.get('description'); }
  get amount() { return this.dashboardForm.get('amount'); }
  get teammember() { return this.dashboardForm.get('teammember'); }
  get role() { return this.dashboardForm.get('role'); }

  retreiveUserDashBoardDetails() {
    this.appService.retreiveUserDashBoardDetails(this.api.dashboard.retreiveUserDashBoardDetails).subscribe(res => {
      this.dasboardSuccess = res.message;
      this.dashboardData = res.dashboard;
      this.user = res.user;
      this.totalAmount = 0;
     this.dashboardData.forEach(element => {
       this.totalAmount += parseInt(element.amount);
      });
    }, (err) => {
      console.log('Error', err);
      this.serverErrorMessage = err;
    })
  }
  createdashBoard() {
    let userDashboardDetails: any = this.dashboardForm.value;
    this.appService.createDashboard(this.api.dashboard.createDashboard, userDashboardDetails)
      .pipe(first())
      .subscribe(res => {
        this.dasboardSuccess = res.message;
        this.retreiveUserDashBoardDetails();
        this.dashboardForm.reset();
      }, (err) => {
        console.log('Error', err);
        this.serverErrorMessage = err;
      });
  }

}