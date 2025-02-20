abstract class Person {
    name: String;
    email: String;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    abstract displayInfo(): String;
}

export class FullAddress {
    street: string;
    city: string;
    zipcode: string;

    constructor(street: string, city: string, zipcode: string) {
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
    }

    getFullAddress(): string {
        return `${this.street}, ${this.city}, ${this.zipcode}`;
    }
}

export class UserDetails extends Person {
    fullAddress: FullAddress;

    constructor(name: string, email: string, fullAddress: FullAddress) {
        super(name, email);
        this.fullAddress = fullAddress;
    }

    displayInfo(): string {
        return `User: ${this.name}, Email: ${this.email}, Address: ${this.fullAddress.getFullAddress()}`;
    }
}
