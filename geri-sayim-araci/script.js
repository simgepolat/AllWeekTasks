const timeInput = document.getElementById('timeInput');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const countdown = document.getElementById('countdown');

let counter = 0;
let timer = null;

startBtn.addEventListener('click', () => {
    counter = parseInt(timeInput.value);

    if (isNaN(counter) || counter <= 0) {
        alert('Lütfen geçerli bir sayı giriniz!');
        return;
    }

    countdown.textContent = counter;
    startBtn.disabled = true;
    timeInput.disabled = true;

    timer = setInterval(() => {
        counter--;
        countdown.textContent = counter;

        if (counter <= 0) {
            clearInterval(timer);
            countdown.textContent = 'Süre doldu!';
            startBtn.disabled = false;
            timeInput.disabled = false;
            timer = null;
        }
    }, 1000);
});

resetBtn.addEventListener('click', () => {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }

    counter = 0;
    countdown.textContent = '0';
    timeInput.value = '';
    startBtn.disabled = false;
    timeInput.disabled = false;
}); 