import { SnapType } from "./snap-type.type";

export class FaceSnap {
    location?: string
    constructor(
        public id:number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public createdAt: Date,
        public snaps: number
    ) { }

    addSnap(): FaceSnap {
        this.snaps++;
        return this;
    }
    removeSnap(): FaceSnap{
        this.snaps--;
        return this;
    }
    snap(snaptype: SnapType): void {
        if(snaptype ==='snap'){
            this.addSnap();
        } else if(snaptype === 'unsnap'){
            this.removeSnap();
        } else {
            throw new Error("Invalid snap type. Use'snap' or 'unsnap'")
        }

    }


    setLocation(location: string): void {
        this.location = location;
    }
    withLocation(location: string): FaceSnap{
        this.setLocation(location)
        return this;
    }

}
