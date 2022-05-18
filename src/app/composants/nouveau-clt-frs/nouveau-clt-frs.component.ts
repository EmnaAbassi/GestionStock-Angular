import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.css']
})
export class NouveauCltFrsComponent implements OnInit {
origin='';
[x: string]: any;

client : Client = new Client();
 constructor(
    private router:Router,private clientService:ClientService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>{
      this.origin= data['origin'];
    });

}
saveClick():void{
}

saveClient(){
  this.clientService.createClient(this.client).subscribe(data=>{
    console.log(data);
    this.goToClientList();
  },
  error=>console.log(error));
}

goToClientList(){
  this.router.navigate(['/clients']);
}


onSubmit(){
  console.log(this.client);
  this.saveClient();
}


cancelClick():void{
  if(this.origin=='client'){
    this.router.navigate(['clients']);
  }else if(this.origin=='fournisseur'){
    this.router.navigate(['fournisseurs']);
  }
}









}
