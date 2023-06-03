import { Component } from '@angular/core';

@Component({
    selector: 'app-basics-page',
    templateUrl: './basics-page.component.html',
    styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
    public nameLower: string = 'josue';
    public nameUpper: string = 'JOSUE';
    public fullName: string = 'jOsUE caMAcHo';

    public customDate: Date = new Date();
}
