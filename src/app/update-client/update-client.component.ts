import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
client:Client=new Client();
id!:number;
  constructor(private router:Router,private clientService:ClientService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.id).
    subscribe(data =>{this.client=data;
   },
   error=>console.log(error));
  }
  UpdateClient(){
    this.clientService.UpdateClient(this.id,this.client)
    .subscribe(data=>{
      console.log(data);
      this.client=new Client();
      this.goToClientsList();
    }, error=> console.log(error));
  }


  onSubmit(){
    this.UpdateClient();

  }


  goToClientsList(){
    this.router.navigate(['/clients']);
 }




  cancelClick(){
  this.router.navigate(['clients']);
  }
  saveClick(){

  }

}
