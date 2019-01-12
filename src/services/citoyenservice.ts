import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Citoyen } from "../model/model-citoyen";

@Injectable()
export class CitoyenService{
constructor(public http:Http){

}
getcitoyen(chercher:string,page:number,size:number){
return this.http.get("http://localhost:9004/microservice-finance/chercherCitoyens?mc="+chercher+"&size"+"&page="+page)
.map(resp=>resp.json());
}
getcitoyenid(id:number){
    return this.http.get("http://localhost:9004/microservice-finance/citoyens/"+id)
    .map(resp=>resp.json());
    }
saveCitoyen(citoyen:Citoyen){
    return this.http.post("http://localhost:9004/microservice-finance/citoyens",citoyen)
    .map(resp=>resp.json());
    }
    sendnotification(){
        return this.http.get("http://localhost:9004/microservice-finance/Email/mailsending")
        .map(resp=>resp.json());
        }
updateCitoyen(citoyen:Citoyen){
    return this.http.put("http://localhost:9004/microservice-finance/citoyens/"+citoyen.id, citoyen)
    .map(resp=>resp.json());
        }
deleteCitoyen(id:number){
    return this.http.delete("http://localhost:9004/microservice-finance/citoyens/"+id)
    .map(resp=>resp.json());
            }
}
