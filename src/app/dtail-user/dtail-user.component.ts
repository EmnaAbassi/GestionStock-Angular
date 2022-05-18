import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-dtail-user',
  templateUrl: './dtail-user.component.html',
  styleUrls: ['./dtail-user.component.css']
})
export class DtailUserComponent implements OnInit {
  id!:number;
  user!:Utilisateur;
  constructor(private router:Router,private userService:UtilisateurService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.user=new Utilisateur();
    this.userService.getUserById(this.id).subscribe(data=>{
         this.user=data;
    });

  }

  cancel(){
    this.router.navigate(['utilisateurs']);
  }


}
