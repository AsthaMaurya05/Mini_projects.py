// ============================================================
//  bfs.js — Breadth-First Search
// ============================================================
//
//  BFS explores cells LEVEL BY LEVEL using a QUEUE.
//
//  KEY IDEA:
//    Imagine dropping a stone in water — ripples spread
//    outward equally in all directions. BFS does the same.
//    It always visits the NEAREST cells first.
//
//  GUARANTEE: BFS always finds the SHORTEST path
//             (in terms of number of steps).
//
//  DATA STRUCTURE: Queue (FIFO — First In, First Out)
//    → Add to back, remove from front
//    → In JS: push() adds to back, shift() removes from front
//
//  TIME COMPLEXITY:  O(ROWS × COLS)
//  SPACE COMPLEXITY: O(ROWS × COLS)
// ============================================================

// Directions: Up, Down, Left, Right (row offset, col offset)
const DIRECTIONS = [
  [-1,  0],   // up
  [ 1,  0],   // down
  [ 0, -1],   // left
  [ 0,  1],   // right
];

// ------------------------------------------------------------------
// runBFS()
// Returns:
//   order  — array of [r, c] in the order cells were visited
//   parent — 2D array where parent[r][c] = [pr, pc] (the cell
//            we came from), used to trace back the path
// ------------------------------------------------------------------
function runBFS() {
  // visited[r][c] = true means we've already explored this cell
  const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

  // parent[r][c] stores which cell we came FROM to reach (r, c)
  // Used later to reconstruct the path from end → start
  const parent = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

  // Records all cells visited in order (for animation)
  const order = [];

  // --- Initialize queue with the start cell ---
  const queue = [];
  queue.push([...startCell]);                    // enqueue start
  visited[startCell[0]][startCell[1]] = true;    // mark start as visited

  while (queue.length > 0) {
    // Dequeue from front of queue (FIFO)
    const [r, c] = queue.shift();

    order.push([r, c]);  // record visit order for animation

    // Check if we've reached the destination
    if (r === endCell[0] && c === endCell[1]) {
      break;  // Found it! Stop searching.
    }

    // Explore all 4 neighbors
    for (const [dr, dc] of DIRECTIONS) {
      const nr = r + dr;  // neighbor row
      const nc = c + dc;  // neighbor col

      // Skip if: out of bounds, already visited, or a wall
      if (!isInBounds(nr, nc))       continue;
      if (visited[nr][nc])           continue;
      if (grid[nr][nc] === 1)        continue;  // wall

      // Mark neighbor as visited and record its parent
      visited[nr][nc] = true;
      parent[nr][nc] = [r, c];     // we came from (r, c)

      queue.push([nr, nc]);         // enqueue the neighbor
    }
  }

  return { order, parent };
}
