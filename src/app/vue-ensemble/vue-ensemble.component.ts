import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vue-ensemble',
  templateUrl: './vue-ensemble.component.html',
  styleUrls: ['./vue-ensemble.component.css']
})
export class VueEnsembleComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToArt(){
    this.router.navigate(['articles']);

  }
  goToCat(){
    this.router.navigate(['/categories']);
  }
  goToCl(){
    this.router.navigate(['clients']);
  }

  goToCC(){
    this.router.navigate(['CommandesClients']);
  }
  goToFR(){
    this.router.navigate(['fournisseurs']);
  }
  goToCf(){
    this.router.navigate(['commandesFournisseurs']);
  }

  goToUser(){
    this.router.navigate(['utilisateurs']);
  }



}
