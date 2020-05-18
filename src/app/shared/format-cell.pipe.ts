import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Pipe({ name: 'formatCell' })
@Injectable({
  providedIn: 'root'
})
export class FormatCellPipe implements PipeTransform {
    constructor() { }
    transform(value: any, format: string) {
        if ( value === undefined ) {
            return 'Click to add detail';
        }

        return value;
    }
}
