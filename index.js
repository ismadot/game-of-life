const chalk = require('chalk');
const { log,table } = console;

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
  let arrfilled = []
  array.forEach((row,i) => {
    let column = row.map((item,i) => {
      return item + Math.floor(Math.random() * 10);
    });
    arrfilled[i]=column
  });
  return arrfilled;
}

// let grid = createArray(process.stdout.rows,146)
let grid = createArray(process.stdout.rows-4,process.stdout.columns)
let filledGrid = fillArray(grid)
// log(grid)
// log(filledGrid)
// log(filledGrid);

printArr = (arrayForPrint) => {
  let char = [];
  let gridPaint = [];

  arrayForPrint.forEach((row,i) => {
    let column = row.map((item,i) => {
      return char[i] = item === 0 ? `${chalk.bgCyan.green(' ')}`: `${chalk.bgRed.blue(' ')}`;
    });
    column.push('\n');
    gridPaint.push(...column)
  });
  return gridPaint.join('');
}
console.log(`${process.stdout.columns} x ${process.stdout.rows}`);

process.stdout.write('\033c');
let gridPrint = printArr(filledGrid);
setInterval(()=>{
  process.stdout.write('\033c');
  log(gridPrint)
},1000)

