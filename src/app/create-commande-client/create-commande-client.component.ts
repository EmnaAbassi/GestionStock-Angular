import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommandeClient } from '../commande-client';
import { CommandeClientService } from '../commande-client.service';

@Component({
  selector: 'app-create-commande-client',
  templateUrl: './create-commande-client.component.html',
  styleUrls: ['./create-commande-client.component.css']
})
export class CreateCommandeClientComponent implements OnInit {
  cc:CommandeClient  = new CommandeClient();
  
  [x: string]: any;
  constructor(private router:Router, private CCService:CommandeClientService) { }

  ngOnInit(): void {
  }
  public onAddCC(addForm: NgForm): void {
    this.CCService.addCC(addForm.value).subscribe(
      (response: CommandeClient) =>{
        console.log(response);
      

      },
      (error: HttpErrorResponse )=> {
        alert(error.message);
      }
      );
        
      }
      saveCC(){
        this.CCService.addCC(this.cc).subscribe(
          data=>{
            console.log(data);
            this.goToCCList();
          },
          error=>console.log(error)
          
        );
      }

      goToCCList(){
         this.router.navigate(['/CommandesClients']);
      }
  
  onSubmit(){
    
    console.log(this.cc);
    this.saveCC();
   
  }



  cancel():void{
    this.router.navigate(['CommandesClients']);
  }

}


