import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeClient } from '../commande-client';
import { CommandeClientService } from '../commande-client.service';

@Component({
  selector: 'app-dtail-commande-client',
  templateUrl: './dtail-commande-client.component.html',
  styleUrls: ['./dtail-commande-client.component.css']
})
export class DtailCommandeClientComponent implements OnInit {
  id!:number;
  cc:any=[];
  constructor(private router:Router,private CCService:CommandeClientService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.cc=new CommandeClient();
    this.CCService.getCCById(this.id).subscribe(data=>{
         this.cc=data;
    });
  }



  cancel(){
    this.router.navigate(['CommandesClients']);
  }

}
