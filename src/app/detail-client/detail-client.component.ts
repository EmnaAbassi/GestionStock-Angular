import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {
id!:number;
client!:Client;
  constructor(private router:Router,private clientService:ClientService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.client=new Client();
    this.clientService.getClientById(this.id).subscribe(data=>{
         this.client=data;
    });

  }

  cancel(){
    this.router.navigate(['clients']);
  }

}
