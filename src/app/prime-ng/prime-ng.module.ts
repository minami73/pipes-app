import { NgModule } from '@angular/core';
// import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

// Solo se va a ocupar para exportar lo que se va a necesitar de PrimeNG
@NgModule({
    declarations: [],
    exports: [
        // MenuModule,
        ButtonModule,
        CardModule,
        FieldsetModule,
        MenubarModule,
        PanelModule,
        ToolbarModule,
        TableModule
    ]
})
export class PrimeNgModule { }
