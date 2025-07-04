
const cursor = document.querySelector('.cursor');
const trail = document.querySelector('.trail');

document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  trail.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
});
