import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Character } from 'src/app/interfaces/Character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];

  setCreatedAt:(string|null) = '';

  //To date
  pipe = new DatePipe('es');

  constructor(private characterService: CharacterService) { }

  //Inicialización del componente
  ngOnInit(): void {
    this.getCharacters();
  }

  //Functions
  getCharacters() {
    this.characterService.getCharacters()
      .subscribe(
        res => {
          this.characters = res;
          //console.log(res);
          const [data] = res;
          const createdAt = data.createdAt;
          this.setCreatedAt = this.pipe.transform(createdAt, 'short');
          //console.warn(this.setCreatedAt);
        },
        err => console.log(err),
      )
  }

  deleteCharacter(id:(string|undefined)) {
    this.characterService.deleteCharacter(id)
      .subscribe(
        res => {
          //Cargo nuevamente los datos
          this.getCharacters();
        },
        err => console.error(err),
      )

  }

}
