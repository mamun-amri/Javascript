var h = '';
for (i = 0; i < 5; i++) {
    for (a = 5; a > i; a--) {
        h += '*';
    }
    h += '\n';
}
console.log(h);