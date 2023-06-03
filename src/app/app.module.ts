import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

//Configuración del local de la app
import localeJa from '@angular/common/locales/ja';
import localeEsMx from '@angular/common/locales/es-MX';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsMx);
registerLocaleData(localeJa);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    providers: [
        {
            //Para establecer globalmente el locale zone para los pipes
            provide: LOCALE_ID, useValue: 'es-MX'
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
