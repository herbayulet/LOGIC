function romawi(n)
{
  var nomor = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var roman = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  var hasil='';  for(var i=13; i >=0; i--)
  {
     while(n >= nomor[i])
     {
      n = n - nomor[i];
      hasil = hasil + roman[i];
     }
  }  return hasil;
}// console.log(toRomawi(angka))
//console.log("Script Testing untuk Konversi Romawi\n")
  console.log("input      | expected      | result")
  console.log("-----      | --------      | ------")
  console.log("4          | IV            | ", romawi(4))
  console.log("9          | IX            | ", romawi(15))
  console.log("13         | XIII          | ", romawi(13))
  console.log("1453       | MCDLIII       | ", romawi(1453))
  console.log("1646       | MCDXLVI       | ", romawi(1646))