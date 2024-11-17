import { AsyncPipe, CommonModule, DatePipe, NgClass, NgIf, NgStyle, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { FaceSnapRoutingModule } from './face-snap-routing.module';
import { ActivatedRoute, RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    FaceSnapComponent,
    SingleFaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapRoutingModule,
  ],
  exports: [
    CommonModule,
    FaceSnapComponent,
    SingleFaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent
  ],
  providers: [
    DatePipe,
    AsyncPipe,
    NgClass,
    NgIf,
    NgStyle,
    TitleCasePipe,
    NgClass,
    NgIf,
    NgStyle
  ]
})
export class FaceSnapsModule { }
