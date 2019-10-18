// DOM manipulation
// baut element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('paragraf baru');

// simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru diakhir section
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// menambah li baru
const liBaru = document.createElement('li');
const teksLi = document.createTextNode('list baru');

// simpan tulisan di liBaru
liBaru.appendChild(teksLi);

const ul = document.querySelector('section#b ul');

const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// menghapus tag a 
const tagA = document.getElementsByTagName('a')[0];
sectionA.removeChild(tagA);

// replace paragraf 4 ke h2
const h2Baru = document.createElement('h2');
const h2Teks = document.createTextNode('judul baru');

h2Baru.appendChild(h2Teks);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
sectionB.replaceChild(h2Baru, p4);

// style melihat yang diubah
pBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';

