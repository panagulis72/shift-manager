export class User {
    public forename: string;
    public surname: string;
    public email: string;

    constructor(forename: string, surname: string, email: string){
        this.forename = forename;
        this.surname = surname;
        this.email = email;
    }
}