import { SearchParameters } from './models/search-parameters';
import { Injectable } from '@angular/core';
import { School } from './models/school';
import { CollegeService } from './college.service';
import { Subject } from '../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
// query string is used in college component to run queries
export class FilterService {
  queryString: string = "";

  searchParameters = new Subject<SearchParameters>();

  constructor() {

   }
   // update search parameters
   updateParameters(newParameters: SearchParameters){
     this.searchParameters.next(newParameters);
   }

  // method to be called by college component 
  

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
