var jumlah = 10,
    mulai = 1;

for (mulai; mulai <= jumlah; mulai++) {
    if (mulai <= 6 && mulai !== 5) {
        console.log('mobil beroperasi no ' + mulai);
    } else if (mulai === 8 || mulai === 5 || mulai === 10) {
        console.log('mobil lembur no ' + mulai);
    } else {
        console.log('mobil rusak no ' + mulai);
    }
}

