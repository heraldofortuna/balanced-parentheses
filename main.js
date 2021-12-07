const setRules = () => {
  const rules = document.querySelector(".rules");
  const application = document.querySelector(".application");

  rules.classList.remove("notDisplayed");
  application.classList.add("notDisplayed");
};

const setApplication = () => {
  const rules = document.querySelector(".rules");
  const application = document.querySelector(".application");

  rules.classList.add("notDisplayed");
  application.classList.remove("notDisplayed");
};

const setExample = () => {
  const example = document
    .querySelectorAll(".application__examples__list li")
    .forEach((item) => {
      console.log(item);
    });

  console.log(example);
};

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
          return "Desbalanceado";
        }

        stack.pop();
      }
    }
  }

  return stack.length === 0 ? "Balanceado" : "Desbalanceado";
};

// console.log("a.", balancedParentheses("hola")); // Balanceado
// console.log("b.", balancedParentheses("(hola)")); // Balanceado
// console.log("c.", balancedParentheses("(()")); // Desbalanceado
// console.log("d.", balancedParentheses("(:)")); // Balanceado
// console.log("e.", balancedParentheses("no voy (:()")); // Balanceado
// console.log("f.", balancedParentheses("hoy pm: fiesta :):)")); // Balanceado
// console.log("g.", balancedParentheses(":((")); // Desbalanceado
// console.log("h.", balancedParentheses("a (b (c (d) c) b) a :)")); // Balanceado
