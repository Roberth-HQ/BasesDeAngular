import { Character } from './../components/interfaces/character.interface';
import { computed, effect, Injectable, signal } from '@angular/core';

const loadFromLocalStorage = ():Character[]=> {
    const characters =localStorage.getItem('characters');
    return characters ? JSON.parse(characters):[];
}

@Injectable({providedIn: 'root'})

export class dragonballService {
    // characters=signal(<Character[]>[
    //     {id:1, name:'Goku',power:9001},
    //     {id:2, name:'Vegeta',power:8001}
    // ]);
    characters= signal<Character[]>(loadFromLocalStorage());

    saveToLocalStorage = effect( ()=>{
        localStorage.setItem('characters',JSON.stringify( this.characters()))
        //console.log(`characte count ${this.characters().length}`);
    })
    addCharacter(character:Character){
        this.characters.update((list)=>[...list,character]);
    }

    
}
//dependice Injection
//es como una instancia que simpre esta disponible, un lugar centralizado.
//si se cambia las pantallas este servicio siempre estara activo por lo cual los daots no se pierdan
