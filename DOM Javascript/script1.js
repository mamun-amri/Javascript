// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// document.querySelectorAll() -> element
// Nodelist
const p = document.querySelectorAll('p')[0];
p.innerHTML = 'di ubah di javascript';