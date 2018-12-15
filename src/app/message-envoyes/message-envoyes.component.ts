import { Component, OnInit } from '@angular/core';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';
import { Message } from '../message';

@Component({
  selector: 'app-message-envoyes',
  templateUrl: './message-envoyes.component.html',
  styleUrls: ['./message-envoyes.component.css']
})
export class MessageEnvoyesComponent implements OnInit {

  constructor(private serve:GestionService, private route:Router,private local:LocalStorageService) { }
  @LocalStorage()
  islogin: boolean;
  @LocalStorage()
  Utilisateur: any;

  messages:Message[];
  ngOnInit() {
    if(!this.islogin){
      this.route.navigate(['login'])
    }else {
      this.getMessage();
    }
  }

  getMessage(){
    this.serve.getMesRec(this.Utilisateur[0].id).subscribe(
      data => {
        console.log(data);
        this.messages=data;
      },
      err => {
        console.log(err);
        
      }
    )
  }

  deconnecter(){
    this.local.clear("utilisateur");
    this.islogin=false
    this.route.navigate(['/login']);
  }

}
