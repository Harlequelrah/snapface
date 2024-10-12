import { Component, Input, OnInit } from '@angular/core';
import FaceSnap from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  isSnaped!: boolean;
  snapButtonText!: "Oh Snap !" | "Oops unSnap !";
  ngOnInit(): void {
    this.isSnaped = false;
    this.snapButtonText = "Oh Snap !"
  }

  onSnap(): void {
    this.isSnaped = !this.isSnaped;
    if (this.isSnaped) this.snap()
    else this.unSnap()
  }
  snap(): void {
    this.faceSnap.addSnap();
    this.snapButtonText = "Oops unSnap !"
  }
  unSnap(): void {
    this.faceSnap.removeSnap();
    this.snapButtonText = "Oh Snap !"
  }

}



