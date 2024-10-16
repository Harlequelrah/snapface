import { Injectable } from "@angular/core";
import FaceSnap from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({ providedIn: 'root' })

export default class FaceSnapsService {
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
    getFaceSnaps(): FaceSnap[]
    {
        return [...this.faceSnaps]
    }

    snapFaceSnapById(faceSnapId: string , snapType : SnapType) : void
    {
        const faceSnap = this.getFaceSnapById(faceSnapId)
        faceSnap.snap(snapType)
    }


    getFaceSnapById(faceSnapId: string) : FaceSnap
    {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)
        if (!faceSnap) {
            throw new Error('FaceSnap Not Found')
        }
        return faceSnap
    }


}
