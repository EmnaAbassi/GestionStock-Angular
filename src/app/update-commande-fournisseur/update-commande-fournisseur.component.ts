import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeFournisseur } from '../commande-fournisseur';
import { CommandeFournisseurService } from '../commande-fournisseur.service';

@Component({
  selector: 'app-update-commande-fournisseur',
  templateUrl: './update-commande-fournisseur.component.html',
  styleUrls: ['./update-commande-fournisseur.component.css']
})
export class UpdateCommandeFournisseurComponent implements OnInit {
 four: any;
  id!:number;
  constructor(private router:Router,private CFService:CommandeFournisseurService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.CFService.getCFById(this.id).
    subscribe(data =>{this.four=data;
   },
   error=>console.log(error));
  }

  UpdateCF(){
    this.CFService.UpdateCF(this.id,this.four)
    .subscribe(data=>{
      console.log(data);
      this.four=new CommandeFournisseur();
      this.goToCCFList();
    }, error=> console.log(error));
  }
  
  onSubmit(){
    this.UpdateCF();
  }

  goToCCFList(){
    this.router.navigate(['/commandesFournisseurs']);
 }

 cancel(){
  this.router.navigate(['commandesFournisseurs']);
}

}
