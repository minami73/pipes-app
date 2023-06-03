import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';


// Solo se va a ocupar para exportar lo que se va a necesitar de PrimeNG
@NgModule({
  declarations: [],
  exports:[
    MenuModule
  ]
})
export class PrimeNgModule { }
