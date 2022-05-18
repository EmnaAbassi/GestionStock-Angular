import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-create-fournisseur',
  templateUrl: './create-fournisseur.component.html',
  styleUrls: ['./create-fournisseur.component.css']
})
export class CreateFournisseurComponent implements OnInit {
  client : Fournisseur = new Fournisseur();
  constructor(private router:Router, private fournisseurService:FournisseurService) { }

  ngOnInit(): void {
  }
  savef(){
    this.fournisseurService.createFournisseur(this.client).subscribe(data=>{
      console.log(data);
      this.goToClientList();
    },
    error=>console.log(error));
  }
  
  goToClientList(){
    this.router.navigate(['/fournisseurs']);
  }
  
  
  onSubmit(){
    console.log(this.client);
    this.savef();
  }

 
  saveClick():void{
  }

  cancelClick():void{
      this.router.navigate(['fournisseurs']);
  }

}
