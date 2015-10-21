var w;
var columns;
var rows;
var board;
var next;
var counter = 0;
var r, g, b;

function setup() {
  createCanvas(900, 480);//45 * 24
  //frameRate();
  w = 20;
  // Calculate columns and rows
  columns = floor(width/w);
  rows = floor(height/w);
  // Wacky way to make a 2D array is JS
  board = new Array(columns);
  for (var i = 0; i < columns; i++) {
    board[i] = new Array(rows);
  }
  // Going to use multiple 2D arrays and swap them
  next = new Array(columns);
  for (i = 0; i < columns; i++) {
    next[i] = new Array(rows);
  }
  init();
}

function draw() {
  background(0);
  if(counter > 10){
    generate();
  }
  for ( var i = 0; i < columns;i++) {
    for ( var j = 0; j < rows;j++) {
      if ((board[i][j] == 1)) fill(r,g,b);
      else fill(0);
      rect(i*w, j*w, w-1, w-1);
    }
  }
  if( counter == 60 ){
    init();
    counter = 0;
  }
  counter++;
}

function init() {
  var dateObj = new Date();
  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      if (i == 0 || j == 0 || i == columns-1 || j == rows-1) board[i][j] = 0;
      board[i][j]= 0;
      next[i][j] = 0;
    }
  }

  r = floor(random(100,255));
  g = floor(random(150,255));
  b = floor(random(150,255));

  board[15][10] = 1;
  board[15][12] = 1;
  board[29][10] = 1;
  board[29][12] = 1;

  if(dateObj.getHours()<10){
    for( var i = 9; i < 13; i++ ){
      for( var j = 8; j < 15; j++ ){
        board[i][j] = numbers[floor(dateObj.getHours())][(j-8)*4+(i-9)];
      }
    }

  } else {
    for( var i = 4; i < 8; i++ ){
      for( var j = 8; j < 15; j++ ){
        board[i][j] = numbers[floor(dateObj.getHours()/10)][(j-8)*4+(i-4)];
      }
    }

    for( var i = 9; i < 13; i++ ){
      for( var j = 8; j < 15; j++ ){
        board[i][j] = numbers[floor(dateObj.getHours()%10)][(j-8)*4+(i-9)];
      }
    }
  }

  if(dateObj.getMinutes()<10){
    for( var i = 18; i < 22; i++ ){
      for( var j = 8; j < 15; j++ ){
        board[i][j] = numbers[0][(j-8)*4+(i-18)];
      }
    }

    for( var i = 23; i < 27; i++ ){
      for( var j = 8; j < 15; j++ ){
        board[i][j] = numbers[floor(dateObj.getMinutes())][(j-8)*4+(i-23)];
      }
    }
  } else {
    for( var i = 18; i < 22; i++ ){
      for( var j = 8; j < 15; j++ ){
        board[i][j] = numbers[floor(dateObj.getMinutes()/10)][(j-8)*4+(i-18)];
      }
    }

    for( var i = 23; i < 27; i++ ){
      for( var j = 8; j < 15; j++ ){
        board[i][j] = numbers[floor(dateObj.getMinutes()%10)][(j-8)*4+(i-23)];
      }
    }
  }

  if(dateObj.getSeconds()<10){
    for( var i = 32; i < 36; i++ ){
      for( var j = 8; j < 15; j++ ){
        board[i][j] = numbers[0][(j-8)*4+(i-32)];
      }
    }

    for( var i = 37; i < 41; i++ ){
      for( var j = 8; j < 15; j++ ){
        board[i][j] = numbers[floor(dateObj.getSeconds())][(j-8)*4+(i-37)];
      }
    }
  } else {
    for( var i = 32; i < 36; i++ ){
      for( var j = 8; j < 15; j++ ){
        board[i][j] = numbers[floor(dateObj.getSeconds()/10)][(j-8)*4+(i-32)];
      }
    }

    for( var i = 37; i < 41; i++ ){
      for( var j = 8; j < 15; j++ ){
        board[i][j] = numbers[floor(dateObj.getSeconds()%10)][(j-8)*4+(i-37)];
      }
    }
  }

}

function generate() {

  for (var x = 1; x < columns - 1; x++) {
    for (var y = 1; y < rows - 1; y++) {

      var neighbors = 0;
      for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j];
        }
      }
      neighbors -= board[x][y];

      if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;
      else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;
      else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;
      else                                             next[x][y] = board[x][y];
    }
  }

  var temp = board;
  board = next;
  next = temp;
}

var n0 = [
  1,1,1,1,
  1,0,0,1,
  1,0,0,1,
  1,0,0,1,
  1,0,0,1,
  1,0,0,1,
  1,1,1,1
];
var n1 = [
  0,0,0,1,
  0,0,0,1,
  0,0,0,1,
  0,0,0,1,
  0,0,0,1,
  0,0,0,1,
  0,0,0,1
];
var n2 = [
  1,1,1,1,
  0,0,0,1,
  0,0,0,1,
  1,1,1,1,
  1,0,0,0,
  1,0,0,0,
  1,1,1,1
];
var n3 = [
  1,1,1,1,
  0,0,0,1,
  0,0,0,1,
  1,1,1,1,
  0,0,0,1,
  0,0,0,1,
  1,1,1,1
];
var n4 = [
  1,0,0,1,
  1,0,0,1,
  1,0,0,1,
  1,1,1,1,
  0,0,0,1,
  0,0,0,1,
  0,0,0,1
];
var n5 = [
  1,1,1,1,
  1,0,0,0,
  1,0,0,0,
  1,1,1,1,
  0,0,0,1,
  0,0,0,1,
  1,1,1,1
];
var n6 = [
  1,1,1,1,
  1,0,0,0,
  1,0,0,0,
  1,1,1,1,
  1,0,0,1,
  1,0,0,1,
  1,1,1,1
];
var n7 = [
  1,1,1,1,
  0,0,0,1,
  0,0,0,1,
  0,0,0,1,
  0,0,0,1,
  0,0,0,1,
  0,0,0,1
];
var n8 = [
  1,1,1,1,
  1,0,0,1,
  1,0,0,1,
  1,1,1,1,
  1,0,0,1,
  1,0,0,1,
  1,1,1,1
];
var n9 = [
  1,1,1,1,
  1,0,0,1,
  1,0,0,1,
  1,1,1,1,
  0,0,0,1,
  0,0,0,1,
  1,1,1,1
];
var nOff = [
  0,0,0,0,
  0,0,0,0,
  0,0,0,0,
  0,0,0,0,
  0,0,0,0,
  0,0,0,0,
  0,0,0,0
];

var numbers = [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, nOff];
