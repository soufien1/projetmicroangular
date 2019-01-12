import { Injectable } from "@angular/core";
import { Http } from "@angular/http";



@Injectable()
export class B3Service{
    constructor(public http:Http){

    }
    getB3(cin:number){
        return this.http.get("http://localhost:9004/microservice-interieur/api/citoyens/"+cin)
        .map(resp=>resp.json());
    }
}