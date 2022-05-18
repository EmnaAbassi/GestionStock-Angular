import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/utilisateur';
import { UtilisateurService } from 'src/app/utilisateur.service';

@Component({
  selector: 'app-page-utilisateurs',
  templateUrl: './page-utilisateurs.component.html',
  styleUrls: ['./page-utilisateurs.component.css']
})
export class PageUtilisateursComponent implements OnInit {
  public users! : Utilisateur[];

  constructor(private router:Router,private userService:UtilisateurService) { }

  ngOnInit(): void {
     this.getUser();
  }
  
  public getUser():void{
    this.userService.getUserList().subscribe(
      data => {
        this.users=data;
      }
    );
  }
 

  newUser():void{
    this.router.navigate(['nouvelutilisateur']);
  }
 updateUser(id:number){
  this.router.navigate(['updateUser',id]);

 }

 deleteUser(id:number){
  this.userService.deleteUser(id).subscribe(data =>
    {
      console.log(data);
      this.getUser();
    })
 }
 DetailUser(id:number){
  this.router.navigate(['Userdetails',id]);
 }
}
