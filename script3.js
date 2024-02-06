const number = 11
<!--const number = prompt("Vvedite число:");-->
const hundreds = Math.floor(number / 100);
<!-- (number - number % 100) / 100  -->
const tens = Math.floor((number % 100) / 10);
<!-- (number % 100 - ones) / 10 <!--
const ones = number % 10;

console.log(`V chisle ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${ones}`);
