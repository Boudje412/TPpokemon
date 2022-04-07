import {Pokemon} from "../_Interfaces/_Pokemon"
import { Dresseur } from "./_Dresseur"

export class Pokeball 
{
    private _contient!: Pokemon
    private _proprietaire!: Dresseur
    //getter
    getContenu(): void
    {
        console.log(this._contient._nom + 'est dans la boule magique')
    }
    //setter
    affecterPokemon(cible:Pokemon): void
    {
        this._contient=cible;
    }
    get contient(): Pokemon
    {
        return this._contient
    }
}