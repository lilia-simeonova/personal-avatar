import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MenuComponent } from './menu/menu.component';
//import { ChatService } from  './avatar.service';
import { ChatBotService } from './chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [ChatBotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
