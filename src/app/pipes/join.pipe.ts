import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
name: 'join'
    })

    export class JoinPipe implements PipeTransform {
        
        transform(arr: Array<string>, start?: any, end?: any): string{
          
           let res = arr;
           if (start !== undefined){
               if(end !== undefined){
                   res = arr.slice (start-1, end -1);
               }
               else {
                   res = arr.slice (start-1, res.length);
               }
           }

            return res.join(', '); 
        }
    }