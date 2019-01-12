import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { CitoyenService } from '../../services/citoyenservice';
import { Router } from '@angular/router';
import { Citoyen } from '../../model/model-citoyen';


@Component({
  selector: 'app-citoyen-list',
  templateUrl: './citoyen-list.component.html',
  styleUrls: ['./citoyen-list.component.scss']
})
export class CitoyenListComponent implements OnInit {
   pageCitoyens:any;
   chercher:string="";
   page:number=0;
   size:number=5;
   pages:Array<number>;
  constructor(public http:Http, public citoyenservice:CitoyenService, public router:Router) { }

  ngOnInit() {
   this.rechercher();
  }
  doSearch(){
    this.citoyenservice.getcitoyen(this.chercher,this.page,this.size)
    .subscribe(data=>{
      this.pageCitoyens=data;
      this.pages=new Array(data.totalPages);
    },err=>{
      console.log(err);
    })
  }
rechercher(){
this.doSearch();
}
suivant(i:number){
this.page=i;
this.doSearch();
}
onEditCitoyen(id:number){
this.router.navigate(['citoyen-edit',id]);
}
onDeleteCitoyen(c:Citoyen){
  let confirm=window.confirm('Êtes-vous sûr de vouloir supprimer ce Citoyen ?');
  if (confirm==true){
    this.citoyenservice.deleteCitoyen(c.id)
    .subscribe(data=>{
  this.pageCitoyens.content.splice(
    this.pageCitoyens.content.indexOf(c),1
  );
    },err=>{
  console.log(err);
    })
  }
  
}
}
