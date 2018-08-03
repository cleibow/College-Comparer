import { FilterService } from './../filter.service';
import { School } from './../models/school';
import { CollegeService } from './../college.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../../node_modules/rxjs';
import { SearchParameters } from 'src/app/models/search-parameters';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  constructor(private _collegeService: CollegeService, private _filterService: FilterService) { }

  colleges: School[] = this._collegeService.schools
  subscription: Subscription;
  searchedParameters: SearchParameters;

  testData: string[] = ['apple', 'banana', 'orange', 'grape'];



  ngOnInit() {
    this.getColleges();
    console.log(this.colleges[1])
    this.subscription = this._filterService.searchParameters
      .subscribe
        (params => {
        this.searchedParameters = params;
        },
        ( error => {
          console.log(error);
        })
    )
    console.log(this.testFilter(this.testData));
  

  }

  testFilter(data: string[]): string[]{
    return data.filter(d => d.charAt(1) === 'o');
  }

  getColleges(){
    this._collegeService.getAllSchools(this._filterService.queryString)
        .subscribe(
          (res) => {

            this._collegeService.schools =  this._collegeService.convertDataToModel(res['results']);
            // so values are stored on init
            console.log(this._collegeService.schools[0]);

            this.colleges = this._collegeService.schools
            // save data into service

        },
          (error) => {
            console.log(error);
          }
        )
      }

}
