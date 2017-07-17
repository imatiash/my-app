import { Injectable } from "@angular/core";
import { Http, Response}  from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";

import { LinksCommon } from "../common/links.common";
import { User } from "../models/user";

declare var jQuery: any;

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    redirectUrl: string;

private endpoint = `${LinksCommon.ENDPOINT}login`;

constructor(
    private http: Http
){
}
    logIn(email: string, password: string): Observable<User> {
       const URL = `${this.endpoint}/${email}/${password}`;
        console.log(URL);
        return this.http.get(URL)
        .map(
            response => {
                this.isLoggedIn = true;
                let ret = response.json() as User
            jQuery.cookie("user_id",`${ret.id}`, {expires: 7, path: "/"});
            return ret;
        }
        )
        .catch(
            error => this.errorHandler(error)
        )
    }

    logOut(): void {
        this.isLoggedIn = false;
    }

       private errorHandler(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || "";
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}