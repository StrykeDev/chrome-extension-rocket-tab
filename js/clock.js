
function LeadingZero(number) {
    return ('0' + number).slice(-2);
}

function GetTimeString() {
    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let symbol = 'AM';

    if (hours == 0) {
        hours = 12
    }

    if (hours > 12) {
        hours = hours - 12;
        symbol = "PM";
    }

    return `${LeadingZero(hours)}:${LeadingZero(minutes)} ${symbol}`;
}

export default function ClockTick(element) {
    element.innerText = GetTimeString();
    setInterval(() => element.innerText = GetTimeString(), 1000);
}
