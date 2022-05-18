import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fournisseur } from './fournisseur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private apiUrl="http://localhost:8080/api/v1/FOUR";

  constructor(private httpClient:HttpClient) { }

  public getFournisseur():Observable<Fournisseur[]>{
    return this.httpClient.get<Fournisseur[]>(`${this.apiUrl}`);
  }

  public createFournisseur(f:Fournisseur): Observable<Fournisseur>{
    return this.httpClient.post<Fournisseur>(`${this.apiUrl}`, f);
  }
  
  public getFournisseurtById(id:number):Observable<Fournisseur>{
    return this.httpClient.get<Fournisseur>(`${this.apiUrl}/${id}`);
  }
public UpdateFournisseur(id:number,f:Fournisseur): Observable<Object>{
  return this.httpClient.put(`${this.apiUrl}/${id}`, f);
}

public deleteFournisseur(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.apiUrl}/${id}`);
}









}
