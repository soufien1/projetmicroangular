import { Injectable } from "@angular/core";
import { Http } from "@angular/http";



@Injectable()
export class CnamService{
    constructor(public http:Http){

    }
    getCnam(numaff:number){
        return this.http.get("http://localhost:9004/microservice-cnam/api/citoyens/"+numaff)
        .map(resp=>resp.json());
    }
}