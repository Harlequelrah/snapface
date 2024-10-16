import { Component, Input, OnInit } from '@angular/core';
import FaceSnap from '../models/face-snap';
import { NgClass, NgStyle, TitleCasePipe , DatePipe, DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';
import FaceSnapsService from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,NgClass,TitleCasePipe,DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  userHasSnaped!: boolean;
  snapButtonText!: "Oh Snap !" | "Oops unSnap !";
  constructor(private faceSnapsService: FaceSnapsService)
  {

  }
  ngOnInit(): void {
    this.userHasSnaped = false;
    this.snapButtonText = "Oh Snap !"
  }

  onSnap(): void {
    this.userHasSnaped = !this.userHasSnaped;
    if (this.userHasSnaped) this.snap()
    else this.unSnap()
  }
  snap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap')
    this.snapButtonText = "Oops unSnap !"
  }
  unSnap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
    this.snapButtonText = "Oh Snap !"
  }

}



