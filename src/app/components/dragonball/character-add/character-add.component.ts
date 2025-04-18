import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent { 
  name=signal('');
  power=signal(0);

  //emitir una dato a otra pagina output no OutPut
  newCharacter= output<Character>();

  addCharacter(){
    if(!this.name() || !this.power() || this.power()<0){
        return ;
    }
    const newCharacter:Character = {
        id: Math.floor(Math.random()*1000),
        name: this.name(),
        power: this.power()
    };
    //funciona pero esta mal para manejar señales:
    //this.characters().push(newCharacter);
    //funciona para señales
   // this.characters.update((list)=>[...list,newCharacter]);
    this.newCharacter.emit(newCharacter);
    this.resetFields();
}
resetFields(){
  this.name.set('');
  this.power.set(0);
}

}
