/**
 * Menghilangkan nilai dari Array.
 * @arrayBuah @Array campuran buah dan hewan
 * @arrayHewan @Array dari hewan
 *
 * @return sebuah @Array
 */
function hapusArray(arrayBuah, arrayHewan) {
  const arrayBuahBaru = []; //membuat Array baru

  //tempat coding disini
  for(var i=0; i<arrayBuah.length; i++){
    var isSame = false;
    for(var j=0; j<arrayHewan.length; j++){
      if(arrayBuah[i] == arrayHewan[j]){
        isSame = true;
      }
    }
    if(!isSame) arrayBuahBaru.push(arrayBuah[i]);
  }
  // arrayBuahBaru.filter(buah => !arrayHewan.includes(buah));

  return arrayBuahBaru;
}
