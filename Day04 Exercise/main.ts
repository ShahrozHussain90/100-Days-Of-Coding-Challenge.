//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, 
//but each message should be personalized with the person’s name.
let personName: string[] = ["Shahzaib","Furqan","minhaj",];
for (let name of personName)  {
     console.log(`hello ${name},would you like to play cricket?`);
}