import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  character: Character = {
    name: '',
    power: 0
  }

  emitCharacter() :void { 
    console.log(this.character);
    
  }

}
