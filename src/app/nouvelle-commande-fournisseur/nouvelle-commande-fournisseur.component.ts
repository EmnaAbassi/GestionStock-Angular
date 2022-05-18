import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommandeFournisseur } from '../commande-fournisseur';
import { CommandeFournisseurService } from '../commande-fournisseur.service';

@Component({
  selector: 'app-nouvelle-commande-fournisseur',
  templateUrl: './nouvelle-commande-fournisseur.component.html',
  styleUrls: ['./nouvelle-commande-fournisseur.component.css']
})
export class NouvelleCommandeFournisseurComponent implements OnInit {
  four:CommandeFournisseur=new CommandeFournisseur();

  [x: string]: any;
  constructor(private router:Router, private Cfservice:CommandeFournisseurService) { }

  ngOnInit(): void {
  }
  public onAddCF(addForm: NgForm): void {
    this.Cfservice.addCF(addForm.value).subscribe(
      (response: CommandeFournisseur) =>{
        console.log(response);
      

      },
      (error: HttpErrorResponse )=> {
        alert(error.message);
      }
      );
        
      }
      saveCf(){
        this.Cfservice.addCF(this.four).subscribe(
          data=>{
            console.log(data);
            this.goToCfList();
          },
          error=>console.log(error)
          
        );
      }

      goToCfList(){
         this.router.navigate(['/commandesFournisseurs']);
      }
  
  onSubmit(){
    
    console.log(this.four);
    this.saveCf();
   
  }

  cancel(){
    this.router.navigate(['commandesFournisseurs']);
  }
}
