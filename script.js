//dekstop

const container = document.getElementById('block');
const baseWidth = 1400;

function updateScale() {
const windowWidth = window.innerWidth;
const minScale = 0.5;
const maxScale = 1.5;

const scale = Math.max(minScale, Math.min(maxScale, windowWidth / baseWidth));

container.style.transform = `scale(${scale})`;
}

window.addEventListener('load', updateScale);
window.addEventListener('resize', updateScale);

//tablet+mobile

const containerMobile = document.getElementById('blockMobile');
const baseWidthMobile = 760;

function updateScaleMobile() {
const windowWidth = window.innerWidth;
const minScale = 0.3;
const maxScale = 1;

const scale = Math.max(minScale, Math.min(maxScale, windowWidth / baseWidthMobile));

containerMobile.style.transform = `scale(${scale})`;
}

window.addEventListener('load', updateScaleMobile);
window.addEventListener('resize', updateScaleMobile);