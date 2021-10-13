
const clock = document.getElementById('clock');

function ClockTick() {
    let date = new Date();
    let h = date.getHours()
    let m = date.getMinutes()
    let symbol = 'AM';

    if (h == 0) {
        h = 12
    }

    if (h > 12) {
        h = h - 12;
        symbol = "PM";
    }

    clock.innerText = `${('0' + h).slice(-2)}:${('0' + m).slice(-2)} ${symbol}`;
}

setInterval(() => ClockTick(), 1000);
ClockTick()
