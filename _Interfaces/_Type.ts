import {Pokemon} from "./_Pokemon"
//declaration de l'interface type
export interface Type {
    _degats: number;
//methode de l'interface type
    calculerDegatsContreFeu(cible: Pokemon): number;
    calculerDegatsContreEau(cible: Pokemon): number;
    calculerDegatsContrePlante(cible: Pokemon): number;
}