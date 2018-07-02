import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// query string is used in college component to run queries
export class FilterService {
  queryString: string = "";

  constructor( ) {

   }

  AddQuery(query: string){
    this.queryString += query;
  }

  RemoveQuery(query: string){
    this.queryString.replace(query, "");
  }

  ClearQueryString(){
    this.queryString = "";
  }






}
