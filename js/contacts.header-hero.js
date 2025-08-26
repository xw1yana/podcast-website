const clockContainer = document.querySelector(".contacts__header-clock");

function updateClock(){
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockContainer.innerText  = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);