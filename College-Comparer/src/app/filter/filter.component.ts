import { SearchParameters } from './../models/search-parameters';
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
  filterObject: SearchParameters;



  constructor( private _filterService: FilterService, private _collegeService: CollegeService ) { }

  ngOnInit() {
    console.log("hit the filter")
    this.filterObject = {
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

    // this.Update();
  }

  Update(){
    // updates the search parameter object in the filter service
 
    this._filterService.updateParameters(this.filterObject);


  }






}
