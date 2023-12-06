let zufall = Math.floor(Math.random()*1000+1);
let eingabe = Number(window.prompt("Wie lautet die zahl?"));
while (eingabe != zufall) {
    if (eingabe < zufall) {
        eingabe = Number(window.prompt("die zahl ist zu klein"));
    } else if (eingabe > zufall) {
        eingabe = Number(window.prompt("die zahl ist zu gros"));
    }
}
// document.writeln("Erraten: Die richtige Zahl ist: " + zufall);
window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";