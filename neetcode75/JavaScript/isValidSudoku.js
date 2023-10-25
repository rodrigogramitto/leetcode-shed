var validateRow = function(row) {
  let present = {};
  for (let item of row) {
    if (present[item]) return false;
    if (item !== '.') {
      present[item] = true;
    };
  }
  return true;
};

var validateCol = function(board, index) {
  let present = {};
  for (let row of board) {
    let item = row[index];
    if (present[item]) return false;
    if (item !== '.') {
      present[item] = true;
    }
  }
  return true;
};

var validateBox = function(board, x = 0, y = 0) {
  let present = {};

  for (let i = y; i < y + 3; i++) {
    for (let j = x; j < x + 3; j++) {
      let curr = board[i][j];
      if (present[curr]) return false;
      if (curr !== '.') present[curr] = true;
    }
  }
  return true;
}

var isValidSudoku = function(board) {

  // iterate over board
  for (let i = 0; i < board.length; i++) {
    let isRowValid = validateRow(board[i]);
    let isColValid = validateCol(board, i);

    if (!isRowValid || !isColValid) return false;
  }

  // validate boxes
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j +=3) {
      if (!validateBox(board, i, j)) return false;
    }
  }

  return true;
};

let board1 = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]; // true


let board2 = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]; // false

let actualV = isValidSudoku(board1)

console.log(actualV);

