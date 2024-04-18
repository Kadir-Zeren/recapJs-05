yazdirMerhaba();

function yazdirMerhaba() {
  console.log("Merhaba 2024");
}
yazdirMerhaba();

const yazdir = function (message) {
  console.log(message);
};

yazdir("Hallo 2024");

let oddEven = function (number) {
  return number % 2 === 0 ? "EVEN" : "ODD";
};

console.log(oddEven(5));
console.log(oddEven(2));

const kareAl = (num) => num * num;
const topla = (s1, s2) => s1 + s2;
const ciktiVer = () => console.log("Merhaba");

console.log("KARE:", kareAl(4));
console.log("TOPLA:", topla(4, 5));
ciktiVer();

const findBiggest = (n1, n2, n3) => {
  let biggest = n1;

  if (n2 >= biggest) {
    biggest = n2;
  }
  if (n3 >= biggest) {
    biggest = n3;
  }

  return biggest;
};

console.log("BIGGEST:", findBiggest(1, 3, 2));

const findBiggestShort = (num1, num2, num3) => Math.max(num1, num2, num3);
console.log("BIGGEST:", findBiggestShort(1, 3, 2));
