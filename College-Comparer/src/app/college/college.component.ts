import { School } from './../models/school';
import { CollegeService } from './../college.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  constructor(private _collegeService: CollegeService) { }

  colleges: School[]


  ngOnInit() {
    this.getColleges();

  }

  getColleges(){
    this._collegeService.getAllSchools('&_fields=2015.student.size,2015.cost.tuition.program_year,school.city,school.men_only,school.name,school.online_only,school.school_url,school.state,school.religious_affiliation,school.women_only,school.zip')
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
