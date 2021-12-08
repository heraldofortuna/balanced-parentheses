# balanced-parentheses

Para iniciar el proceso, te envío un desafío de programación:
¿No te pasa que te duelen los ojos cuando ves un mensaje con paréntesis desbalanceados? A nosotros los programadores, puede llegar a causarnos un dolor de cabeza ver un whatsapp como "gracias por eso :)))", "me encantaría ir (pero no creo que pueda :(", o "estoy trabajando (en lo que me pediste (pero no terminaré hoy:()".
Para peor, con los emoticones, se hace difícil saber si un mensaje tiene los paréntesis balanceados.

Un mensaje tiene los paréntesis balanceados cuando cumple una de las siguientes reglas:

1. Es un mensaje vacío
2. Contiene sólo una o más repeticiones de las letras "a" a la "z", espacio " ", o dos puntos ":"
3. Comienza por un paréntesis de apertura "(", seguido de un mensaje con paréntesis balanceados, seguido de un paréntesis de cierre ")"
4. Es un mensaje con paréntesis balanceados seguido de otro mensaje con paréntesis balanceados
5. Es un emoticón feliz ":)" o uno triste ":("

## Tabla de Contenidos

- [General](#general)
  - [El Reto](#el-reto)
  - [Captura](#captura)
  - [Enlaces](#enlaces)
- [Mi Proceso](#mi-proceso)
  - [Tecnologías](#tecnologías)
  - [Lo que aprendí](#lo-que-aprendí)
  - [Desarrollo continuo](#desarrollo-continuo)
  - [Recursos](#recursos)
- [Autor](#autor)
- [Agradecimientos](#agradecimientos)

## General

### El Reto

Crea un programa que identifique _si existe al menos una forma_ de interpretar la entrada como un mensaje de paréntesis balanceados. La entrada es un string y la salida debe ser "balanceado" o "desbalanceado".

Ejemplos:
a. "hola" -> balanceado
b. "(hola)" -> balanceado
c. "(()" -> desbalanceado
d. "(:)" -> balanceado (ej, si consideramos el mensaje como un ":" [regla 2] entre paréntesis [regla 3])
e. "no voy (:()" -> balanceado (ej, si consideramos un emoticón triste [regla 5] entre paréntesis [regla 3])
f. "hoy pm: fiesta :):)" -> balanceado
g. ":((" -> desbalanceado
h. "a (b (c (d) c) b) a :)" -> balanceado (ej, si el último paréntesis es en realidad un emoticón)

### Captura

<img width="400px"  src="https://github.com/no-te-rindas/imagenes/blob/main/Readmes/portafolio-jaume/jaume-desktop.png?raw=true" />

<img width="200px" src="https://github.com/no-te-rindas/imagenes/blob/main/Readmes/portafolio-jaume/jaume-mobile.png?raw=true" />

### Enlaces

- [Repositorio](https://github.com/heraldofortuna/balanced-parentheses)
- [Sitio en vivo](https://heraldofortuna.github.io/balanced-parentheses/)

## Mi Proceso

### Tecnologías

- HTML5
- CSS3
- JavaScript
- DOM
- Flexbox
- Grid
- Responsive Design

### Lo que aprendí

Más que aprender, me gustó el reto porque me permitió practicar mis habilidades para crear algoritmos en JS.

## Desarrollo continuo

Lo siguiente que haré será aprender a usar el Figma desde el punto de vista de un desarrollador Frontend, además de mejorar mis skills en flexbox y grid llevando algun curso con Leonidas.

## Recursos

La idea de este reto de programación me fue dada por una empresa tecnológica.

## Autor

- Heraldo Fortuna - [heraldofortuna.com](https://www.heraldofortuna.com/)
- Twitter - [@heraldofortuna](https://twitter.com/heraldofortuna)

## Agradecimientos

Por ahora, a nadie.
