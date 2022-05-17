let Nome = prompt("Qual'è il tuo nome?");
let Cognome = prompt("Qual'è il tuo cognome?");
let ColorePreferito  = prompt("Qual'è il tuo colore preferito?");
const Anno = "22"
const generatedPassword = document.getElementById("pssw-gnrtd");
generatedPassword.innerHTML = Nome + Cognome + ColorePreferito + Anno;
