const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
};

const colorSwitch = {
    intervalId: null,
    isActive:false,
    start() {
        if (this.isActive) {
            return;
        }

        this.isActive = true;
        refs.startBtn.setAttribute('disabled', 'disabled');

        const randomIntegerFromInterval = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        this.intervalId = setInterval(() => {
            setBodyBgColor(colors[randomIntegerFromInterval(0, colors.length)]);
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        refs.startBtn.removeAttribute('disabled');
    },
};

refs.startBtn.addEventListener('click', () => {
colorSwitch.start();
});
refs.stopBtn.addEventListener('click', () => {
colorSwitch.stop();
});

function setBodyBgColor(color) {
    document.body.style.backgroundColor = color;
}



