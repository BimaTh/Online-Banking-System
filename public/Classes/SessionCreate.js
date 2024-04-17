const  DataBase  = require('./DB');
// const { Account } = require('./Account');
const  Log  = require('../JavaScript/ChalkLog');

module.exports = class Session {
    constructor(Email, Password) {
        this.Email = Email;
        this.Password = Password;
        this.AccountNumber;
        this.dataBase = new DataBase();
        this.log = new Log();
        this.Account;
        this.seesion = false;
        
    }

    
    // User Related Functions

    async CreateSession(){
        let user = await this.dataBase.userDataBase.findOne({ email: this.Email, password: this.Password });
        if (!user) {
            await this.log.error(`User not found with Email: ${this.Email} and Password: ${this.Password}`);
            return false;
        }
        this.AccountNumber = user._id;
        // Create a new session
        // this.account = Account(user.AccountNumber);
        this.session = true;
        return this.log.passed(`Session created with AccountNumber: ${this.AccountNumber}`);
    }

    async CheckUserExists(){
        let user = await this.dataBase.FindUserByEmail(this.Email);
        if (!user) {
            await this.log.error('Email does not exist: ' + this.Email);
            return false;
        }

        await this.log.passed('This Email Exists: ' + this.Email);
        return true; 
    }

    async CreateUser(name, email, password, age, address){

        let newUser = new this.dataBase.userDataBase({
            name,
            email,
            password,
            age,
            address
                
        });
        this.email = email;
        this.password = password;
        this.seesion = true;
        await newUser.save();
        await this.log.subwarn(`User created with id: ${newUser._id}`);
        return newUser._id;
    }

    async DisplayUserInformation(){
        if (!this.session) {
            await this.log.error(`Session not created`);
            return false;
        } else {
            let user = await this.dataBase.FindUserById(this.AccountNumber);
            if (!user) {
                await this.log.error(`User not found with AccountNumber: ${this.AccountNumber}`);
                return false;
            }
            this.log.warning(user);
            return user;
        }
    }


    // Account Related Functions

    async GatherTransactionHistory(){
        if (!this.session) {
            await this.log.error(`Session not created`);
            return false;
        } else {
            let user = await this.dataBase.accountTransactions.Transactions(this.AccountNumber);
            if (!user) {
                await this.log.error(`No transactions found for the User with AccountNumber: ${this.AccountNumber}`);
                return false;
            }
            this.log.warning(user);
            return user;
        }
    }
}