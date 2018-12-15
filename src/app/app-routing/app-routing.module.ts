import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MessageEnvoyesComponent } from '../message-envoyes/message-envoyes.component';
import { MessageRecusComponent } from '../message-recus/message-recus.component';
import { SendComponent } from '../send/send.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'message-envoyes', component: MessageEnvoyesComponent },
  { path: 'message-recus', component: MessageRecusComponent },
  { path: 'send', component: SendComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
