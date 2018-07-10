import { SearchParameters } from './models/search-parameters';
import { Injectable } from '@angular/core';
import { School } from './models/school';
import { CollegeService } from './college.service';


@Injectable({
  providedIn: 'root'
})
// query string is used in college component to run queries
export class FilterService {
  queryString: string = "";
  search_parameters: SearchParameters;


  constructor( private _collegeService: CollegeService) {

   }

  FilterParameters(){
    if(this.search_parameters.Name){
      this._collegeService.schools.filter(c => c.Name === this.search_parameters.Name);
    }
    if(this.search_parameters.City){
      this._collegeService.schools.filter(c => c.City === this.search_parameters.City);
    }
    if(this.search_parameters.State){
      this._collegeService.schools.filter(c => c.State === this.search_parameters.State);
    }
    if(this.search_parameters.Zip){
      this._collegeService.schools.filter(c => c.Zip === this.search_parameters.Zip);
    }
    if(this.search_parameters.MinTuition && this.search_parameters.MaxTuition){
      this._collegeService.schools.filter(c => c.Tuition <= this.search_parameters.MaxTuition && c.Tuition >= this.search_parameters.MinTuition);
    }
    if(this.search_parameters.MinSize && this.search_parameters.MaxSize){
      this._collegeService.schools.filter(c => c.Size <= this.search_parameters.MaxSize && c.Tuition >= this.search_parameters.MinSize);
    }
    if(this.search_parameters.YearFounded){
      this._collegeService.schools.filter(c => c.YearFounded === this.search_parameters.YearFounded);
    }
    if(this.search_parameters.Women_only){
      this._collegeService.schools.filter(c => c.Women_only === 1);
    }
    if(this.search_parameters.Men_only){
      this._collegeService.schools.filter(c => c.Men_only === 1);
    }
  }




  // AddQuery(query: string){
  //   this.queryString += query;
  // }

  // RemoveQuery(query: string){
  //   this.queryString.replace(query, "");
  // }

  // ClearQueryString(){
  //   this.queryString = "";
  // }






}
