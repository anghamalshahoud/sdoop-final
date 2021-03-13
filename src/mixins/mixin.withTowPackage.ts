import {Constructor} from "./type.constructor"


export enum towLimit{
    a = 13000,
    b = 9000 ,
    c = 3000 ,
    d = 4000

}

export interface ItowLimit{

    towLimit:towLimit[]

}
export function withTowPackage<Parent extends Constructor>( MixOn:Parent ){
    
   return class extends MixOn implements ItowLimit {


    hasTowPackage: boolean = true;

    towLimit:towLimit[];



   }


}

// export function hasTwoLimit<Parent extends Constructor>( MixOn:Parent ){
    
//     return class extends MixOn {
 
 
//      towLimit: number ;
 
 
 
//     }
 
 
//  }