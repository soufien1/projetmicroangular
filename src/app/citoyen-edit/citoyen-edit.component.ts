import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitoyenService } from '../../services/citoyenservice';
import { Citoyen } from '../../model/model-citoyen';

@Component({
  selector: 'app-citoyen-edit',
  templateUrl: './citoyen-edit.component.html',
  styleUrls: ['./citoyen-edit.component.scss']
})
export class CitoyenEditComponent implements OnInit {
idCitoyen:number;
citoyen:Citoyen=new Citoyen();
mode:number=1;
  constructor(public activatedRoute:ActivatedRoute,public citoyenService:CitoyenService,public router:Router) { 
    this.idCitoyen=activatedRoute.snapshot.params['id'];
  }
 

  ngOnInit() {
    this.citoyenService.getcitoyenid(this.idCitoyen)
    .subscribe(data=>{
      this.citoyen=data;
    }, err=>{
console.log(err);
    })
  }
  updateCitoyen(){
this.citoyenService.updateCitoyen(this.citoyen)
.subscribe(data=>{
  console.log(data);
  alert("Mise à jour effectuée");
  this.router.navigate(['citoyen-list']);
},err=>{
  console.log(err);
  alert("Problem");
})
  }
}
