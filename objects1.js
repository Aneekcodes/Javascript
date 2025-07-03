const mySym = Symbol("key1")

const JsUser ={
    name:"Aneek",
    "full name": "Aneek Mukherjee",
    [mySym]: "mykey1",//symbol has to be written like this format
    age: 20,
    location: "Jaipur",
    email: "mukherjeeaneek5@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Wednesday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email ="mukherjeeaneek@gmail.com"
//Object.freeze(JsUser)
//JsUser.email ="jbfjubjfwejfbwf@cedfe.com" //does not work as i freezed the object
console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello Aneek jii")
}

JsUser.greeting2= function(){
    console.log(`hello User: ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
