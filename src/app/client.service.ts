import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
private apiUrl="http://localhost:8080/api/v1/client";
  constructor(private httpclient:HttpClient) { }


  public getClients():Observable<Client[]>{
    return this.httpclient.get<Client[]>(`${this.apiUrl}`);
  }

  public createClient(client:Client): Observable<Client>{
    return this.httpclient.post<Client>(`${this.apiUrl}`, client);
  }
  
  public getClientById(id:number):Observable<Client>{
    return this.httpclient.get<Client>(`${this.apiUrl}/${id}`);
  }
public UpdateClient(id:number,client:Client): Observable<Object>{
  return this.httpclient.put(`${this.apiUrl}/${id}`, client);
}

public deleteClient(id:number):Observable<Object>{
  return this.httpclient.delete(`${this.apiUrl}/${id}`);
}

public getClientss(){
  return this.httpclient.get(`${this.apiUrl}`);
}


}
