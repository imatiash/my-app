
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http, Response } from "@angular/http";

//Promice
import "rxjs/add/operator/toPromise";

//Observable
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/catch";
// import "rxjs/add/observable/throw";
// import { Observable } from "rxjs/Observable";



@Injectable()
export class UserService {

     private users: User[];

    // private users: User[] = [
    //     { id: 1, firstName: "John", lastName: "Johnson", email: "jjohnson@mail.com", age: "36" },
    //     { id: 2, firstName: "Jack", lastName: "Jackson", email: "jjackson@mail.com", age: "25" },
    //     { id: 3, firstName: "Lois", lastName: "Lane", email: "llane@mail.com", age: "27" },
    //      { id: 4, firstName: "Kate", lastName: "King", email: "kking@mail.com", age: "31" }
    //   ]

    constructor (
        private http: Http
    ) {}

//Promise
    getUsers(): Promise<User[]>  {
        const URL = "./assets/user.json";

        return this.http.get(URL)
                        .toPromise()
                        .then(
                           // response => this.users
                            response => response.json() as User[]
                        )
                        .catch(
                            err => this.errorHandler(err)
                        );
    }

   private errorHandler(err: Error) {
        console.error(err);
    }

//Observable
    // getUsers(): Observable<User[]>  {
    //     const URL = "./assets/user.json"
    //     return this.http.get(URL)
    //                     .map(response => response.json() as User[]
    //                     )
    //                     .catch(
    //                         err => this.errorHandler(err)
    //                     );
    // }

    // private errorHandler(err: Error) {
    //     return Observable.throw(err);
    // }

   addUser(user: User) {
       //change variable user to use adding 
       let usr = user;
       if(usr.id === undefined || usr.id === null)
       {
        usr.id = this.users.length + 1;
        usr.state = "inactive";
        this.users.push(usr);
       }
       else{
           this.editUser(usr);
       }
        
    }

    editUser (user: User){
    let i: number = this.users.findIndex(item => item.id === user.id);
    if(i !== -1)
        this.users[i] = user;
}

registerUser (data: User): Promise<User> {
const URL = "api/addUser";
return this.http.post(URL,data, this.headers)
.toPromise()
.then(
    response => response.json() as User
)
.catch(
    error => this.errorHandler(error)
)
}

private headers: Headers =  new Headers ({ "Content-Type": "application/json"});
//    addUser(user: User) {
//        //change variable user to use adding 
//        let usr = user;
//        if(usr.id === undefined || usr.id === null)
//        {
//         usr.id = this.users.length + 1;
//         this.users.push(usr);
//        }
//        else{
//            this.editUser(usr);
//        }
        
//     }

// editUser (user: User){
//     let i: number = this.users.findIndex(item => item.id === user.id);
//     if(i !== -1)
//         this.users[i] = user;
// }
}