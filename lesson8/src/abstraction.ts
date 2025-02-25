abstract class Person {
    protected name: string;
    protected email: string;

    public constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    protected abstract displayInfo(): string;
}

export class FullAddress {
    protected street: string;
    protected city: string;
    protected zipcode: string;

    public constructor(street: string, city: string, zipcode: string) {
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
    }

    public getFullAddress(): string {
        return `${this.street}, ${this.city}, ${this.zipcode}`;
    }
}

export class UserDetails extends Person {
    protected fullAddress: FullAddress;

    public constructor(name: string, email: string, fullAddress: FullAddress) {
        super(name, email);
        this.fullAddress = fullAddress;
    }

    public displayInfo(): string {
        return `User: ${this.name}, Email: ${this.email}, Address: ${this.fullAddress.getFullAddress()}`;
    }
}
