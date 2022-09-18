import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPage } from './sign-in/sign-in.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    children: [
      {
        path: 'sign-in',
        component: SignInPage
      },
      {
        path: '**',
        redirectTo: 'sign-in'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
