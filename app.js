let supheliVagon = Math.round(Math.random() * 10) + 1;
let tahminEdilen;
let hak = 4;

for (let i = 1; i <= hak; i++) {

  let tahminEdilen = Number(prompt("Olaya karisan supheli 1-10 arasinda bir vagonda saklaniyor bakalim onu bula bilicek misin?"));
  if (supheliVagon == tahminEdilen) {
    alert("Tebrikler");
    if (i == 1) {
      alert("Tebrikler supheli bulundu Puan=100");
    } else if (i == 2) {
      alert("Tebrikler supheli bulundu Puan=75");
    } else if (i == 3) {
      alert("Tebrikler supheli bulundu Puan=50");
    } else {
      alert("Tebrikler supheli bulundu Puan=25");
    }
    break;
  } else if (supheliVagon > tahminEdilen) {
    //arka vagonlara gecis yaptikca sayi buyuyor
    alert("Lutfen arka vagolara bakiniz");
  } else if (supheliVagon < tahminEdilen) {
    //on vagonlara gecis yaptikca sayi kuculuyor
    alert("Lutfen on vagonlara bakiniz");
  }
  if (i == 4) {
    alert("Malesef bulamadiniz ve supheli kacti.");
  }

}