function runClock() {
    const degree = 6;
    const hourElement = document.getElementById("hour");
    const minuteElement = document.getElementById("minute");
    const secondElement = document.getElementById("second");
    
    let day = null;
    let hour = null;
    let minute = null;
    let second = null;
    
    setInterval(() => {
        day = new Date();
        hour = day.getHours() * 30;
        minute = day.getMinutes() * degree;
        second = day.getSeconds() * degree;
        
        hourElement.style.transform = `rotateZ(${hour +  (minute / 12)}deg)`;
        minuteElement.style.transform = `rotateZ(${minute}deg)`;
        secondElement.style.transform = `rotateZ(${second}deg)`;
    }, 1000);
    
}

runClock();