const p1 = document.querySelector('.p1');

p1.addEventListener('click', function () {
    p1.style.backgroundColor = 'lightblue';
});

p1.addEventListener('dblclick', function () {
    p1.style.backgroundColor = 'white';
});

const p2 = document.querySelector('.p2');

p2.addEventListener('mouseenter', function () {
    p2.style.backgroundColor = 'lightblue';
});
p2.addEventListener('mouseleave', function () {
    p2.style.backgroundColor = 'lightgreen';
});