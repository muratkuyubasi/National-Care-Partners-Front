import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnnouncementsService } from 'src/app/components/services/announcements.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homethree-banner',
  templateUrl: './homethree-banner.component.html',
  styleUrls: ['./homethree-banner.component.scss']
})
export class HomethreeBannerComponent implements OnInit {
  path = environment.serverUrl;

   sliderModel!:any;
  constructor(private announcementsservice:AnnouncementsService) { }

  ngOnInit(): void {
    this.sliderList();
  }
  sliderList(){
    this.announcementsservice.getSliderList().subscribe((data: any)=> {
      this.sliderModel = data;
      console.log("Slider",this.sliderModel)
    })
  }

  recommendedCarOptions: OwlOptions = {
    margin: 24,
    nav: false,
    loop: true,
    dots: false,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };


}
