import { Component, OnInit } from '@angular/core';

import { AsyncPipe, DatePipe, NgClass, NgIf, NgStyle, TitleCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, RouterLink, NgIf, AsyncPipe],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  userHasSnaped!: boolean;
  snapButtonText!: "Oh Snap !" | "Oops unSnap !";
  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.prepareInterface()
    this.getFaceSnap()

  }

  onSnap(snapFaceId: number): void {
    this.userHasSnaped = !this.userHasSnaped;
    if (this.userHasSnaped) this.snap(snapFaceId)
    else this.unSnap(snapFaceId)
  }
  snap(snapFaceId: number): void {
    this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(snapFaceId, 'snap').pipe(
      tap(() => {
        this.snapButtonText = "Oops unSnap !"
      })
    )


  }
  unSnap(snapFaceId: number): void {
    this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(snapFaceId, 'unsnap').pipe(
      tap(() => {
        this.snapButtonText = "Oh Snap !"
      })
    )


  }
  private getFaceSnap(): void {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId)
    this.faceSnap$.subscribe((faceSnap) => {
      this.faceSnap = faceSnap

    })
  }
  private prepareInterface(): void {
    this.userHasSnaped = false;
    this.snapButtonText = "Oh Snap !"

  }

}



