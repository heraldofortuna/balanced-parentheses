const rules = document.querySelector(".rules");
const application = document.querySelector(".application");
const rulesButton = document.querySelector("#rulesButton");
const applicationButton = document.querySelector("#applicationButton");

// Función que muestra la sección de las reglas.
const setRules = () => {
  rules.classList.remove("notDisplayed");
  application.classList.add("notDisplayed");
  rulesButton.classList.add("isFocus");
  applicationButton.classList.remove("isFocus");
};

// Función que muestra la sección de la aplicación.
const setApplication = () => {
  rules.classList.add("notDisplayed");
  application.classList.remove("notDisplayed");
  rulesButton.classList.remove("isFocus");
  applicationButton.classList.add("isFocus");
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

// Algoritmo que identifica si el "string" de entrada eso un mensaje de paréntesis balanceados.
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
    // Si encontramos un paréntesis cerrado y no es parte de un emoticón lo quitamos de la pila.
    // Además, si hay puntos entre 2 paréntesis, quitamos el paréntesis final del stack.
    if (str[idx] === ")") {
      if (
        str[idx - 1] !== ":" ||
        (str[idx - 1] === ":" && stack.length !== 0)
      ) {
        if (stack.length === 0) {
          return "Desbalanceado"; // Si la pila está vacía, significa que el texto es desbalanceado.
        }
        stack.pop();
      }
    }
    console.log(stack);
  }

  return stack.length === 0 ? "Balanceado" : "Desbalanceado";
};
