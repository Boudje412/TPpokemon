//declaration de l'interface Pokemon
export interface Pokemon {
    _nom:string;
    _pv: number;
    _pvMax:number;
    _type:string;
    _captif:boolean;
    _horsJeu:boolean;
//methode pokemon
attaquer(newPokemon: Pokemon):void
subirAttaque(degats: number):void
soigner():void
renommer():void
}