import { Component, OnInit } from '@angular/core';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';
import { Message } from '../message';

@Component({
  selector: 'app-message-recus',
  templateUrl: './message-recus.component.html',
  styleUrls: ['./message-recus.component.css']
})
export class MessageRecusComponent implements OnInit {
  @LocalStorage()
  islogin: any;
  @LocalStorage()
  Utilisateur: any;

  messages:Message[];
  constructor(private serve:GestionService, private route:Router,private local:LocalStorageService) { }

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
