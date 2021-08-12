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

const resp = { "message": "User successfully created", "userId": "61156a923ac77300043062db" };

class MockService {
  public register(): any {
    return of(resp);
  }
}

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule,
    platformBrowserDynamicTesting());
});

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
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
    fixture = TestBed.createComponent(RegisterComponent);
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
  it('should call registerUser', () => {
    let mySpy = spyOn(appService, 'register').and.callThrough(); //callThrough()
    spyOn(component, 'registerUser').and.callThrough(); //callThrough()
    component.registerUser();
    expect(component.registerUser).toHaveBeenCalled();
    expect(appService).toBeDefined();
    expect(mySpy).toBeDefined();
    expect(mySpy).toHaveBeenCalledTimes(1);

  });
  it('should route to login ', fakeAsync(() => {
    const spy = spyOn(router, 'navigate');
    component.signIn();
    expect(spy).toHaveBeenCalledWith(['login']);
  }));
});
