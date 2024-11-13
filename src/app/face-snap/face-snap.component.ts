import { Component, Input} from '@angular/core';


import { FaceSnap } from '../models/face-snap';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent  {
  @Input() faceSnap!: FaceSnap;
  constructor(private route: Router, private faceSnapsService: FaceSnapsService)
  {}
  viewFaceSnap(): void{
    this.route.navigateByUrl(`/facesnap/${this.faceSnap.id}`)
  }
  deleteFaceSnap(): void {
    this.faceSnapsService.deleteFaceSnap(this.faceSnap.id).pipe(
      tap(() => this.route.navigateByUrl(`/`))
    ).subscribe()

  }


}



