import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnnouncementsService } from '../../services/announcements.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-featured-services',
    templateUrl: './featured-services.component.html',
    styleUrls: ['./featured-services.component.scss']
})
export class FeaturedServicesComponent implements OnInit {
	path = environment.serverUrl;

	ourServicesModel!:any;
    constructor(
		private announcementsservice:AnnouncementsService
	) { }

    ngOnInit(): void {
		this.newsList();
	}

	newsList(){
		this.announcementsservice.getOurServicesList().subscribe((data: any)=> {
		  this.ourServicesModel = data;
		  console.log("Hizmetler",this.ourServicesModel)
		})
	  }

    servicesSlides: OwlOptions = {
		margin: 25,
		nav: false,
		loop: true,
		dots: true,
		autoplay: false,
		autoplayHoverPause: true,
		navText: [
			"<i class='ph-caret-left'></i>",
			"<i class='ph-caret-right'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
    }

}