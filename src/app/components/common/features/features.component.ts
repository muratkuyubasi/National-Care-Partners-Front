import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { CategoryModel } from '../../models/categoryModel';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
    path = environment.serverUrl;

    categoryModel:CategoryModel | any

    constructor(
        public router: Router, private categoryService:CategoryService
    ) { }

    ngOnInit(): void {
        this.categorList();
    }



    categorList(){
        this.categoryService.getList().subscribe((data: any) => {
          this.categoryModel = data;
          console.log("Kategoriler",this.categoryModel)
      })
    }
}