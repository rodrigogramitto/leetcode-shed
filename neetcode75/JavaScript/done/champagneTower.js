// We stack glasses in a pyramid, where the first row has 1 glass,
// the second row has 2 glasses, and so on until the 100th row.
// Each glass holds one cup of champagne.

// Then, some champagne is poured into the first glass at the top.
// When the topmost glass is full,
// any excess liquid poured will fall equally to the glass immediately to the left
// and right of it.  When those glasses become full,
// any excess champagne will fall equally to the left and right of those glasses, and so on.
//  (A glass at the bottom row has its excess champagne fall on the floor.)

// For example, after one cup of champagne is poured, the top most glass is full.
// After two cups of champagne are poured, the two glasses on the second row are half full.
// After three cups of champagne are poured, those two cups become full -
// there are 3 full glasses total now.  After four cups of champagne are poured,
// the third row has the middle glass half full, and the two outside glasses are a quarter full,
// as pictured below.

var champagneTower = function(poured, query_row, query_glass) {
  let tower = [];

  for (let row = 0; row <= query_row; row++) {
    tower[row] = new Array(row + 1).fill(0);
  }

  tower[0][0] = poured;
  for(let row = 0; i < query_row; row++) {
    for(let cup = 0; cup <= row; cup++) {
      if (tower[row][cup] > 1) {
        const overflow = (tower[row][cup] - 1) / 2;
        tower[row + 1][cup] += overflow;
        tower[row + 1][cup + 1] += overflow;
      }
    }
  }

  return Math.min(tower[query_row][query_glass], 1);
};

// Example 1:

// Input: poured = 1, query_row = 1, query_glass = 1
// Output: 0.00000
// Explanation: We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0)). There will be no excess liquid so all the glasses under the top glass will remain empty.
// Example 2:

// Input: poured = 2, query_row = 1, query_glass = 1
// Output: 0.50000
// Explanation: We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange.
// Example 3:

// Input: poured = 100000009, query_row = 33, query_glass = 17
// Output: 1.00000
let actual3 = champagneTower(25, 6, 1); // expect 0;
console.log(actual3);
