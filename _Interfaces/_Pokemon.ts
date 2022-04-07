//declaration de l'interface Pokemon
export interface Pokemon {
    _nom:string;
    _pv: number;
    _pvMax:number;
    _type:string;
    _captif:boolean;
    _horsJeu:boolean;

//methode pokemon
attaquer(newPokemon: Pokemon):number
subirAttaque(degats: number):number
soigner():void
renommer(nom: string):void
}