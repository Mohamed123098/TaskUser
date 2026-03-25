import { Routes } from '@angular/router';
import { CreateUser } from './Features/create-user/create-user';
import { Users } from './Features/users/users';

export const routes: Routes = [
{path:'',redirectTo:'CreateUser',pathMatch:"full"},
{
    path:'CreateUser',component:CreateUser
},
{
    path:'Users',component:Users
}

];
