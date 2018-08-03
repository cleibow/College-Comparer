import { Pipe, PipeTransform, OnInit } from '@angular/core';
import { Subscription } from '../../node_modules/rxjs';
import { SearchParameters } from './models/search-parameters';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {



  transform(value: any, args?: SearchParameters): any {
    if(value === null){
      return [];
    }
    if(args){
      if(args.Name){
        value.filter(c => c.Name === args.Name);
        // prints properly filtered college
        console.log(value.filter(c => c.Name === args.Name)[0].State);
        // finds college correctly
        console.log(value.find(c => c.Name === "The Medical Arts School").City);
        // prints all value and is incorrect
        console.log("the value: " + value[0].Name);
        // properly finds the name of the filtered object
        console.log(args.Name);
        // indicates we hit the filter method
        console.log("filtered by name");
        return value;
      }
      if(args.City){
        value.filter(c => c.City === args.City);
      }
      if(args.State){
        value.filter(c => c.State === args.State);
      }
      if(args.Zip){
        value.filter(c => c.Zip === args.Zip);
      }
      if(args.MinTuition && args.MaxTuition){
        value.filter(c => c.Tuition <= args.MaxTuition && c.Tuition >= args.MinTuition);
      }
      if(args.MinSize && args.MaxSize){
        value.filter(c => c.Size <= args.MaxSize && c.Tuition >= args.MinSize);
      }
      if(args.YearFounded){
        value.filter(c => c.YearFounded === args.YearFounded);
      }
      if(args.Women_only){
        value.filter(c => c.Women_only === 1);
      }
      if(args.Men_only){
        value.filter(c => c.Men_only === 1);
      }
      return value;
      
    }
    return value;
  }

}
