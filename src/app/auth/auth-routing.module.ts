import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactLoginFormComponent } from "./contact-login-form/contact-login-form.component";
import { ContactSignUpFormComponent } from "./contact-sign-up-form/contact-sign-up-form.component";

const routes: Routes = [{ path: 'contact-login-form', component: ContactLoginFormComponent },
{ path: 'contact-sign-up-form', component: ContactSignUpFormComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }