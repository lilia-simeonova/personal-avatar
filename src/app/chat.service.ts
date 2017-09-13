import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ApiAiClient} from "api-ai-javascript";


@Injectable()
export class ChatBotService  {
	constructor(private http: Http) {}

	send(question: string) {
		return new ApiAiClient({accessToken: 'bd781833fe3b4acb8dade790199c98d6'})
          	   .textRequest(question)
               .then((response) => {
					return response;	
				})
              .catch((error) => {/* do something here too */})
	}
}