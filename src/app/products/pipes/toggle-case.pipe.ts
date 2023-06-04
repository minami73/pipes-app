import { Pipe, PipeTransform } from '@angular/core';

// josue | toggleCase = JOSUE
// JOSUE | toggleCase = josue


@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

    transform(value: string, toUpper: boolean = false): string {

        return toUpper ? value.toUpperCase() : value.toLowerCase();
        
    }
}
