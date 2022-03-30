import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  isLoggedIn() {
    const token = localStorage.getItem("token");
    if (!token) return false;
    const payload = atob(token ? token.split(".")[1] : "");
    const val = JSON.parse(payload);
    const valid = val.exp > Date.now() / 1000;
    return valid;
  }
}
