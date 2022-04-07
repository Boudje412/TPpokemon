import { Pokemon } from "../_Interfaces/_Pokemon";
import { Pokeball } from "./_Pokeball";
export class Dresseur {
    //parametres
    private _nom:string;
    public _pokeballs: Pokeball[]=[];
    //constructeur
    constructor(nom:string) {
        this._nom = nom;
    }
    //getter
    get nbPokeballs():number {
     return this._pokeballs.length;
    }
    //setter
    ajouterPokeballs(nombre:number):void {
        while(this.nbPokeballs<nombre && this.nbPokeballs<6)
        {
            this._pokeballs.push()
        }
    }

    isEmptyPokeball(index: number):boolean {
        if (this._pokeballs[index].contient._nom) {
            return false;
        } else {
            return true;
        }
    }
//attention si toute les balles sont pleines A REVOIR ABSOLUMENT.
    checkAllPokeballsEmpty(): number {
        let index = 0
        // this._pokeballs.forEach(pokeball => {
        //     this.isEmptyPokeball(index)
        //     index ++
        // })
        // 
        while (this.isEmptyPokeball(index)=false)
        {
            index ++
        }
        return index -1
    }

    // isPokeballEmpty():boolean
    // {
    //     let empty:boolean = null;
    //     this._pokeballs.forEach((pokeball)=>{
            
    //         if (pokeball.contient._nom)
    //         {
    //             empty= false;
    //         }
    //         else
    //         {
    //             empty= true;
    //         }
    //     })
    //     return empty
    // }
     //PAS TERMINER DU TOUT A FAIRE!!!!
    capturer(cible:Pokemon):void 
    {
        if(this._pokeballs.length>0)
        {
            
        }
        affecterPokemon(cible);
    }
}

