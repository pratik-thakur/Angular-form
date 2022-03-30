import { Component } from "@angular/core";

@Component({
  selector: "home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"],
})
export class HomeComponent {
  data:any;

  ngOnInit(): void {
    const token = localStorage.getItem("token");
    const payload = atob(token ? token.split(".")[1] : "");
    const val = JSON.parse(payload);
    this.data=val;
  }
}
