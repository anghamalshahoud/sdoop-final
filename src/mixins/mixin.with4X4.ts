import {Constructor} from "./type.constructor"



export function with4X4<Parent extends Constructor>( MixOn:Parent ){
    
    return class extends MixOn {


        has4x4: boolean = true
        isIn4X4?: boolean = false

        toggle():void{

        }



         }
 
 }


