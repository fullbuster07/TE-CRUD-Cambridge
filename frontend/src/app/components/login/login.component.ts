import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/interface-user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  users: User | undefined;
	errorMessage : any = "";
  
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
  });


  constructor(private _requestService : RequestService,
    private _authService : AuthService,
    private fb: FormBuilder){    
       localStorage.removeItem("currentUser");
      }

  onSubmit(){
    let formData = this.loginForm.value;
    console.log("Login...", formData);
  
    this._authService.action = "auth/login";
    this._authService.authenticateUser(formData)
      .subscribe(
        {
          next: (v) => console.log(v),
          complete: () => console.info("Login successful.") ,
          error: (e) =>  {
            this.errorMessage = 'Username or email is incorrect'
            formData.email = "";
          }
        }
      );
  }

    
  ngOnInit(): void {
    this._requestService.action ="users/"
    this._requestService.getRequest().subscribe(data => console.log(data))

  }
}
