import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "src/Components/About/about.component";
import { HomeComponent } from "src/Components/Home/home.component";
import { LoginComponent } from "src/Components/Login/login.component";
import { RegisterComponent } from "src/Components/Register/register.component";
import { AuthGuard, HomeGuard } from "src/Guards/auth.guard";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [HomeGuard] },
  { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent, canActivate: [AuthGuard] },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
