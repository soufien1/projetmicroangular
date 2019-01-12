import { Component, OnInit } from '@angular/core';
import { CnamService } from '../../services/CnamService';
import { Http } from '@angular/http';
import { CNAM } from '../../model/model-cnam';

@Component({
  selector: 'app-releve-cnam',
  templateUrl: './releve-cnam.component.html',
  styleUrls: ['./releve-cnam.component.scss']
})
export class ReleveCnamComponent implements OnInit {
  numaff:number;
  cnam:object;
  loaded:boolean=false;
  error:boolean=false;
  constructor(public http:Http,public cnamservice:CnamService ) { }

  ngOnInit() {
  }
  rechercher(){
    this.cnamservice.getCnam(this.numaff)
    .subscribe(data=>{
      console.log(data);
      this.cnam=data.cnams;
      this.loaded=true;
      this.error=false;
    },err=>{
      console.log(err);
      this.error=true;
      this.loaded=false;
    })
  }
}
