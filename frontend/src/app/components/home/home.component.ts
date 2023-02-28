import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  greetings: string = "Hello User!"
  activeRoute : string ="";
  constructor(private _requestService : RequestService,
              private _authService : AuthService,
              private router: Router){
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          console.log(this.activeRoute = event.url)
        }
      });

     }

  logout(){
    this._authService.logout()
  }
  ngOnInit(): void {
    let user: any= localStorage.getItem("currentUser")
    this.greetings =`Hello ${JSON.parse(user)?.userName}!`

    this._requestService.action ="articles";
    this._requestService.getRequest().subscribe({
      next : (res) => console.log(res)
    })
  }
}
