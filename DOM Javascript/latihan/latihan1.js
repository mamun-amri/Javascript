const body = document.querySelector('body');
const tUbahWarna = document.getElementById('tUbahWarna');

// tUbahWarna.onclick = function () {
//     // document.body.style.backgroundColor = 'lightblue';
//     // document.body.setAttribute('class', 'warna-biru');
//     document.body.classList.toggle('warna-biru');
// };

tUbahWarna.addEventListener('click', function () {
    body.classList.toggle('warna-biru');
});

// membuat button baru
const btn1 = document.createElement('button');
const btn1Teks = document.createTextNode('warna random');
btn1.appendChild(btn1Teks);
btn1.setAttribute('id', 'warna-random');
btn1.setAttribute('type', 'button');
// meletekan btn1
tUbahWarna.after(btn1);

// style dan event
btn1.style.margin = '5px';

btn1.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

// slide merah
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sHijau.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sBiru.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

// bermain dengan mouse move

body.addEventListener('mousemove', function (event) {
    // cari posisi maouse dengan sumbu x
    // event.clientX

    // lebar browser 
    // window.innerWidth

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);

    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';
});