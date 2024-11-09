import { Injectable } from "@angular/core";
import { SnapType } from "../models/snap-type.type";
import { FaceSnap } from "../models/face-snap";
import { FaceSnapInterface } from "../../interfaces/face-snap.interface";
import { from, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class FaceSnapsService {
    private Url ='http://127.0.0.1:8000/'
    private faceSnaps: FaceSnap[] = [new FaceSnap(
        'Harlequelrah',
        'Another pseudo of Harlequin',
        'https://i.pinimg.com/enabled_hi/474x/03/3c/ed/033cedadad538f893a1752eaab93bda3.jpg',
        new Date(),
        10
    ),
        new FaceSnap(
            'Archibald',
            'Mon meilleur ami depuis tout petit !',
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            new Date(),
            0
        ).withLocation('En plein air'),
        new FaceSnap(
            'Marine Kitagawa',
            'Personnage de My dressup darling',
            'https://i.pinimg.com/enabled_hi/474x/b7/18/8a/b7188a9cbe3d7ff9e35f6594661618ce.jpg',
            new Date(),
            100
        )

    ]
    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): void {
        const faceSnap = new FaceSnap(
            formValue.title,
            formValue.description,
            formValue.imageUrl,
            new Date(),
            0,
        )
        faceSnap.setLocation(formValue.location??'');
        this.faceSnaps.push(faceSnap);
    }

    getFaceSnaps(): Observable<FaceSnap[]>
    {
        return from(fetch(this.Url + 'facesnaps/')
        .then(response => response.json()))
    }


    snapFaceSnapById(faceSnapId: string , snapType : SnapType) : void
    {
        const faceSnap = this.getFaceSnapById(faceSnapId)
        // faceSnap.snap(snapType)
    }


    getFaceSnapById(faceSnapId: string) : Observable<FaceSnap>
    {
        return from(fetch(this.Url + 'facesnaps/get-face-snap/'+faceSnapId)
        .then(response=>response.json()))
        // const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)
        // if (!faceSnap) {
        //     throw new Error('FaceSnap Not Found')
        // }
        // return faceSnap
    }


}
