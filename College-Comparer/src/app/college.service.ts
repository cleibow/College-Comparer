import { School } from './models/school';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  schools: School[];

  constructor(private _httpClient: HttpClient) { }
  private apiKey: string = "&api_key=W1kRyK3ESFntr2k6Ku6eI6eeLFxL4klPGGs0nG4B";
  url: string = "http://api.data.gov/ed/collegescorecard/v1/schools.json";

  getSchools(): Observable<School[]>{
    return this._httpClient.get(this.url + '?school.name__not=""' + this.apiKey)
            .map((response: Response) => response.json())
            .catch(Error);
  }







}
