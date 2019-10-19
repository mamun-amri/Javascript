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
    return 'Memasukan pilihan yang salah!';
}

const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pGajah.className;

    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    const teks = document.querySelector('.info');
    const isiTeks = document.createTextNode;
});