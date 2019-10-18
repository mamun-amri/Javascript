var tanya = true;
while (tanya) {
    // menangkap pilihan player
    var p = prompt('pilih : gajah,semut,orang');
    // menangkap pilihan komputer
    // membangkitakan bilangan random
    var comp = Math.round(Math.random() * 3 + 1);

    if (comp == 1) {
        comp = 'gajah';
    } else if (comp == 2) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    // mementukan rules
    var hasil = '';
    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Memasukan pilihan yang salah!';
    }

    alert('KAMU memilih : ' + p + ' dan KOMPUTER memilih ' + comp + '\n maka hasilnya adalah KAMU : ' + hasil);
    tanya = confirm('main lagi ? ');
}
alert('terima kasih!');
