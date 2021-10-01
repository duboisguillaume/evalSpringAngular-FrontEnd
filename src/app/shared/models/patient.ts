import { Adresse } from "./adresse";
import { Infirmiere } from "./infirmiere";

export interface Patient {

    id:number;
    nom:string;
    prenom:string;
    dateDeNaissance:Date;
    sexe:string;
    numeroSecuriteSociale:number;
    adresse:Adresse;
    infirmiere:Infirmiere;
}
