function Next(tring) {
    var dat = new Date();
    var tdat = dat.toLocaleTimeString()
    clock.innerText = dat.toLocaleTimeString();
    if (tring == tdat) {
        alert("Ring-ring-ring")
    }
}
var year = prompt("Enter year...");
var month = prompt("Enter month...") + 1;
var date = prompt("Enter date...");
var hour = prompt("Enter hour...");
var minute = prompt("Enter minute...");
var ring = new Date(year, month, date, hour, minute, 00)
var tring = ring.toLocaleTimeString()

setInterval("Next(tring)", 1000);