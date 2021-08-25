import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  //Api url
  baseUrl: string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  //Methods
  getCharacters():Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/character`);
  }
  getCharacter(id:string): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/character/${id}`);
  }
  createCharacter(character:Character):Observable<Character> {
    return this.http.post<Character>(`${this.baseUrl}/character`, character);
  }
  updateCharacter(id:(string|undefined), character:Character):Observable<Character> {
    return this.http.put<Character>(`${this.baseUrl}/character/${id}`, character);
  }
  deleteCharacter(id:(string|undefined)):Observable<Character> {
    return this.http.delete<Character>(`${this.baseUrl}/character/delete?characterId=${id}`);
  }

}
