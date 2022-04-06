import {Type} from '../_Interfaces/_Type';
import { Pokemon } from '../_Interfaces/_Pokemon';
export abstract class TypePlante implements Type{
    _degats: number;

    constructor (degats: number) {
        this._degats = degats;
    }
    calculerDegatsContreFeu(cible:Pokemon): number
    {
        let degats=this._degats*0.5;
        return degats;
    }
    calculerDegatsContrePlante(cible:Pokemon): number
    {
        let degats=this._degats*0.5;
        return degats;
    }
    calculerDegatsContreEau(cible:Pokemon): number
    {
        let degats=this._degats*2;
        return degats;
    }
}