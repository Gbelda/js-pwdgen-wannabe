const userName = prompt("Qual'e il tuo nome?");
const userLastName = prompt("Qual'e il tuo cognome?");
const userColor = prompt("Qual'e il tuo colore preferito?");

const password = document.getElementById("sensitive").innerHTML = `${userName}${userLastName}${userColor}21`
