
console.log("I'm ready!");
// Iteration 1: Names and Input
//
// A variable hacker1 with the driver's name.
const hacker1 = "Manoj Kashyap"; // 

//Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`);

//Create a variable hacker2 with the navigator's name.
const hacker2 = "Manish poduval"; // 

//Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
  

// Iteration 3: Loops


// Compare the lexicographic order of the names
const nameComparison = hacker1.localeCompare(hacker2);

// Print the result based on the comparison
if (nameComparison < 0) {
  console.log("The driver's name goes first.");
} else if (nameComparison > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

