import { Adresse } from "./adresse";

export interface Infirmiere {

    id:number;
    nom:string;
    prenom:string;
    sexe:string;
    numeroProfessionnel:number;
    adresse:Adresse;
    telPro:string;
    telPerso:string;
}
