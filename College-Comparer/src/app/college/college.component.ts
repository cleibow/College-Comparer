import { FilterService } from './../filter.service';
import { School } from './../models/school';
import { CollegeService } from './../college.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../../node_modules/rxjs';
import { SearchParameters } from 'src/app/models/search-parameters';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css'],
  providers: [FilterPipe]
})
export class CollegeComponent implements OnInit {

  constructor(private _collegeService: CollegeService, private _filterService: FilterService, private _filterPipe: FilterPipe) { }

  colleges: School[];
  filteredColleges: School[];
  subscription: Subscription;
  searchedParameters: SearchParameters;




  ngOnInit() {
    
    this.getColleges();
    this.subscription = this._filterService.searchParameters
      .subscribe
        (params => {
        this.searchedParameters = params;
        this.filteredColleges = this._filterPipe.transform(this.colleges, this.searchedParameters);
        console.log(this.filteredColleges);
        },
        ( error => {
          console.log(error);
        })
    );

  

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  getColleges(){
    this._collegeService.getAllSchools(this._filterService.queryString)
        .subscribe(
          (res) => {
            console.log(res);

            this._collegeService.schools =  this._collegeService.convertDataToModel(res['results']);
            this.colleges = this._collegeService.schools;
            // save data into service

        },
          (error) => {
            console.log(error);
          }
        )
      }
  

}
