// setTimeout
// const tes = setTimeout(function () {
//     console.log('ok');
// }, 2000);
// const tombol = document.getElementById('tombol');

// tombol.addEventListener('click', function () {
//     clearTimeout(tes);
//     console.log('selesai');
// });

// setInterval
// const tes = setInterval(function () {
//     console.log('ok');
// }, 2000);

// const tombol = document.getElementById('tombol');

// tombol.addEventListener('click', function () {
//     clearInterval(tes);
//     console.log('selesai');
// });

// menghitung waktu mundur
const waktuTujuan = new Date('Oct 22, 2019 10:49:00').getTime()
const hitungmundur = setInterval(function () {
    const waktuSekarang = new Date().getTime();
    const selisih = waktuTujuan - waktuSekarang;
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24) / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);

    const teks = document.getElementById('teks');
    teks.innerHTML = 'Waktu anda tersisa ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik ';

    if (selisih <= 0) {
        clearInterval(hitungmundur);
        teks.innerHTML = 'Waktu anda Habis!'
    }
}, 1000);