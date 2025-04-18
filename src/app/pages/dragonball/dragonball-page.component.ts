import { Component, computed, signal } from "@angular/core";
interface Character{
    id:number;
    name:String;
    power:number;
}


@Component({
    templateUrl:'./dragonball-page.component.html'

})
export class dragonballPageComponent{
    name = signal('Gohan');
    power=signal(100);
     
    characters=signal(<Character[]>[
        {id:1, name:'Goku',power:9001},
        {id:2, name:'Vegeta',power:8001},
        {id:3, name:'Piccolo',power:3021},
        {id:4, name:'Yamcha',power:500}
    ]);
    powerClasses = computed(()=>{
        return{
            'taxt-danger':true
        }
    })

    addCharacter(){
        if(!this.name() || !this.power() || this.power()<0){
            return ;
        }
        const newCharacter:Character = {
            id: this.characters().length +1 ,
            name: this.name(),
            power: this.power()
        };
        //funciona pero esta mal para manejar señales:
        //this.characters().push(newCharacter);
        //funciona para señales
        this.characters.update((list)=>[...list,newCharacter]);
        this.resetFields();
    }

    resetFields(){
        this.name.set('');
        this.power.set(0);
    }

}