/**
 * mencari nilai terbasar
 * @angka1 14
 * @angka2 59
 * @angka3 52
 * @angka4 4
 * @angka5 38
 *
 * @return sebuah @String
 */
function nilaiTerbesar(angka1, angka2, angka3, angka4, angka5) {
  let besar = 0;
  //tempat coding disini
  const dataAngka = [angka1, angka2, angka3, angka4, angka5];
  for(var i = 0; i < dataAngka.length; i++){
    if(dataAngka[i] > besar)
      besar = dataAngka[i];
  }

  return 'Nilai terbesar adalah: ' + besar;
}
