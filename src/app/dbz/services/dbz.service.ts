import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class ServiceNameService {

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  /* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice */
  onDeleteCharacter( index:number ){
    this.characters.splice(index,1);
  }

  constructor() { }

}
