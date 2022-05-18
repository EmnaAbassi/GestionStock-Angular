import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-dtail-fournisseur',
  templateUrl: './dtail-fournisseur.component.html',
  styleUrls: ['./dtail-fournisseur.component.css']
})
export class DtailFournisseurComponent implements OnInit {
  id!:number;
  client!:Fournisseur;
  constructor(private router:Router,private fournisseurService:FournisseurService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.client=new Fournisseur();
    this.fournisseurService.getFournisseurtById(this.id).subscribe(data=>{
         this.client=data;
    });
  }








  cancel(){
    this.router.navigate(['fournisseurs']);
  }
}
