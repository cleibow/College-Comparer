import { School } from './../models/school';
import { states } from './../data/states';
import { FilterService } from './../filter.service';
import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
// component manipulates query string in filter service
export class FilterComponent implements OnInit {

  opened:boolean;




  constructor( private _filterService: FilterService, private _collegeService: CollegeService ) { }

  ngOnInit() {
    console.log("hit the filter")
    this._filterService.search_parameters = {
      Name: null,
      City: null,
      State: null,
      Zip: null,
      MinTuition: null,
      MaxTuition: null,
      MinSize: null,
      MaxSize: null,
      YearFounded: null,
      Women_only: null,
      Men_only: null,
      Religious_affiliation: null,
      School_url: null
    }

    this._filterService.FilterParameters();
  }

  // AddQueryToString(query: string){
  //   this._filterService.AddQuery(query)
  //   console.log(this._filterService.queryString);
  // }

  // RemoveQueryFromString(query: string){
  //   this._filterService.RemoveQuery(query)
  // }

  // ClearQueryString(){
  //   this._filterService.ClearQueryString();
  // }



}
