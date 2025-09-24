let width = 0;
const bar = document.getElementById('bar');

setInterval(() => {
  if (width < 100) width++;
  bar.style.width = width + '%';
}, 30);
