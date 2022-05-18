import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeClient } from '../commande-client';
import { CommandeClientService } from '../commande-client.service';

@Component({
  selector: 'app-update-commande-client',
  templateUrl: './update-commande-client.component.html',
  styleUrls: ['./update-commande-client.component.css']
})
export class UpdateCommandeClientComponent implements OnInit {
  id!: number;
  commande: CommandeClient= new CommandeClient();
  constructor(private ccService:CommandeClientService  ,
   private route: ActivatedRoute,
   private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ccService.getCCById(this.id).
    subscribe(data =>{this.commande=data;
   },
   error=>console.log(error));
   
   }
  
   onSubmit():void{
     this.ccService.UpdateCC(this.id,this.commande).subscribe(data =>
       {
               this.goToCCList();
       },
       error=> console.log(error)
       
       );
   }


  goToCCList(){
    this.router.navigate(['/CommandesClients']);
 }




 cancel(){
  this.router.navigate(['CommandesClients']);
  }
}
