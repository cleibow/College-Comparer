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
    console.log('am submitting');
    if(this.filterObject.Name){
      console.log(this.filterObject.Name);
      this._filterService.search_parameters.Name = this.filterObject.Name;
      console.log(this._filterService.search_parameters.Name)

    }
    if(this.filterObject.City){
      this.filterObject.City = this.filterObject.City;
      console.log(this.filterObject.City);

    }
    if(this.filterObject.State){
      this._filterService.search_parameters.State = this.filterObject.State;
    }
    if(this.filterObject.Zip){
      this._filterService.search_parameters.Zip = this.filterObject.Zip;
    }
    if(this.filterObject.MinTuition){
      this._filterService.search_parameters.MinTuition = this.filterObject.MinTuition;
    }
    if(this.filterObject.MaxTuition){
      this._filterService.search_parameters.MaxTuition = this.filterObject.MaxTuition;
    }
    if(this.filterObject.MinSize){
      this._filterService.search_parameters.MinSize = this.filterObject.MinSize;
    }
    if(this.filterObject.MaxSize){
      this._filterService.search_parameters.MaxSize = this.filterObject.MaxSize;
    }
    if(this.filterObject.YearFounded){
      this._filterService.search_parameters.YearFounded = this.filterObject.YearFounded;
    }
    if(this.filterObject.Women_only){
      this._filterService.search_parameters.Women_only = true;
    }
    if(this.filterObject.Men_only){
      this._filterService.search_parameters.Men_only = true;
    }
    this._filterService.FilterParameters();

    // filter the school array in the service based on the filter object

  }






}
