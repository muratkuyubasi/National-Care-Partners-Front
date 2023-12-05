import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementsService } from '../../services/announcements.service';

@Component({
  selector: 'app-blog-details-left-sidebar-page',
  templateUrl: './blog-details-left-sidebar-page.component.html',
  styleUrls: ['./blog-details-left-sidebar-page.component.scss']
})
export class BlogDetailsLeftSidebarPageComponent implements OnInit {

  ourServicesModel!:any;
  constructor(private announcementsservice:AnnouncementsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
      this.router.params.subscribe(x => {
          this.ourServiceslist(x['id']);
      })
  }
  ourServiceslist(id: any) {
      this.announcementsservice.getid(id).subscribe((data: any) => {
          this.ourServicesModel = data;
          console.log("Servies Detayt", this.ourServicesModel)
      })
  }
}