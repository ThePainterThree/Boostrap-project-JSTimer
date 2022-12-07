let button = document.querySelector("button")

function TimerFunction(){
    console.log("Timer has began!");
    
    let endOfTimer = Date.parse("Dec 7, 2022 15:30:00")
    
    let nowTime = new Date();
    
    let timeDifference = endOfTimer - nowTime;
    
    console.log(timeDifference);
    
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor(timeDifference / (1000 * 60));
    let seconds = Math.floor(timeDifference / 1000);
    console.log(seconds + "\n" + minutes +"\n" + hours + "\n" + days);
    console.log(days + 'd', hours + 'h', minutes + 'min', seconds + 'sec'); //From Ivan

    let dayTime = days;
    let hourTime = hours - days * 24;
    let minuteTime = minutes - hours * 60;
    let secondsTime = seconds - minutes *60;
    
    console.log(dayTime, hourTime, minuteTime, secondsTime);
    
    document.querySelector(".timer").innerHTML = 
        '<div>' + dayTime + '</div>' +
        '<div>' + hourTime + '</div>' +
        '<div>' + minuteTime + '</div>' +
        '<div>' + secondsTime + '</div>' ;
}

setInterval(
    'TimerFunction()',
    1000);

button.addEventListener("click", ()=>{
    TimerFunction();
})

TimerFunction();