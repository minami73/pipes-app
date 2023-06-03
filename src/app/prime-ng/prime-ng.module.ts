import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';


// Solo se va a ocupar para exportar lo que se va a necesitar de PrimeNG
@NgModule({
    declarations: [],
    exports: [
        MenuModule,
        MenubarModule
    ]
})
export class PrimeNgModule { }
