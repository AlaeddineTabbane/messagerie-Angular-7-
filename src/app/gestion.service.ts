import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Message } from './message';

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


  getOneUser(id) {
    return this.http.get('http://localhost:8080/boite/utilisateurs/'+id);
  }

  getMesRec(id){
    return this.http.get<Message[]>('http://localhost:8080/boite/messagesrecus/'+id);
  }

  getMesEnv(id){
    return this.http.get<Message[]>('http://localhost:8080/boite/messagesenvoyes/'+id);
  }

  getMes(id){
    return this.http.get<Message[]>('http://localhost:8080/boite/message/'+id);
  }

  deleteMes(id){
    return this.http.get('http://localhost:8080/boite/delMessage/'+id);
  }
}
