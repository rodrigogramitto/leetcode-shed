// Given an m x n 2D binary grid grid which represents
// a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting
// adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// I: 2d matrix (array of arrays)
// O: Int (number of islands)
// C: No time or space constraints
// E: Grid is empty?

// basically bfs
// Strategy when we find a one, we need visit neighbors
Island is defined by connecting adjacent lands horizontally or vertically.
var numIslands = function(grid) {
  // if empty grid return cero
  if (!grid.length) return 0;
  let islands = 0;
  // get number of rows and columns
  const [rows, cols] = [grid.length, grid[o].length];


  // iterate over rows
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isIsland = grid[row][col] == '1';
      if (isIsland) islands++;

      bfs(grid, row, rows, col, cols)
    }
  }

  return islands;
};

const bfs = (grid, row, rows, col, cols) => {
  let queue = new Queue([[row, col]])

    while(!queue.isEmpty()) {
      for (let i = (queue.size() - 1); 0 <= i; i--) {
        const [row, col] = queue.dequeue()

        const isWater = grid[row][col] === '0';
        if (isWater) continue;

        grid[row][col] = '0';

        for (const [_row, _col] of getNeighbors(row, rows, col, cols)) {
          queue.enqueue([_row, _col]);
        }
      }
    }
}

var getNeighbors = (row, rows, col, cols) => [ [ 0, 1 ], [ 0, -1 ], [ 1, 0 ], [ -1, 0 ] ]
    .map(([ _row, _col]) => [ (row + _row), (col + _col) ])
    .filter(([ _row, _col ]) => (0 <= _row) && (_row < rows) && (0 <= _col) && (_col < cols));