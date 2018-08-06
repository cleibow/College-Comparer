import { Pipe, PipeTransform, OnInit } from '@angular/core';
import { Subscription } from '../../node_modules/rxjs';
import { SearchParameters } from './models/search-parameters';
import { School } from './models/school';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  filteredColleges: School[];




  transform(value: any, args?: SearchParameters): any {
    console.log(value);
    if(value === null){
      return [];
    }
  
    if(args!= undefined){
      this.filteredColleges = value
      if(args.Name){
        this.filteredColleges =  this.filteredColleges.filter(c => c.Name === args.Name);
        // prints properly filtered college
        console.log(this.filteredColleges[0].State);
       

      }
      if(args.City){
        this.filteredColleges = this.filteredColleges.filter(c => c.City === args.City);
      }
      if(args.State){
        this.filteredColleges = this.filteredColleges.filter(c => c.State === args.State);
      }
      if(args.Zip){
        this.filteredColleges = this.filteredColleges.filter(c => c.Zip === args.Zip);
      }
      if(args.MinTuition && args.MaxTuition){
        this.filteredColleges = this.filteredColleges.filter(c => c.Tuition <= args.MaxTuition && c.Tuition >= args.MinTuition);
      }
      if(args.MinSize && args.MaxSize){
        this.filteredColleges = this.filteredColleges.filter(c => c.Size <= args.MaxSize && c.Tuition >= args.MinSize);
      }
      if(args.YearFounded){
        this.filteredColleges = this.filteredColleges.filter(c => c.YearFounded === args.YearFounded);
      }
      if(args.Women_only){
        this.filteredColleges = this.filteredColleges.filter(c => c.Women_only === 1);
      }
      if(args.Men_only){
        this.filteredColleges = this.filteredColleges.filter(c => c.Men_only === 1);
      }
      return this.filteredColleges;
      
    }
    return this.filteredColleges;
  }

}
