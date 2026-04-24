// ============================================================
//  visualizer.js — Animation Engine & UI Controller
// ============================================================
//
//  This file ties everything together:
//    1. Reads which algorithm was selected (BFS or DFS)
//    2. Calls the algorithm to get the visit order + parent map
//    3. Animates visited cells one by one (with setTimeout)
//    4. Traces and animates the final path
//    5. Displays stats (cells visited, path length)
// ============================================================

// Current draw mode: 'wall' | 'start' | 'end'
let currentMode = 'wall';

// Prevents user from clicking buttons during animation
let animRunning = false;

// ---------------------------------------------------------------
// setMode(mode)
// Changes what happens when the user clicks/drags on the grid.
// ---------------------------------------------------------------
function setMode(newMode) {
  currentMode = newMode;

  // Update button active states
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === newMode);
  });

  // Update hint text
  const hints = {
    wall:  'Click or drag on the grid to draw walls. Click a wall again to erase it.',
    start: 'Click any empty cell to move the start point (🟢).',
    end:   'Click any empty cell to move the end point (🔴).',
  };
  document.getElementById('mode-hint').textContent = hints[newMode];
}

// ---------------------------------------------------------------
// tracePath(parent)
// Reconstructs the path from end → start using the parent map.
// Returns an array of [r, c] pairs from start → end.
// ---------------------------------------------------------------
function tracePath(parent) {
  const path = [];
  let cur = [...endCell];

  // Walk backwards from end to start
  while (cur !== null) {
    path.unshift(cur);                     // add to front (reverse order)
    cur = parent[cur[0]][cur[1]];          // move to parent
  }

  // If the path doesn't start at startCell, no path was found
  if (path[0][0] !== startCell[0] || path[0][1] !== startCell[1]) {
    return [];
  }

  return path;
}

// ---------------------------------------------------------------
// animateVisited(order, onDone)
// Steps through the visit order array, coloring each cell
// "visited" with a short delay between each step.
// ---------------------------------------------------------------
function animateVisited(order, onDone) {
  let i = 0;

  // Adaptive speed: faster for large orders, slower for small ones
  const delay = Math.max(12, Math.floor(800 / order.length));

  function step() {
    if (i >= order.length) {
      onDone();   // all cells animated → move to path animation
      return;
    }

    const [r, c] = order[i];

    // Don't color start or end cells
    if (!(r === startCell[0] && c === startCell[1]) &&
        !(r === endCell[0]   && c === endCell[1])) {
      const cell = getCellElement(r, c);
      cell.classList.add('visited');
    }

    i++;
    setTimeout(step, delay);
  }

  step();
}

// ---------------------------------------------------------------
// animatePath(path, onDone)
// Colors the final path in gold/orange, one cell at a time.
// ---------------------------------------------------------------
function animatePath(path, onDone) {
  let j = 0;

  function step() {
    if (j >= path.length) {
      onDone();
      return;
    }

    const [r, c] = path[j];

    if (!(r === startCell[0] && c === startCell[1]) &&
        !(r === endCell[0]   && c === endCell[1])) {
      const cell = getCellElement(r, c);
      cell.classList.remove('visited');
      cell.classList.add('path');
    }

    j++;
    setTimeout(step, 30);
  }

  step();
}

// ---------------------------------------------------------------
// runAlgo()
// Main entry point. Reads selected algorithm, runs it, animates.
// ---------------------------------------------------------------
function runAlgo() {
  if (animRunning) return;

  clearPathVisuals();               // remove previous animation
  document.getElementById('stats').innerHTML = '';

  animRunning = true;

  const algoName = document.getElementById('algo-select').value;

  // Run the selected algorithm (from bfs.js or dfs.js)
  const { order, parent } = algoName === 'bfs' ? runBFS() : runDFS();

  // Reconstruct the path
  const path = tracePath(parent);

  // Step 1: animate visited cells
  animateVisited(order, () => {
    // Step 2: animate the final path
    animatePath(path, () => {
      animRunning = false;
      showStats(algoName, order.length, path);
    });
  });
}

// ---------------------------------------------------------------
// showStats(algo, visitedCount, path)
// Displays result info below the grid.
// ---------------------------------------------------------------
function showStats(algo, visitedCount, path) {
  const statsEl = document.getElementById('stats');
  const found = path.length > 0;

  if (found) {
    statsEl.innerHTML = `
      <div class="stat">Algorithm: <b>${algo.toUpperCase()}</b></div>
      <div class="stat">Cells visited: <b>${visitedCount}</b></div>
      <div class="stat">Path length: <b>${path.length - 1} steps</b></div>
    `;
  } else {
    statsEl.innerHTML = `
      <div class="stat">Algorithm: <b>${algo.toUpperCase()}</b></div>
      <div class="stat">Cells visited: <b>${visitedCount}</b></div>
      <span class="no-path">⚠️ No path found — the end is completely blocked by walls.</span>
    `;
  }
}

// ---------------------------------------------------------------
// Event Listeners — wire up toolbar buttons
// ---------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the grid on page load
  initGrid();

  // Mode buttons
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => setMode(btn.dataset.mode));
  });

  // Run button
  document.getElementById('btn-run').addEventListener('click', runAlgo);

  // Clear path button
  document.getElementById('btn-clear-path').addEventListener('click', () => {
    if (animRunning) return;
    clearPathVisuals();
    document.getElementById('stats').innerHTML = '';
  });

  // Reset grid button
  document.getElementById('btn-reset').addEventListener('click', () => {
    if (animRunning) return;
    resetGrid();
  });
});
