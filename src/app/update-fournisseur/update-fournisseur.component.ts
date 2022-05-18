import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: ['./update-fournisseur.component.css']
})
export class UpdateFournisseurComponent implements OnInit {
  client:Fournisseur=new Fournisseur();
  id!:number;
  constructor(private router:Router,private fournisseurService:FournisseurService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fournisseurService.getFournisseurtById(this.id).
    subscribe(data =>{this.client=data;
   },
   error=>console.log(error));
  }
  Updatefournisseur(){
    this.fournisseurService.UpdateFournisseur(this.id,this.client)
    .subscribe(data=>{
      console.log(data);
      this.client=new Fournisseur();
      this.goToClientsList();
    }, error=> console.log(error));
  }


  onSubmit(){
    this.Updatefournisseur();

  }


  goToClientsList(){
    this.router.navigate(['/fournisseurs']);
 }
  saveClick(){

  }


  cancelClick(){
    this.router.navigate(['fournisseurs']);
    }

}
