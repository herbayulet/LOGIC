function spiral(param1) {
  let result = [];
  let hitung = 0;
  for (let i = 0; i < param1; i++) {
    result[i] = [];
    for (let j = 0; j < param1; j++) {
      result[i][j] = hitung;
      hitung++;
    }
  }
  // console.log(result);
  let n = result.length;
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1
  let newArray = [];
  while (startRow <= endRow && startColumn <= endColumn) {
    for (let i = startColumn; i <= endColumn; i++) {   //atas horizontal
      newArray.push(result[startColumn][i]);
      // console.log(i);
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {        //kanan vertikal
      newArray.push(result[i][endColumn]);
      // console.log(i);
    }
    endColumn--;

    for (let i = endColumn; i >= startColumn; i--) {
      newArray.push(result[endRow][i]); // bawah horizontal
      //console.log(i);
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      newArray.push(result[i][startColumn]); //kiri vertikal
      //console.log(i);
    }
    startColumn++;
  }
  console.log(newArray);
}
spiral(5);
spiral(6)
spiral(7)