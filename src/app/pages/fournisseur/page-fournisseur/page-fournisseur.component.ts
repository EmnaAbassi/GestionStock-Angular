import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from 'src/app/fournisseur';
import { FournisseurService } from 'src/app/fournisseur.service';

@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './page-fournisseur.component.html',
  styleUrls: ['./page-fournisseur.component.css']
})
export class PageFournisseurComponent implements OnInit {
  public clients!:Fournisseur[];

  constructor(private router:Router,private fournisseurService:FournisseurService) { }

  ngOnInit(): void {
    this.getFour();
  }

  public getFour():void{
    this.fournisseurService.getFournisseur()
    .subscribe(
      (reponse: Fournisseur[]) =>{
        this.clients=reponse;
      },
      (error: HttpErrorResponse)=>{
           alert(error.message);
      }
      );
    
    
  }


  newFournisseur():void{
    this.router.navigate(['nouveauFournisseur']);
  }

  updateClient(id:number){
    this.router.navigate(['updateFournisseur',id]);


  }

  deletefour(id:number){
    this.fournisseurService.deleteFournisseur(id).subscribe(data=>
      {console.log(data);
      this.getFour();
      })
   }

  

  ClientDetails(id:number){
    this.router.navigate(['detailFournisseur',id]);

  }

}
