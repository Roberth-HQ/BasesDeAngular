import { Component, computed, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
interface Character{
    id:number;
    name:String;
    power:number;
}


@Component({
    templateUrl:'./dragonball-super-page.component.html',
    selector:'dragonball-super',
    imports: [CharacterListComponent, CharacterAddComponent],

})
export class dragonballSuperPageComponent{
    name = signal('');
    power=signal(0);
     
    characters=signal(<Character[]>[
        {id:1, name:'Goku',power:9001},
        {id:2, name:'Vegeta',power:8001}
    ]);
    powerClasses = computed(()=>{
        return{
            'taxt-danger':true
        }
    })

    addCharacter(character:Character){
        this.characters.update((list)=>[...list,character]);
    }



}