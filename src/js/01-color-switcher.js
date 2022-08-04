function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
function updateBodyColor(color) {
  document.body.style.backgroundColor = color;
}


class ColorSwitcher {
  constructor(updateBodyColor) {
    this.intervalID = null;
    this.isActive = false;
    this.updateBodyBGcolor = updateBodyColor;
    refs.stopBtn.disabled = true;
  }

  startChangeColor() {
    if (this.isActive) {
      return;
    }

    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;

    this.isActive = true;
    this.intervalID = setInterval(() => updateBodyColor(getRandomHexColor()), 1000);
  }

  stopChangeColor() {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;

    clearInterval(this.intervalID);
    this.isActive = false;
  }
}

const colorSwitcher = new ColorSwitcher();

refs.startBtn.addEventListener('click', () => colorSwitcher.startChangeColor());
refs.stopBtn.addEventListener('click', () => colorSwitcher.stopChangeColor());