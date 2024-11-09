import { Component, Input, OnInit } from '@angular/core';

import { AsyncPipe, DatePipe, NgClass, NgIf, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe,RouterLink,NgIf,AsyncPipe],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  faceSnap$!:Observable<FaceSnap>;
  userHasSnaped!: boolean;
  snapButtonText!: "Oh Snap !" | "Oops unSnap !";
  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.prepareInterface()
    this.getFaceSnap()

  }

  onSnap(): void {
    this.userHasSnaped = !this.userHasSnaped;
    if (this.userHasSnaped) this.snap()
    else this.unSnap()
  }
  snap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
    this.snapButtonText = "Oops unSnap !"
  }
  unSnap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
    this.snapButtonText = "Oh Snap !"
  }
  private getFaceSnap(): void {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId)
    this.faceSnap$.subscribe((faceSnap) => {
      this.faceSnap = faceSnap;
    })
  }
  private prepareInterface(): void {
    this.userHasSnaped = false;
    this.snapButtonText = "Oh Snap !"

  }

}



