import { FilterService } from './../filter.service';
import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
// component manipulates query string in filter service
export class FilterComponent implements OnInit {

  opened:boolean;

  constructor( private _filterService: FilterService ) { }

  ngOnInit() {
    console.log("hit the filter")
  }

  AddQueryToString(query: string){
    this._filterService.AddQuery(query)
    console.log(this._filterService.queryString);
  }

  RemoveQueryFromString(query: string){
    this._filterService.RemoveQuery(query)
  }

  ClearQueryString(){
    this._filterService.ClearQueryString();
  }



}
