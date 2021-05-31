import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/AppService';


@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(public router: Router, public appService: AppService) { }

    ngOnInit(){
    }
    logout() {
        this.appService.logout();
        this.appService.setRegisteredUserObs(false);
        this.router.navigate(['/login'])
    }
}