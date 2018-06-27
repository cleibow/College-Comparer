import { College } from './models/college';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  colleges: College[];

  constructor(private _httpClient: HttpClient) { }



}
