import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AppModule } from '@app/app.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '@app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LogInComponent } from '../log-in/log-in.component';
import { RegisterComponent } from '../register/register.component';
import { AboutComponent } from '../about/about.component';
import { TeamComponent } from '../team/team.component';
import { LogoutComponent } from '../logout/logout.component';
import { REST_API } from '@app/constants/REST_API';
import { AppService } from '@app/services/AppService';
import { BehaviorSubject, of } from 'rxjs';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '@app/models/user';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';



const retDashResp = {
  "message": "Dashboard Details fetched",
  "dashboard": [{
    "_id": "61155f89ef38bb00041c64fd",
    "description": "amount: 12\ndescription: \" Aparna ",
    "amount": "12",
    "teammember": "admin",
    "role": "Developer",
    "creator": "61155eeaef38bb00041c64fc",
    "createdAt": "2021-08-12T17:51:05.095Z",
    "updatedAt": "2021-08-12T17:51:05.095Z",
    "__v": 0
  }],
  "user": {
    "username": "ARC",
    "_id": "61155eeaef38bb00041c64fc",
    "lastlogin": "2021-08-12T17:51:05.483Z"
  }
}

class MockService {
  public retreiveUserDashBoardDetails(): any {
    return of(retDashResp);
  }
}

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule,
    platformBrowserDynamicTesting());
});

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;
  let appService: AppService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let user;
  let router: Router;
  let mockService;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [LogInComponent, DashboardComponent, RegisterComponent, AboutComponent, TeamComponent, LogoutComponent],
      imports: [FormsModule,
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [REST_API, { provide: AppService, useClass: MockService, useValue: mockService }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    appService = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    router = TestBed.inject(Router);
    // mockService = jasmine.createSpyObj(['login']);
    // mockService.login.and.returnValue(of(user));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component created', () => {
    expect(component).toBeTruthy();
  });
  it('getTeamDetails', () => {
    let mySpy = spyOn(appService, 'retreiveUserDashBoardDetails').and.callThrough(); //callThrough()
    spyOn(component, 'getTeamDetails').and.callThrough(); //callThrough()
    component.getTeamDetails();
    expect(component.getTeamDetails).toHaveBeenCalled();
    expect(appService).toBeDefined();
    expect(mySpy).toBeDefined();
    expect(mySpy).toHaveBeenCalledTimes(1);

  });
});
