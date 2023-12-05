import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AnnouncementsService {
    path: string = environment.apiUrl;


    constructor(
        private httpClient: HttpClient) { }

     
        getNewsList():any {
            return this.httpClient.get<any>(this.path+"/AnnouncementAPI/GetList?typeId=3&languageId=1");
        }
        getSliderList():any {
            return this.httpClient.get<any>(this.path+"/AnnouncementAPI/GetList?typeId=2&languageId=1");
        }
        getOurServicesList():any {
            return this.httpClient.get<any>(this.path+"/AnnouncementAPI/GetList?typeId=5&languageId=1");
        }
        getid(id: string): Observable<any> {
            return this.httpClient.get<any>(this.path + "/AnnouncementAPI/GetById?id="+id)
        }
    }