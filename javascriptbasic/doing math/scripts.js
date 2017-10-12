var secondsPerMin = 60;
var minPerHour = 60;
var hoursPerDay = 24;
var dayPerWeek = 7;
var weeksPerYear = 52;

var secondsPerDay = (secondsPerMin * minPerHour * hoursPerDay );

document.write("There are "+ secondsPerDay+ " seconds in a day ");

var yearsAlive = (secondsPerDay * 365) * 36;
    
document.write("I've been living "+ yearsAlive + " seconds");