var arr = ['mamun', 'amri', 'ndut', 'yuli'];

// 1. push() dan pop()
// push untuk menambahkan di akhir dan pop menghapush yang paling akhir
// arr.push('siti');
// arr.pop();

// 2. join()
// menggabungkan array

// 3. unshift dan shift
// unshift menambahkan diawal dan shift menghapus di awal
// arr.unshift('neng','siti');
// arr.shift();

// 4. splice(indexAwal,berapaDiHapus,elemenBaru)
// arr.splice(2, 0, 'siti');

// 5. slice(awal,akhir)
// slice akan menghasilkan array baru jadi perlu kita tampung
// console.log(arr.join(' - '));
// var arr2 = arr.slice(0, 2);
// console.log(arr2.join(' - ')); 

// 6. forEach()
// untuk perulangan
// arr.forEach(function (e, i) {
//     console.log('mahasiswa ke ' + (i + 1) + '-' + e);
// });

// 7. map()
// mengembalikan niali ke array 
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });
// console.log(angka2.join('-'));

// 8. sort()
// untuk mengurutkan angka
var angka = [10, 3, 5, 2, 5, 7, 9];
angka.sort(function (a, b) {
    return a - b;
});
console.log(angka.join('-'));