import { User } from '../src/interfaces';

export class UserSummary {
    id: number;
    name: string;
    email: string;
    city: string;

    constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.city = user.address.city;
    }

    display(): string {
        return `User: ${this.name}, Email: ${this.email}, City: ${this.city}`;
    }
}
