import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({ providedIn: 'root' })

export class FaceSnapsService {
    constructor(private http: HttpClient) { }
    private ApiUrl = 'http://127.0.0.1:8000/facesnaps'
    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
        return this.http.post<FaceSnap>(this.ApiUrl + "/create-face-snap", formValue);
    }
    deleteFaceSnap(faceSnapId: number): Observable<FaceSnap> {
        return this.http.delete<FaceSnap>(this.ApiUrl + "/delete-face-snap/" + faceSnapId);
    }

    getFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>(this.ApiUrl + "/");
    }


    snapFaceSnapById(faceSnapId: number, snapType: SnapType): Observable<FaceSnap> {
        return this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap => ({
                ...faceSnap,
                snaps: faceSnap.snaps + (snapType == 'snap' ? 1 : -1),
            })),
            switchMap(updatedFaceSnap =>
                this.http.put<FaceSnap>(
                    this.ApiUrl + "/update-face-snap/" + faceSnapId,
                    updatedFaceSnap
                )
            )
        )



    }


    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(this.ApiUrl + "/get-face-snap/" + faceSnapId);
    }


}
