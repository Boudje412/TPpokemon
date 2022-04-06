//declaration de l'interface type
export interface Type {
    _degats: number;
//methode de l'interface type
    calculerDegatsContreFeu(_degats: number): number;
    calculerDegatsContreEau(_degats: number): number;
    calculerDegatsContrePlante(_degats: number): number;
}