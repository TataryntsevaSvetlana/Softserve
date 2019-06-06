/*
You have the job to implement a countdown function that will be used for the next NASA spatial mission.
The function takes a duration in milliseconds and return a string in countdown format.
If it's counting down, the first character should be '-', if it's counting up it should be '+'.
Then it should return the number of: hours (min 2 units), minutes (2 units) and seconds (2 units).

countdown(-154800000)  // return  '-43:00:00'
countdown(0)           // return  '+00:00:00'
countdown(61000)       // return  '+00:01:01'
countdown(360000000)   // return '+100:00:00'
*/
function toTimeFormat(num) {
    if (String(num).length === 1) {
        return '0' + num;
    }
    return num;
}


function countdown(inputValueMilliseconds) {
    const MILLISECONDS_IN_HOUR = 3600000;
    const MILLISECONDS_IN_MINUTE = 60000;
    const MILLISECONDS_IN_SECOND = 1000;
    let result;

    const quantityHours = Math.floor(inputValueMilliseconds / MILLISECONDS_IN_HOUR);
    const remainderHours = inputValueMilliseconds % MILLISECONDS_IN_HOUR;

    const quantityMinutes = Math.floor(remainderHours / MILLISECONDS_IN_MINUTE);
    const remainderMinutes = remainderHours % MILLISECONDS_IN_MINUTE;

    const quantitySeconds = Math.floor(remainderMinutes / MILLISECONDS_IN_SECOND);
    const hoursInTimeFormat = quantityHours >= 0 ? '+' + toTimeFormat(quantityHours) : toTimeFormat(quantityHours);


    result = hoursInTimeFormat + ':' + toTimeFormat(quantityMinutes) + ':' + toTimeFormat(quantitySeconds);
    console.log(result);

    return result;
}

countdown(-154800000);
