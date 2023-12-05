import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingService } from '../../services/setting.service';

@Component({
    selector: 'app-top-header',
    templateUrl: './top-header.component.html',
    styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
    addressModel!: any;
    phoneModel!: any;
    workinghoursModel!: any;
    facebookModel!: any;
    twitterModel!: any;
    instagramModel!: any;
    constructor(public router: Router, private settingService: SettingService) { }

    ngOnInit(): void {
        this.addressList();
        this.phoneList();
        this.workinghoursList();
        this.facebookList();
        this.instagramList();
        this.twitterList();

    }
    addressList() {
        this.settingService.getid("adres", 1).subscribe(data => {
            this.addressModel = data;
        })
    }
    phoneList() {
        this.settingService.getid("telefon", 1).subscribe(data => {
            this.phoneModel = data;
        })
    }
    workinghoursList() {
        this.settingService.getid("calisma-saatleri", 1).subscribe(data => {
            this.workinghoursModel = data;
        })
    }
    facebookList() {
        this.settingService.getid("facebook", 1).subscribe(data => {
            this.facebookModel = data;
        })
    }
    instagramList() {
        this.settingService.getid("instagram", 1).subscribe(data => {
            this.instagramModel = data;
        })
    }
    twitterList() {
        this.settingService.getid("twitter", 1).subscribe(data => {
            this.twitterModel = data;
        })
    }
}