const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

for (const fruit of fruits) {
  let vowels = 0;
  let consonants = 0;
  for (const letter of fruit) {
    if (letter.match(/[aeiou]/i)) {
      vowels++;
    } else if (letter.match(/[bcdfghjklmnpqrstvwxyz]/i)) {
      consonants++;
    }
  }
  console.log(`${fruit}: vowels: ${vowels} consonants: ${consonants}`);
}
