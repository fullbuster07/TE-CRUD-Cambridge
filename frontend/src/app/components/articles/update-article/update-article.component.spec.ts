import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UpdateArticleComponent } from './update-article.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DatePickerComponent } from 'src/app/common/date-picker/date-picker.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('UpdateArticleComponent', () => {
  let component: UpdateArticleComponent;
  let fixture: ComponentFixture<UpdateArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,
                HttpClientTestingModule,
                RouterModule.forRoot([]),
                ReactiveFormsModule],
      declarations: [ UpdateArticleComponent,
                      DatePickerComponent ],
      providers: [DatePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
