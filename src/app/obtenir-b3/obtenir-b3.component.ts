import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { B3Service } from '../../services/B3Service';
import { B3 } from '../../model/model-b3';


@Component({
  selector: 'app-obtenir-b3',
  templateUrl: './obtenir-b3.component.html',
  styleUrls: ['./obtenir-b3.component.scss']
})
export class ObtenirB3Component implements OnInit {
  cin: number;
  b3: B3 = new B3();
  loaded: boolean = false;
  error: boolean = false;
  constructor(public http: Http, public b3service: B3Service) { }

  ngOnInit() {
  }
  
  rechercher() {
    this.b3service.getB3(this.cin)
      .subscribe(data => {
        this.b3 = data;
        this.loaded = true;
        this.error = false;
      }, err => {
        console.log(err);
        this.error = true;
        this.loaded = false;
      })
  }
}