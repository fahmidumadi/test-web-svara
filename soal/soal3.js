/**
 * Membuat Object berdasarkan Array yang di kasih.
 * @dataArray ['ayam', 'bebek', 'angsa']
 *
 * @return sebuah @Object
 */
function ambilInfoArray(dataArray) {
  const dataObject = {}; //membuat variabel Object

  //tempat coding disini
  dataObject.data = dataArray;
  dataObject.panjangData = dataArray.length;

  return dataObject;
}
