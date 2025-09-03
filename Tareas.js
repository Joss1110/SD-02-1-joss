//primero imprimo los numeros de 1 -105

for (let i = 1; i <= 105; i++) {
  console.log(i);
}

//despues en esa lista pongo a todos los numeros multiplos de 3 con la palabra "fizz"
for (let i = 1; i <= 105; i++) 
    {
  if (i % 3 === 0) {
    console.log("Fizz"); 
  } else {
    console.log(i); 
  }
}

// aqui agrego a todos los multiplos del 5 con la palabra "Buzz"
for (let i = 1; i <= 105; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//despues implemento la palabrea "woof" para todos los multiplos del 7
for (let i = 1; i <= 105; i++) {
  let output = "";

  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  if (i % 7 === 0) output += "Woof";

  console.log(output || i);
}



/*task1
for (let i = 0; i < 1; i++) {
    console.log("This is Task One!");
  };

  for (let i = 0; i < 1; i++) {
    console.log("This is Task Two!");
  };*/