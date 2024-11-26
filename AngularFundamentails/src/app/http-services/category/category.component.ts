import { CategoryService } from '../category.service';
import { Category } from '../category.model';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {

  categoriesList: Array<Category> = [];

  constructor(private categoryService: CategoryService) { }
  //categoryService=Inject(CategoryService);

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (res) => {
        this.categoriesList = res;
        console.log('categories= ', this.categoriesList);
      }
    );
  }
}
