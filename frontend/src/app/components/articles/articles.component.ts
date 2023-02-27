import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Articles } from 'src/app/interfaces/interface-articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit{

  articles : any = [];
  constructor(private _requestService : RequestService){ }

    ngOnInit(): void {
      this._requestService.action ="articles";
      this._requestService.getRequest().subscribe({
        next : (res) => console.log(this.articles = res)
      })
    }
}
