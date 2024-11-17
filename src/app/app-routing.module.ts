import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';




export const routes: Routes = [
  { path: 'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then((m) => (m.FaceSnapsModule)) },
  { path: '', component: LandingPageComponent },


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
    ,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
