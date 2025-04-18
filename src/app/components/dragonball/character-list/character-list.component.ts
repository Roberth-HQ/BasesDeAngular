import { Character } from './../../interfaces/character.interface';
import { Component, input } from '@angular/core';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent { 
  //characters = Input(<Character[]>);
  characters = input.required<Character[]>();
  listName= input.required<String>();
}