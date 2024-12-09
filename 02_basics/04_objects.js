// Singleton
const user = new Object();
user.id ="12345";
user.name = "Sam";
user.isLoggedIn = false;

console.log(user);

const anotherUser = {
    email: "Sam@gmail.com",
    fullName: {
        userName: {
            firstName: "Suresh",
            lastName: "Pradhan"
        }
    }
}

console.log(anotherUser.fullName.userName.firstName);

const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {
    3: "c",
    4: "d",
}

//const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2);

const obj4 = {
    ...obj1,
    ...obj2
}
console.log(obj3)
console.log(obj4)

const dbUser = [
    {id: 1, email: "sureshp@gmail.com"},
    {id: 1, email: "sureshp@gmail.com"},
    {id: 1, email: "sureshp@gmail.com"},
    {id: 1, email: "sureshp@gmail.com"},
    {id: 1, email: "sureshp@gmail.com"},
    {id: 1, email: "sureshp@gmail.com"},
]

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('email'));
