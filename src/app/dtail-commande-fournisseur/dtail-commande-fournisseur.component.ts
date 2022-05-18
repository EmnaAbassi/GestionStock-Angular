import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeFournisseur } from '../commande-fournisseur';
import { CommandeFournisseurService } from '../commande-fournisseur.service';

@Component({
  selector: 'app-dtail-commande-fournisseur',
  templateUrl: './dtail-commande-fournisseur.component.html',
  styleUrls: ['./dtail-commande-fournisseur.component.css']
})
export class DtailCommandeFournisseurComponent implements OnInit {
  id!:number;
  four:any=[];
  constructor(private router:Router,private CFService:CommandeFournisseurService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.four=new CommandeFournisseur();
    this.CFService.getCFById(this.id).subscribe(data=>{
         this.four=data;
    });
  }






  cancel(){
    this.router.navigate(['commandesFournisseurs']);
  }
}
