import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RequestService } from 'src/app/services/request.service';
import { ArticlesComponent } from './articles.component';
import { SearchArticleComponent } from '../search-article/search-article.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;
  let service: RequestService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Ng2SearchPipeModule, ReactiveFormsModule],
      providers: [RequestService],
      declarations: [ ArticlesComponent, SearchArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(RequestService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeTruthy();
  });
});
