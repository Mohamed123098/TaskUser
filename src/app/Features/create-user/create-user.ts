import { Component, inject } from '@angular/core';
import{FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

import { Subscription } from 'rxjs';
import { User } from '../Services/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.css',
})
export class CreateUser {
CreateUserForm:FormGroup=new FormGroup({
  name : new FormControl("",Validators.minLength(3)),
  email:new FormControl("",Validators.email)
});

private readonly userService = inject(User);
private readonly router = inject(Router)
error : string="";
submitForm():void
{
  if(this.CreateUserForm.valid)
  {
    this.userService.CreateUser(this.CreateUserForm.value).subscribe({
      next:(res)=>{
        if(res.response.isSuccess)
        {
           this.router.navigate(['/Users'])
        }
        this.error = res.response.errorMessage
      },
      error:(err)=>{
        this.error = err.response.errorMessage
        console.log(err.response.errorMessage);
        this.router.navigate(['/CreateUser'])
      }
    })
    


  }
}
}
