import { Infirmiere } from "./infirmiere";
import { Patient } from "./patient";

export interface Deplacement {

    id:number;
    cout:number;
    date:Date;
    infirmiere:Infirmiere;
    patient:Patient;
}
