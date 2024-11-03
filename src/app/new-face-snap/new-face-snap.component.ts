import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap';
import { NgIf, UpperCasePipe,AsyncPipe,DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,UpperCasePipe,AsyncPipe,DatePipe],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit {
  constructor(private formBuilder:FormBuilder) { }
  snapForm!: FormGroup
  faceSnapPreview$!: Observable<FaceSnap>
  ngOnInit(): void {
    this.snapForm = this.formBuilder.group(
      {
        title: [null],
        description: [null],
        imageUrl: [null],
        location: [null],
      }
    )
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => (
        {
          ...formValue,
          id: 0,
          snaps: 0,
          createdAt:new Date()

        }
      ))
    );

  }
  onSubmitForm(): void {
    console.log(this.snapForm.value);
  }

}
