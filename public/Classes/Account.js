
module.exports = class Account {

    constructor(AccountNumber) {
        this.AccountNumber = AccountNumber;

    }

    getAccountNumber() {
        return this.AccountNumber;
    }

    getAccountName() {
        return this.AccountName;
    }

    getAccountEmail() {
        return this.AccountEmail;
    }

    getBalance() {
        return this.Balance;
    }

    

}