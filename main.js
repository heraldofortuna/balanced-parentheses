// Función que muestra la sección de las reglas.
const setRules = () => {
  const rules = document.querySelector(".rules");
  const application = document.querySelector(".application");

  rules.classList.remove("notDisplayed");
  application.classList.add("notDisplayed");
};

// Función que muestra la sección de la aplicación.
const setApplication = () => {
  const rules = document.querySelector(".rules");
  const application = document.querySelector(".application");

  rules.classList.add("notDisplayed");
  application.classList.remove("notDisplayed");
};

// Función que setea los ejemplos en el input al clickearlos.
const setExample = (example) => {
  const input = document.querySelector(".input");
  input.value = example.textContent;
};

// Función que procesa el texto ingresado y muestra el resultado.
const isBalanced = () => {
  const message = document.getElementById("message").value;
  const isBalanced = document.getElementById("isBalanced");

  isBalanced.innerHTML = balancedParentheses(message);
};

// Algoritmos que identifica si el "string" de entrada eso un mensaje de paréntesis balanceados.
// Retorna un string igual a "Balanceado" o "Desbalanceado" dependiendo del resultado.
const balancedParentheses = (str) => {
  const stack = []; // Creamos un array que funcionará como pila.

  for (let idx = 0; idx < str.length; idx += 1) {
    // Si encontramos un paréntesis abierto y no es parte de un emoticón, lo agregamos a la pila.
    if (str[idx] === "(") {
      if (str[idx - 1] !== ":") {
        stack.push(str[idx]);
      }
    }
    // Si encontramos un paréntesis cerrado y no es parte de un emoticón, lo quitamos de la pila.
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
