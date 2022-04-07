import {Pokemon} from "../_Interfaces/_Pokemon"
import {TypeEau} from "./_TypeEau"
export class Carapuce extends TypeEau implements Pokemon
{
    //parametres
    _nom!:string;
    _pv: number;
    _pvMax:number;
    _type:string;
    _captif:boolean;
    _horsJeu:boolean;
    _degats:number;

    constructor (pvMax:number, degats:number)
    {
        super(degats);
        this._pvMax = pvMax;
        this._nom='Carapuce';
        this._pv = pvMax;
        this._type = 'Eau';
        this._captif=false;
        this._horsJeu = false;
    }
    //getter
    nom(): string
    {
        return this._nom;
    }
    pvMax(): number
    {
        return this._pvMax;
    }
    type(): string
    {
        return this._type;
    }
    calculerDegat(cible:Pokemon):number
    {
        if(cible._type==="Feu")
        {
            return this.calculerDegatsContreFeu(cible)
        }
        else if(cible._type==="Eau")
        {
            return this.calculerDegatsContreEau(cible)
        }
        else if(cible._type==="Plante")
        {
            return this.calculerDegatsContrePlante(cible)
        }
    }
    attaquer(cible:Pokemon):number {
        let pvrestant: number
        pvrestant=cible.subirAttaque(this.calculerDegat(cible));
        return pvrestant
    }
    subirAttaque(degats:number):number {
        this._pv=this._pv-degats
        return this._pv;
    }
    soigner():void{
        this._pv=this._pvMax;
    }
    renommer(nom:string):void{
        this._nom=nom;
    }
}