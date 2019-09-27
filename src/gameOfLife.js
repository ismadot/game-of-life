// const chalk = require('chalk');
// const { log,table } = console;

// createArray = (rows,cols) => { //creates a 2 dimensional array of required height
//   let arr = [];
//   let columsn = [];

//   for (var i = 0; i < cols; i++) {
//     columsn[i]=0
//   }
//   for (let i = 0; i < rows; i++) {
//     arr[i] = columsn;
//   }
//   return arr;
// }

// fillArray = array => {
//   let arrfilled = []
//   array.forEach((row,i) => {
//     let column = row.map((item,i) => {
//       return item + Math.floor(Math.random() * 10);
//     });
//     arrfilled[i]=column
//   });
//   return arrfilled;
// }

// // let grid = createArray(process.stdout.rows,146)
// // let grid = createArray(process.stdout.rows-4,process.stdout.columns)
// // let filledGrid = fillArray(grid)
// // log(grid)
// // log(filledGrid)
// // log(filledGrid);

// printArr = (arrayForPrint) => {
//   let char = [];
//   let gridPaint = [];

//   arrayForPrint.forEach((row,i) => {
//     let column = row.map((item,i) => {
//       return char[i] = item === 0 ? `${chalk.bgCyan.green(' ')}`: `${chalk.bgRed.blue(' ')}`;
//     });
//     column.push('\n');
//     gridPaint.push(...column)
//   });
//   return gridPaint.join('');
// }
// console.log(`${process.stdout.columns} x ${process.stdout.rows}`);

// process.stdout.write('\033c');
// let gridPrint = printArr(filledGrid);
// setInterval(()=>{
//   process.stdout.write('\033c');
//   log(gridPrint)
// },1000)

class GameOfLife{

  constructor (rows=10, cols=10) {
    this.rows = rows;
    this.cols = cols;
    this.gridPlay=[[0]];
    this.init(this.rows,this.cols);
  }

  createArray (rows,cols) { //creates a 2 dimensional array of required height
    let arr = [];
    let columsn = [];

    for (var i = 0; i < cols; i++) {
      columsn[i]=0;
    }
    for (let i = 0; i < rows; i++) {
      arr[i] = columsn;
    }
    return arr;
  }

  init (rows,cols){
    let grid = this.createArray(rows,cols);
    let arrFilled = this.fillArray(grid);
    this.gridPlay = arrFilled;
  }

  fillArray (array) {
    let arrFilled = [];
    array.forEach((row,i) => {
      let column = row.map((item) => {
        return item + Math.floor(Math.random() * 3)===1? 1 : 0;
      });
      arrFilled[i]=column;
    });
    return arrFilled;
  }

  isFilled(x, y) {
    const { gridPlay } = this;
    return gridPlay[x] && gridPlay[x][y];
  }

  conuntNeighbour (x=0, y=0) {
    // const {  } = this;
    let neighbour = 0;
    this.isFilled(x, y-1)?neighbour++:null; // left
    this.isFilled(x, y+1)?neighbour++:null; // right

    this.isFilled(x-1, y)?neighbour++:null; //down
    this.isFilled(x-1, y-1)?neighbour++:null;
    this.isFilled(x-1, y+1)?neighbour++:null;

    this.isFilled(x+1, y)?neighbour++:null; //up
    this.isFilled(x+1, y+1)?neighbour++:null;
    this.isFilled(x+1, y-1)?neighbour++:null;
    console.log(neighbour);
    return neighbour;
  }

  get canvasPlay () {
    return this.gridPlay;
  }
}

let newGame = new GameOfLife(10,10);

console.log(newGame.canvasPlay);
newGame.conuntNeighbour(1,1);
// console.log("newGame ",newGame);



module.exports = GameOfLife;
