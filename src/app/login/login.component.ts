import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serve:GestionService, private route:Router) { }

  ngOnInit() {
  }
  users:User = new User();
  login:string;
  password:string;
  connexion(){
    this.serve.Verif(this.login,this.password).subscribe(
      data => {console.log(data);this.route.navigate(['liste-magasin'])},
      err => {console.log(err)}      
    );
  }

}
