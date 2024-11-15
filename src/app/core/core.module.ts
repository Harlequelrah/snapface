import { CommonModule, registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { httpInterceptorsProvider } from './interceptors';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    ...httpInterceptorsProvider,
    {provide: LOCALE_ID, useValue: 'fr-FR' },
  ]
})
export class CoreModule {
}
