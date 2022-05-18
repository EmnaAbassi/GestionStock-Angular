import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeClient } from 'src/app/commande-client';
import { CommandeClientService } from 'src/app/commande-client.service';

@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrls: ['./page-cmd-clt-frs.component.css']
})
export class PageCmdCltFrsComponent implements OnInit {
 
  origin='';

  cc:any=[];
  
  public CCS!:CommandeClient[];

  constructor(
    private router:Router,
    private activatedRouter: ActivatedRoute, private CCService:CommandeClientService
    ) { }

  ngOnInit(): void {
    this.getCommande();
    /*this.activatedRouter.data.subscribe(data => {
      this.origin = data['origin'];

      let resp = this.CCService.getCCList()
      resp.subscribe(data=>{this.cc=data;
      console.log("he", this.cc)})
    });*/
  }

  public getCommande():void{
    this.CCService.getCCList().subscribe(
      data => {
        this.CCS=data;
      }
    );
  }
  

  newCommandeClient():void{
    /*
    if (this.origin=='client'){
      this.router.navigate(['nouvellecommandeClt']);

    }else if(this.origin=='fournisseur'){
      this.router.navigate(['nouvellecommandeFrs']);
    }*/
    this.router.navigate(['nouvellecommandeClt']);
  }

  updateCmd(id:number){
    this.router.navigate(['updateCC',id]);

  }

  deleteCmd(id:number){
    this.CCService.deleteCC(id).subscribe(data =>
      {
        console.log(data);
        this.getCommande();
      })
  }



DetailCmd(id:number){
  this.router.navigate(['detail-CommandeClient',id]);

}





}
