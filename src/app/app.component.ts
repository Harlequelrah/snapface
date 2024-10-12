import { Component } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import FaceSnap from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  mySnap!: FaceSnap;
  otherSnap!: FaceSnap;
  lastSnap!: FaceSnap;
  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Harlequelrah',
      'Another pseudo of Harlequin',
      'https://i.pinimg.com/enabled_hi/474x/03/3c/ed/033cedadad538f893a1752eaab93bda3.jpg',
      new Date(),
      10

    )
    this.otherSnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
    this.lastSnap = new FaceSnap(
      'Marine Kitagawa',
      'Personnage de My dressup darling',
      'https://i.pinimg.com/enabled_hi/474x/b7/18/8a/b7188a9cbe3d7ff9e35f6594661618ce.jpg',
      new Date(),
      100
    )

  }

}




