import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user:Utilisateur=new Utilisateur();
  id!:number;
  constructor(private router:Router,private UserService:UtilisateurService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.UserService.getUserById(this.id).
    subscribe(data =>{this.user=data;
   },
   error=>console.log(error));
  }
  UpdateUser(){
    this.UserService.UpdateUser(this.id,this.user)
    .subscribe(data=>{
      console.log(data);
      this.user=new Utilisateur();
      this.goToUsersList();
    }, error=> console.log(error));
  }


  onSubmit(){
    this.UpdateUser();

  }


  goToUsersList(){
    this.router.navigate(['/utilisateurs']);
 }




  cancel(){
  this.router.navigate(['utilisateurs']);
  }
  saveClick(){

  }
}
