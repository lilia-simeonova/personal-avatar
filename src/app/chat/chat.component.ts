import { Component, ElementRef, ViewChild, Renderer, OnInit,  keyframes } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable }     from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ChatBotService } from '../chat.service';
import { Http, Headers, Response } from '@angular/http';
import {ApiAiClient} from "api-ai-javascript";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'chat-box',
  templateUrl: 'chat.component.html',
  animations: [
    trigger('icon', [
      state('inactive', style({
          transform: 'scale(1)'
      })),
      state('active', style({
          transform: 'scale(1.1) rotate(360deg)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
   ]),
 
    trigger('flyInOut', [
     // state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('2s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 0.1s ease-out', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }))
      ])
    ])
  ],
  styleUrls: ['chat.component.css'],
})

export class ChatComponent {
  state: string = 'inactive';

  constructor(private chat: ChatBotService, private renderer: Renderer) { }; 


  @ViewChild('conversation') conversationContainer: ElementRef;
  
  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  question: any;
  res: any;
  result:any;
  newQuestion: string;
  listOfQuestions: string[] = [];
  listOfResults: string[] = []; 
  links: string[] = [];
  happyState: string;
  evenState: string;
  sadState: string;
  session: boolean = false;
  link: any;
  

  askQuestion(value: any) {
    value.newQuestion = value.newQuestion.trim();
    if(value.newQuestion) { 
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
      this.listOfQuestions.push(this.newQuestion);
      this.newQuestion = '';
      setTimeout(() => this.scrollBottom());
      
      this.chat.send(value.newQuestion)
        .then((res) => { 
          this.result = res;
          this.result = this.result.result.fulfillment.speech;
          this.listOfResults.push(this.result);
          setTimeout(() => this.scrollBottom());
        } 
        );
      }
    
  }

  private scrollBottom() {
    this.renderer.setElementProperty(this.conversationContainer.nativeElement, 
      'scrollTop', 1e10);
  }

  showText = '';
  showText2 = '';
  text = false;
  message2 = false;



  ngOnInit() {
    this.text = true;
    setTimeout( () => {
       this.showText = 'Hi there, I\'m Lilly and I\'m a Full Stack Engineer currently mastering Machine Learning 😊';
    }, 2000);
    setTimeout( () => {
       this.showText2 = 'I designed this bot to help you understand more about my professional experience and what kind of person I am... ';
    }, 4000);
    setTimeout( () => {
       this.message2 = true;
    }, 2000);
  }

}