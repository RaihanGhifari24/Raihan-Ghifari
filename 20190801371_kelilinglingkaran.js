var terimasukan_dari_keyboard = require('readline-sync');

var pi = 3.14;
var jari_jari = terimasukan_dari_keyboard.question("nilai r : ");

var keliling = 2 * pi * jari_jari ;

console.log("keliling lingkaran ="+keliling);
