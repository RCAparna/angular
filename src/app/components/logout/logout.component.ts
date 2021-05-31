import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AppService } from '../../services/AppService';

@Component({
    selector: 'logout',
    template: `Logout`
})
export class LogoutComponent implements OnInit {
    pageTitle: string = 'Log Out'
    constructor(
        public appService: AppService,
        public router: Router) { }
    ngOnInit(): void {
        this.appService.logout();
    }
}