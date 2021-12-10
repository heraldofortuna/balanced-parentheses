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

// Algoritmo que identifica si el "string" de entrada es un mensaje de paréntesis balanceados.
// Retorna un string igual a "Balanceado" o "Desbalanceado" dependiendo del resultado.
const balancedParentheses = (str) => {
  let parentheses = 0; // Creamos un contador que funcionará como pila.
  let emoticons = 0; // Creamos un contador de emoticones.

  for (let idx = 0; idx < str.length; idx += 1) {
    // Si encontramos un paréntesis abierto, aumentamos en uno a la pila.
    if (str[idx] === "(") {
      parentheses += 1;
      if (str[idx - 1] === ":") {
        emoticons += 1; // Si encontramos dos puntos antes de un paréntesis abierto, lo contamos como emoticón.
      }
    }
    // Si encontramos un paréntesis cerrado, disminuimos en 1 a la pila.
    if (str[idx] === ")") {
      parentheses -= 1;
      if (str[idx - 1] === ":") {
        emoticons += 1; // Si encontramos dos puntos antes de un paréntesis cerrado, lo contamos como emoticón.
      }
    }
  }
  // Es balanceado si nuestra pila de paréntesis esta vacía, y si no, podemos tomarlas como caritas siempre cuando
  // estas sean más que el número de paréntesis sobrantes.
  return parentheses === 0 || Math.abs(parentheses) <= emoticons
    ? "Balanceado"
    : "Desbalanceado";
};
