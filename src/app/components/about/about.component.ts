import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REST_API } from '../../constants/REST_API';
import { AppService } from '../../services/AppService';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  serverErrorMessage: string = '';
  aboutData: any;
  constructor(
    public appService: AppService,
    public api: REST_API,
    public router: Router) { }
  ngOnInit() {
    this.getAboutDetails();
  }
  getAboutDetails() {
    this.appService.retreiveUserDashBoardDetails(this.api.dashboard.retreiveUserDashBoardDetails).subscribe(res => {
      this.aboutData = res.dashboard;
    }, (err) => {
      console.log('Error', err);
      this.serverErrorMessage = err;
    })
  }
}

