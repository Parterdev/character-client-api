import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Character } from '../../interfaces/Character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {

  character:Character = {
    name: '',
    role: '',
    description: '',
    age: 0,
    personality: '',
    hability: '',
    creatorName: '',
    avatarPath: '',
  };

  //To date
  pipe = new DatePipe('en-US');

  //To edit
  edit:boolean = false;

  constructor(
    private characterService:CharacterService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    //console.warn(params);
    if(params) {
      this.characterService.getCharacter(params.id)
        .subscribe(
          res => {
            console.log(res);
            //Lleno las propiedades con la nueva respuesta
            this.character = res;
            this.character.createdAt = this.pipe.transform(this.character.createdAt, 'short');
            //console.warn('Fecha', this.character.createdAt);
            this.edit = true;
          }
        )
    }
  }

  submitCharacter() {
    console.log(this.character);
    //Save Events
    this.characterService.createCharacter(this.character)
      .subscribe(
        res => {
          //console.log(res),
          this.router.navigate(['/']);
        },
        err => console.log(err),
      )
  }

  updateCharacter() {
    //Mantenemos fecha de creación
    delete this.character.createdAt;
    //Actualizamos el objeto
    this.characterService.updateCharacter(this.character._id, this.character)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/character']);
        },
        err => console.error(err),
      )
      
  }

}
