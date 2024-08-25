import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../../models/shared/base-response';
import { RequestParameter } from '../../models/shared/request-parameter';


@Injectable({
  providedIn: 'root'
})
export class BaseHttpClientServiceService {

  private baseUrl?: string;
  private url?: string = '';


  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiURL + '/' + environment.appVersion + '/'
  }

  mapURLPath(path: string) {
    this.url = this.baseUrl + path;
  }
  mapURLPathWithoutAppVersion(path: string) {
    this.url = environment.apiURL + '/' + path;
  }


  public get populateHttpHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  public setHttpParams(reqParam: RequestParameter) {
    console.log(reqParam)
    let param = new HttpParams()
      .set('offset', reqParam.offset!)
      .set('count', reqParam.count!)
      .set('Sort', reqParam.sort!)
      .set('Filter', reqParam.filter!)
    reqParam.optionalParams.forEach(e => {
      if (e.value !== undefined) param = param.append(e.param, e.value)
    })
  console.log(param)
    return param;
  }


  public getAll<T>(headerParam: RequestParameter): Observable<BaseResponse<T>> {
    const headers = this.populateHttpHeaders;
    const params = this.setHttpParams(headerParam);
    if (headerParam.filter !== undefined && headerParam.filter !== '' && headerParam.filter != null) {
      params.set('filter', headerParam.filter!);
    }
    return this.http.get<BaseResponse<T>>(`${this.url}`, {
      headers: headers,
      params: params
    });
  }

  public getById<T>(id?: string): Observable<BaseResponse<T>> {
    const headers = this.populateHttpHeaders;
    return this.http.get<BaseResponse<T>>(`${this.url}/${id}`, {
      headers: headers,
    });
  }

  public post<Req, Res>(request: Req): Observable<BaseResponse<Res>> {
    console.log("base service post started")
    const headers = this.populateHttpHeaders;
    return this.http.post<BaseResponse<Res>>(`${this.url}`, request, {
      headers: headers,
    });
  }

  public put<Req, Res>(id?: string, request?: Req): Observable<BaseResponse<Res>> {
    const headers = this.populateHttpHeaders;
    return this.http.put<BaseResponse<Res>>(`${this.url}/${id}`, request, {
      headers: headers
    });
  }

  public searchByHttpParams<Res>(httpParams: HttpParams): Observable<BaseResponse<Res>> {
    const headers = this.populateHttpHeaders;
    headers.set('Content-Type', 'application/json');
    return this.http.get<BaseResponse<Res>>(`${this.url}`, {
      headers: headers,
      params: httpParams,
    });
  }

  public deleteById<Res>(id?: string,): Observable<BaseResponse<Res>> {
    const headers = this.populateHttpHeaders;
    return this.http.delete<BaseResponse<Res>>(`${this.url}/${id}`, { headers: headers });
  }

  public get<T>(roomId: number = 0): Observable<BaseResponse<T>> {
    const headers = this.populateHttpHeaders;
    return this.http.get<BaseResponse<T>>(`${this.url}`, {
      headers: headers,
      params: new HttpParams()
        .set('roomId', roomId)
    });
  }
}

