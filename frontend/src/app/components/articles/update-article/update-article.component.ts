import { Component, OnInit  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { Articles } from 'src/app/interfaces/interface-articles';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare var $: any;
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss']
})
export class UpdateArticleComponent implements OnInit{

  greetings: string = "Hello User!"
  successMessage: any;
  errorMessage: any;
  id: any;
  articleForm: any = this.fb.group({
    title: ['', [Validators.required]],
    date: ['', [Validators.required]],
    body: ['', [Validators.required]],
    userId: ['', [Validators.required]],
  });


  constructor(private _requestService : RequestService,
              private _authService : AuthService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private datePipe: DatePipe){ 
              this.id =  this.activatedRoute.snapshot.paramMap.get("id");
              console.log(this.id)
              }

  ngOnInit(): void {
    let user: any= localStorage.getItem("currentUser")
    this.greetings =`Hello ${JSON.parse(user)?.userName}!`

    this._requestService.getRequestById(this.id).subscribe(
    {  
      next: (res: any) =>
      {
        this.articleForm.patchValue({
          userId: JSON.parse(user)?.id,
          title: res.title,
          date: res.date,
          body: res.body,
        });
        console.log(res)
      },
      complete: () => {console.info("Record Fetched Successfuly")} ,
      error: (e) =>  { console.error('error msg:',e) }
    })

  }

  logout(){
    this._authService.logout()
  }
  onSubmit(){
    const date = new Date($("#datepicker").val())
    this.articleForm.value.date = date?.toISOString().slice(0,10);
    const formData : Articles | any= this.articleForm.value
    
    this._requestService.action ="articles"
    this._requestService.updateRequest(this.id, formData).subscribe(
     {
      next: (res) => console.log(res),
      complete: () => {console.info(this.successMessage = "Record Successfuly Added")} ,
      error: (e) =>  {
         console.log('error msg:', this.errorMessage = e)
      }
     }
    )
  }
    
}
