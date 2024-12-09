// Object literals. Values are stored in Keys and value pairs
const mySym = Symbol("key1");
const user = {
    name: "Suresh",
    "full Name": " Suresh Kumar Pradhan",
    [mySym]: "SymbolDataType",
    age: 30,
    location: "Odisha",
    email: "sureshp380@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Access Object 
console.log(user["email"])
console.log(user["full Name"]);
console.log(user[mySym]);

//Overwrite and Freeze object values
user.email = "Suresp9@orkut.com";
//Object.freeze(user);
user.email = "Suresh380@abc.com";
console.log(user);

user.greeting = function() {
    console.log("Hello World !");
}
user.greetingTwo = function() {
    console.log(`Hello World ! ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());



