import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-departments-page',
    templateUrl: './departments-page.component.html',
    styleUrls: ['./departments-page.component.scss']
})
export class DepartmentsPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}