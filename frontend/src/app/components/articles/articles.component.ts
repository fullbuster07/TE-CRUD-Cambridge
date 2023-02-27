import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit{

  searchKeyword: any;
  articles : any;
  
  constructor(private _requestService : RequestService){ }

    ngOnInit(): void {
      this._requestService.action ="articles";
      this._requestService.getRequest().subscribe({
        next : (res) => console.log(this.articles = res)
      })
    }

    onChange(keyword: any): void {
      console.log(this.searchKeyword = keyword)
    }            
       
}
