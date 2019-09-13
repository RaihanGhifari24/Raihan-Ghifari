var terimamasukkan_dari_keyboard = require('readline-sync');

var sisi = terimamasukkan_dari_keyboard.question("masukkan nilai sisi : ");
var volume = sisi * sisi * sisi;

console.log("isi kubus :"+volume);