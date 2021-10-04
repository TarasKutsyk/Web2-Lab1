const oneDay = 24 * 60 * 60 * 1000; //in milliseconds

function getDaysSinceNewYear (currentDate) {
    const newYear = new Date(currentDate.getFullYear(), 0, 0);
    const timeSinceNewYear = currentDate.getTime() - newYear.getTime();

    return Math.floor(timeSinceNewYear / oneDay);
}

console.log(getDaysSinceNewYear(new Date())); 