import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { Articles } from 'src/app/interfaces/interface-articles';
import { Router } from '@angular/router';
declare var $: any;
import 'jquery';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit{

  successMessage: any;
  errorMessage: any;
  articleForm = this.fb.group({
    title: ['', [Validators.required]],
    date: ['', [Validators.required]],
    body: ['', [Validators.required]],
    id: [''],
    userId: ['', [Validators.required]],
  });


  constructor(private _requestService : RequestService,
              private fb: FormBuilder,
              private router: Router){ }

  ngOnInit(): void {
    let user: any= localStorage.getItem("currentUser")
    this.articleForm.patchValue({
      userId: JSON.parse(user)?.id
    });
    console.log(this.articleForm.value)
  }
  onSubmit(){
    this.articleForm.value.date = $("#datepicker").val();
    const formData : Articles | any= this.articleForm.value

    this._requestService.action ="articles"
    this._requestService.postRequest(formData).subscribe(
     {
      next: (v) => console.log(v),
      complete: () => {console.info(this.successMessage = "Record Successfuly Added")} ,
      error: (e) =>  {
         console.log('error msg:', this.errorMessage = e)
      }
     }
    )
    console.log(formData)
  }
    
}
