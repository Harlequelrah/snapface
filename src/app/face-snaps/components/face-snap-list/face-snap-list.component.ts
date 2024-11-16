import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})



export class FaceSnapListComponent implements OnInit {
  constructor(private faceSnapsService: FaceSnapsService) { }
  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;
  private destroy$!: Subject<boolean>;
  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getFaceSnaps()
    // this.destroy$= new Subject<boolean>();
    // interval(1000).pipe(
    //   // take(5),
    //   tap(console.log),
    //   takeUntil(this.destroy$)
    // ).subscribe()
  }
  // ngOnDestroy(): void {
  //     this.destroy$.next(true);
  // }

}
