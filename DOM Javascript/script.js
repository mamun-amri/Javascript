// DOM Selection
// document.getElementById -> element
const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Mamun Amri';

// document.getElementsByTagName() -> HTML Collactions
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

// document.getELementByClassName() -> HTML Collactions
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari javascript';