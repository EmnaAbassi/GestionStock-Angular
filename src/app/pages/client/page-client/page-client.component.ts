import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.css']
})
export class PageClientComponent implements OnInit {
public clients!:Client[];
public editClient!: Client;
  public deleteClient!: Client;
  constructor(private clientService:ClientService,private router:Router) { }

  ngOnInit(): void {
      this.getClients();
  }
  public getClients():void{
    this.clientService.getClients()
    .subscribe(
      (reponse: Client[]) =>{
        this.clients=reponse;
      },
      (error: HttpErrorResponse)=>{
           alert(error.message);
      }
      );
    
    
  }
  updateClient(id:number){
    this.router.navigate(['updateClient',id]);

  }

  deleteProduct(id:number){
    this.clientService.deleteClient(id).subscribe(data=>
      {console.log(data);
      this.getClients();
      })}

  

  ClientDetails(id:number){
    this.router.navigate(['detailClient',id]);
    
  }
  

  searchClients(){

  }

































  newClient():void{
    this.router.navigate(['nouveauClient']);
  }
}
