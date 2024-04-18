function yazdirMerhaba() {
  console.log("Merhaba 2024");
}

yazdirMerhaba();
yazdirMerhaba();
yazdirMerhaba();

function yazdirParametre(message, name = new Date().getFullYear()) {
  console.log(message, name);
}

yazdirParametre("Hello", "2025");
yazdirParametre("Salut", "2026");
yazdirParametre("Hola", "2027");
yazdirParametre(12.4, true);

yazdirParametre("Hallo");
yazdirParametre("Ehlen");
yazdirParametre();

console.log(new Date());

function calculate(name, yob) {
  const age = new Date().getFullYear() - yob;
  console.log(`${name} is ${age} years old`);
  return age;
}

console.log(calculate("Ahmet", 1990));
const ismetAge = calculate("Ismet", 1890);
console.log("Ismet's Age:", ismetAge);

function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

function addShort(num1, num2) {
  return (num1 + num2) / (num1 * num2);
}

const result1 = add(3, 5);
const result2 = add(5, 9);
const result3 = addShort(5, 9);

console.log(result1, result2);
console.log(result3);

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
}

function isEvenOrOdd(num) {
  return num % 2 === 0 ? "EVEN" : "ODD";
}

const num = prompt("Please enter a number:");
console.log(`${num} is ${isEvenOrOdd(num)}`);
