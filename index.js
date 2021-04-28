/*
Description
Let's have some more practice with arrays! In this exercise we expect you to become more
acquainted with arrays, and what we can do with them.
So we start with an array of last names, and from there you're going to perform a bunch
of operations in it!

Instructions
- Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov
- Have a prompt that adds your last name to the array
- Have an output that has the names sorted alphabetically
- Have an output that tells you what is the position of your name in the sorted array
- Have an output that Uppercase's all names in the array

Tips
- Try to keep track of your data, and when it is being changed
- Remember to google docs if you don't know or remember certain details

Challenge
Let's take it a step further and group each sorted name with its upper-cased
one in a sub-array, which in its turn will go inside another array to group
it all together.
Output the result into the console.
*/

const names = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"];
names.push("Kudrashova");
console.log(names);
console.log(names.sort());
console.log(names.indexOf("Kudrashova"));
const upperCaseNames = [];
for (const name of names) {
  console.log(name.toUpperCase());
  upperCaseNames.push(name.toUpperCase());
}

// Challenge;

// Version 1
const upperAndLowerCaseNames = [];
for (let i = 0; i < names.length; i++) {
  const tempArray = [];
  tempArray.push(names[i]);
  tempArray.push(upperCaseNames[i]);
  upperAndLowerCaseNames.push(tempArray);
}
console.log(upperAndLowerCaseNames);

// Version 2
const finalArray = [];
for (const name of names) {
  const temp = [name, name.toUpperCase()];
  finalArray.push(temp);
}

console.log(finalArray);
