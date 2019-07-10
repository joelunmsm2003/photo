import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if(!items || !filter) {
      return items;
    }


    console.log('sss',filter)
    // To search values only of "name" variable of your object(item)
    //return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);

    // To search in values of every variable of your object(item)
    return items.filter(item => 

    	JSON.stringify(item.edad).toLowerCase().indexOf(filter.toLowerCase()) !== -1

    	);
  }

}