const  User  = require('../Schemas/User.js');
const  AccountTransactions  = require('../Schemas/AccountsTransactions.js');
const  Balance  = require('../Schemas/Balances.js');

module.exports = class DataBase {
    constructor(){
        this.userDataBase = User;
        this.accountTransactions = AccountTransactions;
        this.balance = Balance;
    }

    async FindUserByEmail(email){
        let user =  await this.userDataBase.findOne({ email });
        return user;
    }
    async FindUserById(id){
        let user = await this.userDataBase.findById(id);
        return user;
    }
    async FindUserByAccountNumber(AccountNumber){
        let user = await this.userDataBase.findOne({ AccountNumber });
        return user;
    }

    async FindAccountTransactions(AccountNumber){
        let transactions = await this.accountTransactions.find({ AccountNumber });
        return transactions;
    }
    async FindAccountBalance(AccountNumber){
        let balance = await this.balance.findOne({ AccountNumber });
        return balance;
    }

    async UpdateAccountBalance(AccountNumber, Amount){
        let balance = await this.balance.findOne({ AccountNumber });
        let newBalance = balance.Balance + Amount;
        await this.balance.updateOne({ AccountNumber }, { $set: { Balance: newBalance } });
        return newBalance;
    }

    async CreateAccountTransaction(AccountNumber, MerchantName, TransactionAmount){
        let newTransaction = new this.accountTransactions({
            AccountNumber,
            MerchantName,
            TransactionAmount
        });
        await newTransaction.save();
        return newTransaction;
    }

    async CreateUser(name, email, password, age, address){
        let newUser = new this.userDataBase({
            name,
            email,
            password,
            age,
            address
        });
        await newUser.save();
        return newUser;
    }

    async CheckUserExists(email){
        let user = await this.userDataBase.findOne ({ email });
        if (!user) return false;
        return true;
    }

    async fetchAccountData(AccountNumber){
        let user = await this.userDataBase.findOne({ AccountNumber });
        let transactions = await this.accountTransactions.find({ AccountNumber });
        let balance = await this.balance.findOne({ AccountNumber });
        return { user, transactions, balance };
    }

}