import { Component, OnInit } from '@angular/core';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-message-recus',
  templateUrl: './message-recus.component.html',
  styleUrls: ['./message-recus.component.css']
})
export class MessageRecusComponent implements OnInit {
  @LocalStorage()
  islogin: any;
  constructor(private serve:GestionService, private route:Router,private local:LocalStorageService) { }

  ngOnInit() {
    if(!this.islogin){
      this.route.navigate(['login'])
    }
  }

}
