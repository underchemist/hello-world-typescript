interface Person {  
    firstName: string; 
    lastName: string; 
}

function greeter(person: Person) { 
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Sebastien", lastName: "Tremblay-Johnston"};

document.body.textContent = greeter(user);