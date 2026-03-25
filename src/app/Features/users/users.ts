import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../Services/user';


@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
Users!:Use[];
private readonly userService = inject(User);
constructor(){
    this.getAllUsers();
}

getAllUsers():void{
  this.userService.GetAllUsers().subscribe({
     next:(res)=>{
    this.Users = res.response.users;
    console.log(res);
    
    }
  })
}
confirmDeleteAll:boolean=false;
DeletAll():void
{
  this.confirmDeleteAll=confirm("Are u Sure Delete All")
  if(this.confirmDeleteAll)
 { 
  this.userService.DeleteAllUsers().subscribe({
    next:(res)=>{
      
    }
  })
}
this.getAllUsers()
}
}
 
interface Use{
  id:number;
  name:string;
  email:string;
  createdAt:Date;

}