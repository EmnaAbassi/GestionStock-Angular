import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeFournisseur } from '../commande-fournisseur';
import { CommandeFournisseurService } from '../commande-fournisseur.service';

@Component({
  selector: 'app-page-commande-fournisseurs',
  templateUrl: './page-commande-fournisseurs.component.html',
  styleUrls: ['./page-commande-fournisseurs.component.css']
})
export class PageCommandeFournisseursComponent implements OnInit {
  origin='';

  cf:any=[];
  public CFS!:CommandeFournisseur[];

  constructor(private router:Router, private CFservice:CommandeFournisseurService) { }

  ngOnInit(): void {
   /* let resp = this.CFservice.getCFList()
    resp.subscribe(data=>{this.cf=data;
    console.log("he", this.cf)})*/
    this.getCommande();
  }

  public getCommande():void{
    this.CFservice.getCFList().subscribe(
      data => {
        this.CFS=data;
      }
    );
  }

  updateCmd(id:number){
    this.router.navigate(['updateCF',id]);

  }

deleteCmd(id:number){
  this.CFservice.deleteCF(id).subscribe(data =>
    {
      console.log(data);
      this.getCommande();
    })
}

DetailCmd(id:number){
  this.router.navigate(['detail-CommandeFournisseur',id]);
}

newCommandeFournisseur(){
  this.router.navigate(['nouvellecommandeFrs']);
}









}
