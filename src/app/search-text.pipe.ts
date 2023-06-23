import { Pipe, PipeTransform } from '@angular/core';
import { interval } from 'rxjs';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {
  transform(value: any, args?:any): any {
    
      if(!value) return null;
      if(!args) return value;
      const minute = 1000 * 60;

      args = args.toLowerCase();
    
      return value.filter((item :any)=>{
        return JSON.stringify(item).toLowerCase().includes(args);
      })
  }
}
