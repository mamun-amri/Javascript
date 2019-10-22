function getPilihanComputer() {
    var comp = Math.round(Math.random() * 3 + 1);

    if (comp == 1) return 'gajah';
    if (comp == 2) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;

        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
        const info = document.querySelector('.info');
        info.innerHTML = hasil;
    });
});


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });