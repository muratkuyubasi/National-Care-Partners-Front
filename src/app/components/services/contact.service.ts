import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    path: string = environment.apiUrl;
    lang: string = "tr"


    constructor(
        private httpClient: HttpClient) { }
        
        communicationSend(data: any):any{
            return this.httpClient.post<any>(this.path+"/SiteContactAPI/Add",data);
        } 
    }