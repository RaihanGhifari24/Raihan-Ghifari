var dari_keyboard = require('readline-sync') ;

var alas = dari_keyboard.question("nilai alas =") ;
var tinggi = dari_keyboard.question("nilai tinggi =") ;

var luas = alas * tinggi / 2 ;

console.log("Luas segitiga ="+luas);