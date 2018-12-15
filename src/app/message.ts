import { User } from './user';

export class Message {
    private id:number;
     sujet:string;
     contenu:string;
     usersend:User;
     userreceive:User;
    constructor(){}

    
    public set $usersend(v : User) {
        this.usersend = v;
    }
    
    
}
