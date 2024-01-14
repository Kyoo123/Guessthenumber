let zufall = Math.floor(Math.random()*100+1);
let eingabe = Number(window.prompt("Guess the number between 1 and 1000"));
while (eingabe != zufall) {
    if (eingabe < zufall) {
        eingabe = Number(window.prompt("The Number is too small."));
    } else if (eingabe > zufall) {
        eingabe = Number(window.prompt("The number is too big"));
    }
}
// document.writeln("Erraten: Die richtige Zahl ist: " + zufall);
window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
