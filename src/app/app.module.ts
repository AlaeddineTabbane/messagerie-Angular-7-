import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageRecusComponent } from './message-recus/message-recus.component';
import { MessageEnvoyesComponent } from './message-envoyes/message-envoyes.component';
import { LoginComponent } from './login/login.component';
import { SendComponent } from './send/send.component';
import { GestionService } from './gestion.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MessageRecusComponent,
    MessageEnvoyesComponent,
    LoginComponent,
    SendComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
