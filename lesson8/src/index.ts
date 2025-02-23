import { FullAddress } from './abstraction';
import { UserDetails } from './abstraction';

const address = new FullAddress('1 High str', 'Winterfell', 'NRTH 001');

const user = new UserDetails('John Snow', 'john.snow@winterfell.co', address);

console.log(user.displayInfo());

user.name = 'Aegon Targaryen';
user.fullAddress.city = "King's Landing";

console.log(user.displayInfo());
