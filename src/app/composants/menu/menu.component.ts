import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuProperties :Array<Menu> =[
   {

     id: '1',
     titre: 'Tableau de bord',
     icon: 'fa-solid fa-chart-line',
     url:'' ,
     sousMenu:[
       {
         id:'11',
         titre:'Vue d*ensemble',
         icon:'fa-solid fa-chart-pie',
         url:'VueEnsemble'


       },

       {
        id:'12',
        titre:'Statistiques',
        icon:'fa-solid fa-chart-column',
        url:'statistiques'


       }
     ]
    },
       {
        id:'2',
        titre:'Articles',
        icon:'fa-solid fa-boxes-stacked',
        url:'',
        sousMenu: [
        {
            id:'21',
        titre:'Articles',
        icon:'fa-brands fa-product-hunt',
        url:'articles'
          },

          {
            id:'22',
        titre:'Movements du stock',
        icon:'fa-solid fa-arrow-trend-up',
        url:'mvtstk'
          }



          
        ]

       },

       {
        id:'3',
        titre:'Clients',
        icon:'fa-solid fa-user',
        url:'',
        sousMenu: [
        {
            id:'31',
        titre:'Clients',
        icon:'fa-solid fa-person',
        url:'clients'
          },

          {
            id:'32',
        titre:'Commandes Clients',
        icon:'fa-solid fa-basket-shopping',
        url:'CommandesClients'
          }

          

          
        ]

       },
      
       {
        id:'4',
        titre:'Fournisseurs',
        icon:'fa-solid fa-user',
        url:'',
        sousMenu: [
        {
            id:'41',
        titre:'Fournisseurs',
        icon:'fa-solid fa-person',
        url:'fournisseurs'
          },

          {
            id:'42',
        titre:'Commandes Fournisseurs',
        icon:'fa-solid fa-basket-shopping',
        url:'commandesFournisseurs'
          }

          

          
        ]

       },

       {
        id:'5',
        titre:'Parametrage',
        icon:'fa-solid fa-gears',
        url:'',
        sousMenu: [
        {
            id:'51',
        titre:'Categories',
        icon:'fa-solid fa-shapes',
        url:'categories'
          },

          {
            id:'52',
        titre:'Utilisateurs',
        icon:'fa-solid fa-users',
        url:'utilisateurs'
          }

          

          
        ]

       }

];

  constructor(
     private router:Router
  ){}

  ngOnInit(): void {
  }
  //methode navigate

  navigate(url?:string):void{
       this.router.navigate([url]);
  }

}
