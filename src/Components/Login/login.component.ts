import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/Services/auth.service";
import { ValidationService } from "src/Services/validate.service";

@Component({
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"],
})
export class LoginComponent {
  constructor(private http: HttpClient, private auth: AuthService, private router: Router, private validate: ValidationService) {}
  a = "form-group";
  b = "form-control";
  data: any;
  errors = [0, 0];
  login(val: any) {
    for (let i = 0; i < this.errors.length; i++) {
      if ((this.errors[i] == 1)) {
        return alert("You should resolve all errors first");
      }
    }
    const url = "http://localhost:3000/user/login";
    this.http.post(url, val).subscribe(
      (res) => {
        this.data = res;
        localStorage.setItem("token", this.data.token);
        this.auth.isLoggedIn();
        this.router.navigate([""]);
      },
      (err) => {
        if (err) alert(err.error);
      }
    );
  }
  email = (e: any) => {
    console.log(e);
    if (!this.validate.email(e)) {
      this.errors[0] = 1;
    } else this.errors[0] = 0;
  };
  password = (e: any) => {
    console.log(e);
    if (e.length < 6) {
      this.errors[1] = 1;
    } else this.errors[1] = 0;
  };
}
