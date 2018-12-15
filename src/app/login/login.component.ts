import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serve:GestionService, private route:Router,private local:LocalStorageService) { }
  @LocalStorage()
  islogin: any;
  @LocalStorage()
  Utilisateur: any;

  show:boolean;
  message:string;
  ngOnInit() {
    if(this.islogin){
      this.route.navigate(['message-recus'])
    }
  }
  users:User = new User();
  login:string;
  password:string;
  connexion(){
    console.log(this.login,this.password)
    this.serve.Verif(this.login,this.password).subscribe(
      data => {
        console.log(data);
        this.Utilisateur=data;
        if(this.Utilisateur[0].nom!=null){
          this.route.navigate(['message-recus'])
          this.islogin=true;
          this.message="";
          this.show=false;
        }
        else {
          console.log("l'user n'exist  pas");
          this.message="verifier votre login ou password";
          this.show=true;
        }
      },
      err => {console.log(err)}      
    );
  }

}
