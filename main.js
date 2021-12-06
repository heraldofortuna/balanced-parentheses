const isBalanced = () => {
  const message = document.getElementById("message").value;
  const isBalanced = document.getElementById("isBalanced");

  isBalanced.innerHTML = balancedParentheses(message);
};

const balancedParentheses = (str) => {
  const stack = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === "(") {
      if (str[idx - 1] !== ":") {
        stack.push(str[idx]);
      }
    }
    if (str[idx] === ")") {
      if (str[idx - 1] === ":") {
        if (str[idx - 2] === "(") {
          // console.log("No es una carita");
          stack.pop();
        } else {
          // console.log("Encontré una carita");
        }
      } else {
        if (stack.length === 0) {
          return "desbalanceados";
        }

        stack.pop();
      }
    }
  }

  return stack.length === 0 ? "balanceados" : "desbalanceados";
};

// console.log("a.", balancedParentheses("hola")); // Balanceado
// console.log("b.", balancedParentheses("(hola)")); // Balanceado
// console.log("c.", balancedParentheses("(()")); // Desbalanceado
// console.log("d.", balancedParentheses("(:)")); // Balanceado
// console.log("e.", balancedParentheses("no voy (:()")); // Balanceado
// console.log("f.", balancedParentheses("hoy pm: fiesta :):)")); // Balanceado
// console.log("g.", balancedParentheses(":((")); // Desbalanceado
// console.log("h.", balancedParentheses("a (b (c (d) c) b) a :)")); // Balanceado
