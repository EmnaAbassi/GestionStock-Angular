import { Component, EventEmitter , Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bouton-action',
  templateUrl: './bouton-action.component.html',
  styleUrls: ['./bouton-action.component.css']
})
export class BoutonActionComponent implements OnInit {
  
  @Input()
  isNouveauVisible=true;
  @Input()
  isExporterVisible=true;
  @Input()
  isImporterVisible=true;



   @Output()
   clickEvent= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
 
   bouttonNouveauClick():void{
     this.clickEvent.emit();
   }
  }
  
  


