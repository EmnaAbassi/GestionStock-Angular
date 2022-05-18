import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.css']
})
export class NouvelleCmdCltFrsComponent implements OnInit {
origin='';
  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>{4
      this.origin= data['origin'];
    }
      );
  }
  //yomkn mch shihsa f this.origine
  cancel():void{
    if(this.origin=='commande client'){
      this.router.navigate(['CommandesClients']);
    }else if(this.origin=='nouvellecommandeFrs'){
      this.router.navigate(['commandesFournisseurs']);
    }
  }
}
