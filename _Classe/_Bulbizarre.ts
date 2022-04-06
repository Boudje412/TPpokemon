import {Pokemon} from "../_Interfaces/_Pokemon"
import {TypePlante} from "./_TypePlante"
export class Bulbizarre extends TypePlante implements Pokemon
{
    //parameters
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
    attaquer(cible:Pokemon):void{
        let pvrestant=cible.subirAttaque(this.calculerDegat(cible));
    }
    subirAttaque(degats:number):void{
        this._pv=this._pv-degats
    }
    soigner():void{}
    renommer():void{}
}