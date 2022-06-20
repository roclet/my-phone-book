export class PhoneBookModel {
    public name: string;
    public phoneNumber: string;

    constructor(phoneNumber: string, name: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
}