import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.scss']
})
export class SearchArticleComponent {

  @Output() valueChange = new EventEmitter();
  searchForm = this.formBuilder.group({
    keyword: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  onChange() {
    this.valueChange.emit(this.searchForm.controls.keyword.value) 
  }

  addArticle(){
    this.router.navigate(["add-article"]);
  }
}
