import { FilterService } from './../filter.service';
import { School } from './../models/school';
import { CollegeService } from './../college.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  constructor(private _collegeService: CollegeService, private _filterService: FilterService) { }

  colleges: School[] = this._collegeService.schools



  ngOnInit() {
    this.getColleges();
    // console.log(this.colleges[1])

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
