import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http: HttpClient) { }

  Verif(user,pas) {
    return this.http.get('http://localhost:8080/boite/verif/'+user+'/'+pas);
  }
  getUser() {
    return this.http.get<User[]>('http://localhost:8080/boite/utilisateurs');
  }

  addMessage(m){
    return this.http.post('http://localhost:8080/boite/addMessage',m)
  }
}
