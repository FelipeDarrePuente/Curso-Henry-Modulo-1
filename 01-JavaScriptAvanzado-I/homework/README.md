
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

> lo que esta despues del '|' es lo corregido por el instructor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // devuelve 10, porque la variable 'x' esta definida dentro de la funcion (variable c).
  console.log(a); // devuelve 5, porque la variable 'a' esta definida como 5 en el padre de la funcion (variable c). | devuelve 8, porque es el dato que nos entrega en la linea 29 del codigo.
  var f = function(a, b, c) {
    b = a; // | b = 8.
    console.log(b); // devuelve 5, porque dice que la variable 'b' = 'a' y la variable 'a' = 5. No devuelve la funcion o variable c, porque 'b = c' esta definiendose despues de del 'console.log(b)'. | devuelve 8.
    b = c; // | b = 10.
    var x = 5;
  }
  f(a,b,c); // devuelve 5, undefined, undefined. | f(8, 9, 10).
  console.log(b); // devuelve 10, porque no puede ir adentro de la funcion 'f' ya que esta separado, entonces tiene que  ir al global enviroment. | devuelve 9.
}
c(8,9,10);
console.log(b); // devuelve 10, porque no esta pidiendo lo que esta dentro de 'b', sino, el valor de la variable 'b'.
console.log(x); // devuelve 1, porque no esta pidiendo lo que esta dentro de 'c', sino que esta pidiendo 'x', que se encuentra definida en global.
```

```javascript
console.log(bar); // devuelve 'undefined', porque no esta declarada antes de pedir el resultado de 'console.log'.
console.log(baz); // devuelve 'undefined', porque no esta declarada antes de pedir el resultado de 'console.log'. | tira error porque 'baz' no esta definido por un 'var'.
foo(); // devuelve 'undefined', porque no tiene ningun valor todavia.
function foo() { console.log('Hola!'); } // devuelve 'Hola!', porque la funcion devuelve 'Hola!'.
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // devuelve 'Tony', porque no me pide que le de un buleano. | devuelve 'Franco' porque declara el valor de la variable nuevamente con la de 'Franco', cambiando la variable 'instructor = "Tony"'.
```

```javascript
var instructor = "Tony";
console.log(instructor); // devuelve 'Tony', porque la variable instructor esta definida como 'Tony'.
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // devuelve 'Franco', porque la variable instructor esta definida dentro de 'if'.
   }
})(); // | funcion autoinvocada (IIFE).
console.log(instructor); // devuelve 'Tony'.
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // devuelve 'The Flash', porque la variable instructor esta definida en el 'if'.
    console.log(pm); // devuelve 'Reverse Flash', porque la variable esta definida dentro del 'if'.
}
console.log(instructor); // devuelve 'Tony', porque el 'if' no se lee o no se usa. | devuelve 'The Flash', porque el 'var instructor' cambia el valor de es un 'var'.
console.log(pm); // devuelve 'Franco', porque no lee lo que esta dentro del 'if', ya que no se usa. | en realidad es porque el 'let' no puede cambiar lo que esta en global.
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // devuelve 2, porque el string se convierte en numero por cohersion.
"2" * "3" // devuelve 6, porque la cohersion convierte los strings a numeros.
4 + 5 + "px" // devuelve '9px', porque suma los numeros, y despues concatena el string.
"$" + 4 + 5 // devuelve '$45', porque primero concatena el string, que es un caracter no numerico con el numero 4 y luego concatena el nuevo string '$4' con el numero 5.  |
"4" - 2 // devuelve 2, porque la cohersion hace que el string numerico se convierta a numero.
"4px" - 2 // devuelve NaN, porque no puede restar un string con un numero.
7 / 0 // devuelve Infinity, porque todo numero dividido por 0 en JavaScript es igual a 'infinito'.
{}[0] // | devuelve 'Array [0]', porque no esta accediendo al objeto, solo al array que es igual a 0.
parseInt("09") // devuelve 9, porque lo que hace 'parseInt' es convertir los strings a numeros enteros.
5 && 2 // | devuelve 2, porque siempre devuelve lo segundo (exepto si un valor es 0 o false, devuelve false).
2 && 5 // | devuelve 5.
5 || 0 // | devuelve 5.
0 || 5 // | devuelve 5.
[3]+[3]-[10] // | devuelve 23, porque concatena cada '3' como string formando un '33', y despues lo transforma a numero, para poder restarlo con el 10 para que de el resultado '23'.
3>2>1 // | devuelve false, porque '3>2' es igual a 'true', y despues 'true' no es mayor a '1'.
[] == ![] // | devuelve true, porque '![]' = false. Entonces del lado derecho es un '0'. Pero del lado izquierdo es un arreglo vacio es igual que un string vacio, lo que significa que es falso tambien. Entonces 'false == false' = 'true'.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // | devuelve undefined, porque esta, pero no definida cuando consologuea.
   console.log(foo()); // | devuelve 

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

console.log(getFood(false)); // | devuelve undefined. [no se por que]
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // | devuelve 'Aurelio De Rosa', porque devuelve el de el objeto.

var test = obj.prop.getFullname;

console.log(test()); // | devuelve 'undefined', [no entiendo]
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // | devuelve 1 
   setTimeout(function() { console.log(2); }, 1000); // | devuelve 4
   setTimeout(function() { console.log(3); }, 0); // | devuelve 3
   console.log(4); // | devuelve 2
}

printing(); // | lo devuelve en en diferente orden, porque '1', '2' y '3' los devuelve inmediatamente, y al '4' lo devuelve despues de 1 segundo (o 1000 milisegundos).
```
