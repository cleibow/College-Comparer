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

  colleges: School[]


  ngOnInit() {
    this.getColleges();

  }

  getColleges(){
    this._collegeService.getAllSchools(this._filterService.queryString)
        .subscribe(
          (res) => {

            console.log(res['results'][0]);
            this.colleges = this._collegeService.convertDataToModel(res['results']);
        },
          (error) => {
            console.log(error);
          }
        )
  }


}
