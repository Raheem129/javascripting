const pets = ['cat', 'dog', 'rat'];

// Loop through each element in the pets array
for (let i = 0; i < pets.length; i++) {
  // Append the letter 's' to the current element in the array
  pets[i] = pets[i] + 's';
}

// Print the updated pets array to the console
console.log(pets);