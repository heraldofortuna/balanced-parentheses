const balancedParentheses = (str) => {
  return console.log(str);
};

balancedParentheses("hola"); // Balanceado
balancedParentheses("(hola)"); // Balanceado
balancedParentheses("(()"); // Desbalanceado
balancedParentheses("(:)"); // Balanceado
balancedParentheses("no voy (:()"); // Balanceado
balancedParentheses("hoy pm: fiesta :):)"); // Balanceado
balancedParentheses(":(("); // Desbalanceado
balancedParentheses("a (b (c (d) c) b) a :)"); // Balanceado
