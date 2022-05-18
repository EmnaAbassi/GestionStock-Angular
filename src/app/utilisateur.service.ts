import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

 
  private basURL= "http://localhost:8080/api/v1/users";

  constructor(private httpClient:HttpClient) { }

public getUserList(): Observable<Utilisateur[]>{
  return this.httpClient.get<Utilisateur[]>(`${this.basURL}`);
}

public addUser(user:Utilisateur): Observable<Utilisateur>{
  return this.httpClient.post<Utilisateur>(`${this.basURL}`,user);
}

getUserById(id:number): Observable<Utilisateur>{
  return this.httpClient.get<Utilisateur>(`${this.basURL}/${id}`)
}



public UpdateUser(id:number,user:Utilisateur): Observable<Object>{
  return this.httpClient.put(`${this.basURL}/${id}`, user);
}

public deleteUser(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.basURL}/${id}`);
}


}
