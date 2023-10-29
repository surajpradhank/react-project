# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Map Example -

const list = [ 'h', 'e', 'l', 'l', 'o'];
list.map((currElement, index) => {
  console.log("The current iteration is: " + index);
  console.log("The current element is: " + currElement);
  console.log("\n");
  return currElement; //equivalent to list[index]
});

Output -

The current iteration is: 0 <br>The current element is: h
The current iteration is: 1 <br>The current element is: e
The current iteration is: 2 <br>The current element is: l
The current iteration is: 3 <br>The current element is: l 
The current iteration is: 4 <br>The current element is: o