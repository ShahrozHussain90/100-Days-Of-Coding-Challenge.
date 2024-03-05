//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.

let personName2: string = "Shahzaib khan";
//In LowerCase,
console.log(personName2.toLowerCase());
//In upperCase,
console.log(personName2.toUpperCase());
//In titleCase,
console.log(personName2.replace(/\b\w/g, (Name) => Name.toUpperCase()));
