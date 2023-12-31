import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any, sortBy: string, order?: string): any[] {
    const sortOrder =  'asc'; 
   
     return orderBy(array, [sortBy], [sortOrder]);
     }

}


