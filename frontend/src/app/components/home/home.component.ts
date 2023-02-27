import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  
  constructor(private _requestService : RequestService,
    private _authService : AuthService){ }

  logout(){
    this._authService.logout()
  }
  ngOnInit(): void {
    this._requestService.action ="articles";
    this._requestService.getRequest().subscribe({
      next : (res) => console.log(res)
    })
  }
}
