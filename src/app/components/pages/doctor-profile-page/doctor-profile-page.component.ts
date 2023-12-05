import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-doctor-profile-page',
    templateUrl: './doctor-profile-page.component.html',
    styleUrls: ['./doctor-profile-page.component.scss']
})
export class DoctorProfilePageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}