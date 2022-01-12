function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click',convertDays);
    document.getElementById('hoursBtn').addEventListener('click',convertHours);
    document.getElementById('minutesBtn').addEventListener('click',convertMinutes);
    document.getElementById('secondsBtn').addEventListener('click',convertSeconds);
}

function convertDays(){
    let days = Number(document.getElementById('days').value);

    let hours = days * 24;
    document.getElementById('hours').value = hours.toFixed(1);
    let minutes = days * 1440;
    document.getElementById('minutes').value = minutes.toFixed(1);
    let seconds = days * 86400;
    document.getElementById('seconds').value = seconds.toFixed(1);
}
function convertHours() {
    let hours = Number(document.getElementById('hours').value);

    let days = hours / 24;
    document.getElementById('days').value = days.toFixed(1);
    let minutes = hours * 60;
    document.getElementById('minutes').value = minutes.toFixed(1);
    let seconds = minutes * 60;
    document.getElementById('seconds').value = seconds.toFixed(1);
}

function convertMinutes(){
    let minutes = Number(document.getElementById('minutes').value);

    let days = minutes / 1440;
    document.getElementById('days').value = days.toFixed(1);
    let hours = minutes / 60;
    document.getElementById('hours').value = hours.toFixed(1);
    let seconds = minutes * 60;
    document.getElementById('seconds').value = seconds.toFixed(1);
}

function convertSeconds() {
    let seconds = Number(document.getElementById('seconds').value);

    let days = seconds / 86400;
    document.getElementById('days').value = days.toFixed(1);
    let minutes = seconds / 60;
    document.getElementById('minutes').value = minutes.toFixed(1);
    let hours = minutes / 60;
    document.getElementById('hours').value = hours.toFixed(1);
}