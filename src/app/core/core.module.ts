import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { httpInterceptorsProvider } from './interceptors';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    RouterOutlet
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
