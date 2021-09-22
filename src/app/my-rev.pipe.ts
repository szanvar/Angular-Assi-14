import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string 
  {
     value = "Marvellous";
     let temp : string = "";
     for(let i = value.length - 1 ; i >= 0 ; i--)
     {
        temp += value[i];
     }
     return temp;
  }

}
