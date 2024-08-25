import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApplicationUser } from '../../models/application-user.model';
import { BaseResponse } from '../../models/shared/base-response';
import { RequestParameter } from '../../models/shared/request-parameter';
import { User } from '../../models/user.model';
import { BaseHttpClientServiceService } from '../shared/base-http-client-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl?: string;
  private url?: string = '';


  constructor(private http: HttpClient, private httpService: BaseHttpClientServiceService) {
    this.baseUrl = environment.apiURL + '/'
  }


  public Authenticate(email: string, password: string): Observable<BaseResponse<string>> {
    console.log("Authenticate service started")
    this.url = this.baseUrl + 'Account/authenticate'
    return this.http.post<BaseResponse<string>>(`${this.url}`, { email: email, password: password }, {
    });
  }

  public ResetPassword(email: string, password: string, confirmPassword: string, token: string): Observable<BaseResponse<string>> {
    this.url = this.baseUrl + 'Account/reset-password'
    return this.http.post<BaseResponse<string>>(`${this.url}`, { email: email, password: password, confirmPassword: confirmPassword, token: token }, {
    });
  }

  public ChangePassword(currentPassword: string, newPassword: string): Observable<BaseResponse<string>> {
    this.url = this.baseUrl + 'Account/change-password'
    return this.http.post<BaseResponse<string>>(`${this.url}`, { currentPassword: currentPassword, newPassword: newPassword }, {
    });
  }

  public ForgotPassword(email: string,): Observable<BaseResponse<string>> {
    this.url = this.baseUrl + 'Account/forgot-password'
    return this.http.post<BaseResponse<string>>(`${this.url}`, { email: email }, {
    });
  }


  getAllUsersPagedResponse(reqParams?: RequestParameter, groupId?: string): Observable<BaseResponse<ApplicationUser[]>> {
    this.httpService.mapURLPathWithoutAppVersion('Account/Users');
    reqParams = reqParams !== undefined ? reqParams! : new RequestParameter();
    if (groupId !== undefined) reqParams.optionalParams.push({ param: 'groupId', value: groupId })
    return this.httpService.getAll<ApplicationUser[]>(reqParams);
  }

  addNewUser(user: User): Observable<BaseResponse<string>> {
    console.log("Authenticate service add new user started")
    this.httpService.mapURLPathWithoutAppVersion('Account/User');
    return this.httpService.post<User, string>(user);

  }

  UpdateUser(id: string, user: User): Observable<BaseResponse<string>> {
    this.httpService.mapURLPathWithoutAppVersion('Account/User');
    return this.httpService.put<User, string>(id, user);

  }
  getUserById(id: string): Observable<BaseResponse<ApplicationUser>> {
    this.httpService.mapURLPathWithoutAppVersion('Account/User');
    return this.httpService.getById<ApplicationUser>(id);

  }

  isAuthenticated(): Observable<boolean> {
    // Check authentication status here
    // For example, you can check if token exists in local storage or not
    const token = sessionStorage.getItem('token');
    return of(!!token); // Convert boolean to observable
  }

}
