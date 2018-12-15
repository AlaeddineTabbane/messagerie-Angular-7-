import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http: HttpClient) { }

  Verif(user,pas) {
    return this.http.get('http://localhost:8080/verif/'+user+'/'+pas);
  }
  getUser() {
    return this.http.get('http://localhost:8080/utilisateurs');
  }
}
