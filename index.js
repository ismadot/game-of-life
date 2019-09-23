
createArray = (rows,cols) => { //creates a 2 dimensional array of required height
  let arr = [];
  let columsn = [];
  
  for (var i = 0; i < cols; i++) {
    columsn[i]=0
  }
  for (let i = 0; i < rows; i++) {
    arr[i] = columsn;
  }
  return arr;
}

fillArray = array => { 
  array.forEach((row,i) => {
    let column = row.map((item,i) => {
      return item + Math.floor(Math.random() * 2); 
    });
    array[i]=column
  });
  
  return array;
}

let grid = createArray(16,16)
let filledGrid = fillArray(grid)
console.table(filledGrid);

function fillRandom() { //fill the grid randomly
  for (var j = 0; j < gridHeight; j++) { //iterate through rows
    for (var k = 0; k < gridWidth; k++) { //iterate through columns
    var rawRandom = Math.random(); //get a raw random number
    var improvedNum = (rawRandom * 2); //convert it to an int
    var randomBinary = Math.floor(improvedNum);
      if (randomBinary === 1) {
      theGrid[j][k] = 1;
      } else {
      theGrid[j][k] = 0;
      }
    }  
  }
}

