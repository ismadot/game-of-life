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
  array.forEach((row,i) => {
    let column = row.map((item,i) => {
      return item + Math.floor(Math.random() * 2); 
    });
    array[i]=column
  });
  
  return array;
}
let grid = createArray(149,39)
let filledGrid = fillArray(grid)
// log(filledGrid);

process.stdout.write('\033c');
setInterval(()=>{
  process.stdout.write('\033c');
  console.log(`${chalk.bgRed.green('Too early for Christmas?')} ${process.stdout.columns}x${process.stdout.rows}`);

},1000)

