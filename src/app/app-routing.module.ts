import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component'; 
import { CharacterFormComponent } from './components/character-form/character-form.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent
  },
  {
    path: 'character',
    component: CharacterListComponent
  },
  {
    path: 'character/create',
    component: CharacterFormComponent
  },
  {
    path: 'character/edit/:id',
    component: CharacterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
