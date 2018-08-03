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
  FilterParameters(filterObject: SearchParameters,  colleges: School[]): School[]{
    if(filterObject.Name){
      colleges.filter(c => c.Name === filterObject.Name);
      // prints properly filtered college
      console.log(colleges.filter(c => c.Name === filterObject.Name)[0].State);
      // finds college correctly
      console.log(colleges.find(c => c.Name === "The Medical Arts School").City);
      // prints all colleges and is incorrect
      console.log("the colleges: " + colleges[0].Name);
      // properly finds the name of the filtered object
      console.log(filterObject.Name);
      // indicates we hit the filter method
      console.log("filtered by name");
      return colleges;
    }
    if(filterObject.City){
      colleges.filter(c => c.City === filterObject.City);
    }
    if(filterObject.State){
      colleges.filter(c => c.State === filterObject.State);
    }
    if(filterObject.Zip){
      colleges.filter(c => c.Zip === filterObject.Zip);
    }
    if(filterObject.MinTuition && filterObject.MaxTuition){
      colleges.filter(c => c.Tuition <= filterObject.MaxTuition && c.Tuition >= filterObject.MinTuition);
    }
    if(filterObject.MinSize && filterObject.MaxSize){
      colleges.filter(c => c.Size <= filterObject.MaxSize && c.Tuition >= filterObject.MinSize);
    }
    if(filterObject.YearFounded){
      colleges.filter(c => c.YearFounded === filterObject.YearFounded);
    }
    if(filterObject.Women_only){
      colleges.filter(c => c.Women_only === 1);
    }
    if(filterObject.Men_only){
      colleges.filter(c => c.Men_only === 1);
    }
    return colleges;
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
