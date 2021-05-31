import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REST_API } from '../../constants/REST_API';
import { AppService } from '../../services/AppService';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  pageTitle: string = 'Meet the Team';
  serverErrorMessage: string = '';
  teamData: any;
  constructor(
    public appService: AppService,
    public api: REST_API,
    public router: Router) { }
  ngOnInit() {
    this.getTeamDetails();
  }
  getTeamDetails() {
    this.appService.retreiveUserDashBoardDetails(this.api.dashboard.retreiveUserDashBoardDetails).subscribe(res => {
      this.teamData = res.dashboard;
    }, (err) => {
      console.log('Error', err);
      this.serverErrorMessage = err;
    })
  }
}

