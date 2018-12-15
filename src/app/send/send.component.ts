import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  users:User[];
  message:Message;
  @LocalStorage()
  islogin: any;
  constructor(private serve:GestionService, private route:Router,private local:LocalStorageService) { }

  ngOnInit() {
    if(!this.islogin){
      this.route.navigate(['login'])
    }else{
      this.getUser();
    }
  }

  getUser(){
    this.serve.getUser().subscribe(
      data => {console.log(data);},
      err  => {console.log(err);
      }
    )
  }

}
