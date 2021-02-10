import { promise } from "protractor";
import { FindValueSubscriber } from "rxjs/internal/operators/find";
import { resolve } from "url";

export class AuthService{
    isAuth=false;
    signIn(){
        return new Promise(
            (resolve, reject)=>
            setTimeout(
                ()=>{
                    this.isAuth=true;
                    resolve(true)
                },2000
            )
        )
    }

    signOut(){
        this.isAuth=false
    }

}