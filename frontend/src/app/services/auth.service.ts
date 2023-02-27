import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public action : string ="";
  private url = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) {}

  authenticateUser(credentials: any){
    let url = this.url + this.action;
    return this.http.post<any>(url, JSON.stringify(credentials), this.httpOptions).pipe(
      map(response => {
        console.log(response)

        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            id: response.id,
            email: response.email,
            userName: response.username,
          })
        )

        response ? this.router.navigateByUrl('home') : null; 

      })
    );
  }

  logout(): void {
    localStorage.removeItem("currentUser");
    this.router.navigate(["login"]);
  }

  isLoggedIn() {
    return localStorage.getItem("currentUser") !== null;
  }

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

}
