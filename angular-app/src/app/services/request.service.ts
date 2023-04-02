import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class RequestService {
  constructor(
    private _httpClient: HttpClient
  ) { }

  request(message: any): Observable<any> {
    return this._httpClient.post<any>('/api/request', message);
  }
}
