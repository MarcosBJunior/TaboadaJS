


let tab = Number(prompt("digite a tabuada: "));

for (let i = 0; i <= 10; i = i + 1) {
  console.log(tab + " x " + i + " = " + (tab * i))
}

console.log("------------------------------------")

let cont = 0

while (cont <= 10) {
  console.log(tab + " x " + cont + " = " + (tab * cont))
  cont = cont + 1;

}

console.log("------------------------------------")

let y = 0

do {
  console.log(tab + " x " + y + " = " + (tab * y))
  y = y + 1;
} while (y <= 10);
