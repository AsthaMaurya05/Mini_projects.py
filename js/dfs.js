// ============================================================
//  dfs.js — Depth-First Search
// ============================================================
//
//  DFS dives as DEEP as possible along one path before
//  backtracking and trying another direction.
//
//  KEY IDEA:
//    Like exploring a maze by always taking the first
//    available turn, and only coming back when you hit a
//    dead end. DFS commits hard to one direction.
//
//  IMPORTANT: DFS does NOT guarantee the shortest path.
//             It finds *a* path, which might be longer
//             than necessary. Compare it to BFS to see!
//
//  DATA STRUCTURE: Stack (LIFO — Last In, First Out)
//    → Add to top, remove from top
//    → In JS: push() adds to top, pop() removes from top
//
//  TIME COMPLEXITY:  O(ROWS × COLS)
//  SPACE COMPLEXITY: O(ROWS × COLS)
// ============================================================

// ------------------------------------------------------------------
// runDFS()
// Returns:
//   order  — array of [r, c] in the order cells were visited
//   parent — 2D array for path reconstruction (same as BFS)
// ------------------------------------------------------------------
function runDFS() {
  // visited[r][c] = true means this cell has been processed
  const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

  // parent[r][c] = the cell we came from to reach (r, c)
  const parent = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

  // Records all cells visited in order (for animation)
  const order = [];

  let found = false;

  // --- Initialize stack with the start cell ---
  const stack = [];
  stack.push([...startCell]);   // push start onto stack

  while (stack.length > 0 && !found) {
    // Pop from top of stack (LIFO — the most recently added item)
    const [r, c] = stack.pop();

    // Skip if already visited
    // (DFS can push the same cell multiple times before visiting it)
    if (visited[r][c]) continue;

    visited[r][c] = true;
    order.push([r, c]);  // record this visit

    // Check if we found the end
    if (r === endCell[0] && c === endCell[1]) {
      found = true;
      break;
    }

    // Explore all 4 neighbors
    // Note: DFS pushes neighbors onto the stack.
    // The LAST direction pushed will be explored FIRST (LIFO).
    for (const [dr, dc] of DIRECTIONS) {
      const nr = r + dr;
      const nc = c + dc;

      if (!isInBounds(nr, nc))  continue;
      if (visited[nr][nc])      continue;
      if (grid[nr][nc] === 1)   continue;  // wall

      // Only set parent if not visited (avoid overwriting a better parent)
      if (parent[nr][nc] === null) {
        parent[nr][nc] = [r, c];
      }

      stack.push([nr, nc]);  // push onto stack (will be visited later)
    }
  }

  return { order, parent };
}
