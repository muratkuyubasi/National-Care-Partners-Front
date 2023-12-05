import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../../services/announcements.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-grid-page',
  templateUrl: './blog-grid-page.component.html',
  styleUrls: ['./blog-grid-page.component.scss']
})
export class BlogGridPageComponent implements OnInit {
  path = environment.serverUrl;

  newsModel!:any;
  constructor(private announcementsservice:AnnouncementsService) { }

  ngOnInit(): void {
    this.newsList();
  }

  newsList(){
    this.announcementsservice.getOurServicesList().subscribe((data: any)=> {
      this.newsModel = data;
      console.log("Haberler",this.newsModel)
    })
  }

}
