import { Component, OnInit } from '@angular/core';
import { Citoyen } from '../../model/model-citoyen';
import { CitoyenService } from '../../services/citoyenservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citoyen-form',
  templateUrl: './citoyen-form.component.html',
  styleUrls: ['./citoyen-form.component.scss']
})
export class CitoyenFormComponent implements OnInit {


  constructor(public citoyenservice: CitoyenService,public router:Router) { }

  ngOnInit() {
  }
  
  onSaveCitoyen(dataForm){
this.citoyenservice.saveCitoyen(dataForm)
.subscribe(data=>{
console.log(data);
alert("Mise à jour effectuée");
  this.router.navigate(['citoyen-list']);
},err=>{
console.log(JSON.parse(err._body).message);
})
  }
  
}
