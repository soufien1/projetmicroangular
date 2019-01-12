// import { Injectable } from "@angular/core";
// import { Http } from "@angular/http";
// import { HttpClient } from "selenium-webdriver/http";


// @Injectable()
// export class SignService{
//     constructor(public http:HttpClient){

//     }
//     public postAuth(username:string, password:string){
//         var data= "username=" +username+ "&password=" +password+ "&grant_type=password";
//         // var reqHeader= new HttpHeaders({'authorization':'Basic YWRtaW5hcHA6cGFzc3dvcmQ='},{'Content-Type':'application/x-www-form-urlencoded'})
//         // return this.http.post("http://localhost:9092/uaa/oauth/token",data,{headers:reqHeader})
//         // .map(resp=>resp.json());
//     }
// }

import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';




@Injectable()
export class SignService{
    public token: string;
    constructor(public http:Http){

    }

    postAuth(username:string, password:string) {
        const headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Basic YWRtaW5hcHA6cGFzc3dvcmQ='
        })
        return this.http.post('http://localhost:9092/uaa/oauth/token', {
            username : "admin",
            password : "password",
            grant_type : "password"
        }, { headers: headers })
        .map(resp=>{
            console.log(resp);
            resp.json()
        });
      }
    // public postAuth(username:string, password:string){
    //     console.log(username, password);
    //     return this.http.post("http://localhost:9092/uaa/oauth/token", 
    //     {
    //         username : "admin",
    //         password : "password",
    //     }
    //     , {
    //         headers: new Headers({
    //             'authorization': 'Basic YWRtaW5hcHA6cGFzc3dvcmQ=',
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         })
    //       })
    //     .map(resp=>{
    //         console.log(resp);
    //         resp.json()
    //     });


    //     // // return this.http.get("http://localhost:9004/microservice-interieur/api/citoyens/"+cin)
    //     // // .map(resp=>resp.json());
    //     // const  reqheaders = new Headers();
    //     // reqheaders.set('Content-Type', 'application/x-www-form-urlencoded');
    //     // reqheaders.set('authorization', 'Basic YWRtaW5hcHA6cGFzc3dvcmQ=');
    //     // var data = {
    //     //     username : "admin",
    //     //     password : "password",
    //     // }
    //     // // var data= "username=" +username+ "&password=" +password+ "&grant_type=password";
    //     // // var reqHeader= new HttpHeaders({'authorization':'Basic YWRtaW5hcHA6cGFzc3dvcmQ='},{'Content-Type':'application/x-www-form-urlencoded'})
    //     // return this.http.post("http://localhost:9092/uaa/oauth/token", data, {
    //     //     headers: reqheaders
    //     //   })
    //     // .map(resp=>resp.json());
    // }
    logout() {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('refresh_token');
    }
}