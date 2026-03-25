import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  private readonly httpClient = inject(HttpClient);
  CreateUser(user:any):Observable<any>
  {
    return this.httpClient.post('http://taskofinternship.runasp.net/api/user',user);
  }

  GetAllUsers():Observable<any>
  {
    return this.httpClient.get('http://taskofinternship.runasp.net/api/user');
  }
  DeleteAllUsers():Observable<any>
  {
    return this.httpClient.get('http://taskofinternship.runasp.net/api/user/Delete')
  }
}
