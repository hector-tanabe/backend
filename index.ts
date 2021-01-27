console.log('Hello Bootcampers');

function doSomething(current : Person) : String {
    console.log(`Hey ${current.firstName} ${current.lastName}`);
    return (`Hey ${current.firstName} ${current.lastName}`);
}

const hector: Person = {
    firstName: 'Héctor Alejandro',
    lastName: 'Tanabe Herbas'
}

doSomething(hector);

interface Person {
    firstName: String,
    lastName: String
}