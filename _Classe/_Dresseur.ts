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

    //check si une pokeball specifiée est vide
    isEmptyPokeball(index: number):boolean {
        if (this._pokeballs[index].contient._nom) {
            return false;
        } else {
            return true;
        }
    }

    //donne l'index de la premiere pokeball vide
    checkAllPokeballsEmpty(): number {
        let index = 0
        while (!this.isEmptyPokeball(index) && index<7)
        {
            index ++
        }
        if(this.isEmptyPokeball(index))
        {
            return index 
        }
        else {return null}
    }

    capturer(cible:Pokemon):void 
    {
        if (this.checkAllPokeballsEmpty() != null)
        {
            console.log('vous avez capturer '+cible._nom+' dans la pokeball n°'+this.checkAllPokeballsEmpty())
            this._pokeballs[this.checkAllPokeballsEmpty()].affecterPokemon(cible);
        }
        else
        {
            console.log('vous n\'avez pas de pokeballs')
        }
    }
    //affiche les pokemons dans les pokeballs
    getPokemons(): void
    {
        let pokeliste=[];
        let index=0;
        this._pokeballs.forEach(pokeball => 
        {
            if(!this.isEmptyPokeball(index))
            {
                pokeliste.push(pokeball);
            }
            index++
        })
        if(pokeliste.length ===0)
        {
            console.log("vous n'avez pas de pokemons")
        }
        else
        {
            console.log("vos pokemons sont'")
            pokeliste.forEach(pokeball =>{
                console.log(pokeball._nom)
            })
        }
    };
}

