//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, 
//but each message should be personalized with the person’s name.
var personName = ["Shahzaib", "Furqan", "minhaj",];
for (var _i = 0, personName_1 = personName; _i < personName_1.length; _i++) {
    var name_1 = personName_1[_i];
    console.log("hello ".concat(name_1, ",would you like to play cricket?"));
}
