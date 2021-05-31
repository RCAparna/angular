import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//app imports
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AppService {
    public  userRegistered: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    getUserValue(){
        return this.currentUserSubject.asObservable();
    }
    getRegisteredUserObs(){
        return this.userRegistered.asObservable();
    }

    setRegisteredUserObs(isRegistered: boolean) {
        this.userRegistered.next(isRegistered);
    }
    
    login(URL: string, userDetails: any) {
        return this.http.post<any>(URL,
            {
                email: userDetails.username,
                password: userDetails.password
            })
            .pipe(map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }
    register(URL: string, userDetails: any): Observable<any> {
        return this.http.put<any>(URL,
            {
                email: userDetails.email,
                password: userDetails.password,
                username: userDetails.username
            })
            .pipe(map(user => {
                return user;
            }));
    }
    createDashboard(URL: string, userDashboardDetails: any): Observable<any> {
        return this.http.post<any>(URL,
            {
                description: userDashboardDetails.description,
                amount: userDashboardDetails.amount,
                teammember: userDashboardDetails.teammember,
                role: userDashboardDetails.role
            })
            .pipe(map(dashboard => {
                return dashboard;
            }));
    }
    retreiveUserDashBoardDetails(URL: string): Observable<any> {
        return this.http.get<any>(URL + '?userId=' + this.currentUserValue['userId'])
            .pipe(map(dashboard => {
                return dashboard;
            }));
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        return;
    }
}