const mongoose = require('mongoose');
const Session = require('./Classes/SessionCreate');

const connection = async () => {
    await mongoose
    .connect("mongodb+srv://application:46o9bQaYkBsf4q8p@users.z9pkksv.mongodb.net/?retryWrites=true&w=majority&appName=Users", {  })   
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));
   
}

const test = async () => {
    await connection();
    const session = new Session("23P0279@eng.asu.edu.eg", "123456");

    await session.CreateUser({
        name: "Ibrahim",
        email: "23P0279@eng.asu.edu.eg",
        password: "123456",
        age: "20",
        address: "New Cairo"});

    // await session.CheckUserExists();
    await session.CreateSession();
    await session.DisplayUserInformation();
}

test();
