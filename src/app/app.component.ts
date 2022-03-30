import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/Services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router) {}
  title = "client";
  share():boolean {
    return !this.auth.isLoggedIn();
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
}
