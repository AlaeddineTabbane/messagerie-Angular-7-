import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';
import { Message } from '../message';


@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

   users:User[];
   message:Message = new Message();
   
  @LocalStorage()
  islogin: boolean;
  @LocalStorage()
  Utilisateur: any;
  
  constructor(private serve:GestionService, private route:Router,private local:LocalStorageService) { }

  ngOnInit() {
    this.message.$usersend=this.Utilisateur[0];
    console.log(this.Utilisateur[0].nom);
    
    if(!this.islogin){
      this.route.navigate(['login'])
    }else{
      this.getUser();
    }
  }

  deconnecter(){
    this.local.clear("utilisateur");
    this.islogin=false
    this.route.navigate(['/login']);
  }

  getUser(){
    this.serve.getUser().subscribe(
      data => {console.log(data);this.users=data},
      err  => {console.log(err);
      }
    )
  }

  send(){
    this.serve.addMessage(this.message).subscribe(
      data => {console.log(data); this.route.navigate(['/message-envoyes'])},
      err => {console.log(err);
      }
    )
  }

}
