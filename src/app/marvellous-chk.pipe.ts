import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: any, ...param: any) :any
  {
    value = 11;
    if(param == "Perfect")
    {
      let sum : number = 0;
      for(let i = 0; i < value ;i++)
      {
        if(value % i ==0)
          sum += i;
      }
      if(sum == value)
        return "It is Perfect Number : " + value;
    }
    if(param == "Even")
    {
       if(value % 2 == 0)
       {
         return "It is Even Number : " + value;
       }
    }
    if(param == "Odd")
    {
      if(value % 2 !== 0)
       {
         return "It is Odd Number : " + value;
       }
    }
    if(param == "Prime")
    {
      let f ;
      for(let i = 2; i <= value/2; i++)
      {
          if(value % i == 0)
          {
              f = 1;
          }
      }
      if(f == 1)
        return "It is not Prime Number : " + value;
      else
        return "It is Prime Number : " + value;  
    }
  }

}

