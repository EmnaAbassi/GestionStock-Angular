import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/utilisateur';
import { UtilisateurService } from 'src/app/utilisateur.service';

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.css']
})
export class NouvelUtilisateurComponent implements OnInit {
  [x: string]: any;

  user : Utilisateur = new Utilisateur();
  constructor(private router:Router,private userService:UtilisateurService) { }

  ngOnInit(): void {
  }
  cancel():void{
    this.router.navigate(['utilisateurs']);
  }

  public onAddUser(addForm: NgForm): void {
    this.userService.addUser(addForm.value).subscribe(
      (response: Utilisateur) =>{
        console.log(response);
      

      },
      (error: HttpErrorResponse )=> {
        alert(error.message);
      }
      );
        
      }
      saveUser(){
        this.userService.addUser(this.user).subscribe(
          data=>{
            console.log(data);
            this.goToUserList();
          },
          error=>console.log(error)
          
        );
      }

      goToUserList(){
         this.router.navigate(['/utilisateurs']);
      }
  

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
