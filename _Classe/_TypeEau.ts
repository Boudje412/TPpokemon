import {Type} from '../_Interfaces/_Type';
export abstract class TypeEau implements Type{
    _degats: number;
    calculerDegatsContreFeu(_degats: number): number
    {
        let degats=_degats*2;
        return degats;
    }
    calculerDegatsContreEau(_degats: number): number
    {
        let degats=_degats*0.5;
        return degats;
    }
    calculerDegatsContrePlante(_degats: number): number
    {
        let degats=_degats*0.5;
        return degats;
    }
}