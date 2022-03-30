import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/Services/auth.service";
import { ValidationService } from "src/Services/validate.service";

@Component({
  selector: "register",
  templateUrl: "register.component.html",
  styleUrls: ["../Login/login.component.css"],
})
export class RegisterComponent {
  constructor(private http: HttpClient, private auth: AuthService, private router: Router, private validate: ValidationService) {}
  a = "form-group";
  b = "form-control";
  data: any;
  errors = [0, 0, 0, 0, 0];
  register(val: any) {
    for (let i = 0; i < this.errors.length; i++) {
      if (this.errors[i] == 1) {
        return alert("You should resolve all errors first");
      }
    }
    const url = "http://localhost:3000/user/register";
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
  name = (e: any, i: any) => {
    if (e.length < 1) {
      this.errors[i] = 1;
    } else this.errors[i] = 0;
  };
  email = (e: any) => {
    console.log(e);
    if (!this.validate.email(e)) {
      this.errors[2] = 1;
    } else this.errors[2] = 0;
  };
  contact = (e: Number) => {
    let k = e.toString();
    if (k.length != 10) {
      this.errors[3] = 1;
    } else this.errors[3] = 0;
  };
  password = (e: any) => {
    if (e.length < 6) {
      this.errors[4] = 1;
    } else this.errors[4] = 0;
  };
}
