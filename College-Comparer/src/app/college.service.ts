import { element } from 'protractor';
import { School } from './models/school';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CollegeService  {


  schools: School[];
  queryString: string = "";
  opened: boolean;




  constructor(private _httpClient: HttpClient) { }
  private apiKey: string = "&api_key=W1kRyK3ESFntr2k6Ku6eI6eeLFxL4klPGGs0nG4B";
  private url: string = "https://api.data.gov/ed/collegescorecard/v1/schools.json?";
  private fields: string = '_fields=2015.student.size,2015.cost.tuition.program_year,school.city,school.men_only,school.name,school.online_only,school.school_url,school.state,school.religious_affiliation,school.women_only,school.zip'

  getAllSchools(query: string): Observable<School[]>{
    return this._httpClient.get<School[]>(this.url + query +this.fields + this.apiKey)
  }

  convertDataToModel( jsonSchools: School[]):School[]{
    let modelSchools: School[] = [];
    jsonSchools.forEach(element => {

      let newSchool = new School()
      newSchool.Name = element['school.name'];
      newSchool.City = element['school.city'];
      newSchool.State = element['school.state'];
      newSchool.Zip = element['school.zip'];
      newSchool.Tuition = element['cost.tuition.program_year'];
      newSchool.Size = element['student.size'];
      newSchool.YearFounded = element[''];
      newSchool.Women_only = element['school.women_only'];
      newSchool.Men_only = element['school.men_only'];
      newSchool.Religious_affiliation = element['school.religious_affiliation'];
      newSchool.School_url = element['school.school_url'];

      modelSchools.push(newSchool);

    });
    return modelSchools;
  }













}
