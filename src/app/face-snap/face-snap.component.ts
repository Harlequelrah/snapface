import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  isSnaped!: boolean;
  snapButtonText!: "Oh Snap !" | "Oops unSnap !";

  ngOnInit(): void {
    this.title = 'Harlequelrah';
    this.description = 'ANGULAR DEV ';
    this.createdAt = new Date();
    this.snaps = 0;
    this.isSnaped = false;
    this.snapButtonText = "Oh Snap !"
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }

  onSnap(): void {
    this.isSnaped = !this.isSnaped;
    if (this.isSnaped) this.snap()
    else this.unSnap()
  }
  snap(): void {
    this.snaps++;
    this.snapButtonText = "Oops unSnap !"
  }
  unSnap(): void {
    this.snaps--;
    this.snapButtonText = "Oh Snap !"
  }

}

