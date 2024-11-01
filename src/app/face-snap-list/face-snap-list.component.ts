import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap';
import {interval ,Subject,take,takeUntil,tap} from 'rxjs'


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})



export class FaceSnapListComponent implements OnInit,OnDestroy {
  constructor(private faceSnapsService: FaceSnapsService) { }
  faceSnaps!: FaceSnap[];
  private destroy$! : Subject<boolean>;
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps()
    this.destroy$= new Subject<boolean>();
    interval(1000).pipe(
      // take(5),
      tap(console.log),
      takeUntil(this.destroy$)
    ).subscribe()
  }
  ngOnDestroy(): void {
      this.destroy$.next(true);
  }

}
