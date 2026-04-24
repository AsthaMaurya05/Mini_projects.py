// ============================================================
//  grid.js — Grid State, Rendering & Cell Interaction
// ============================================================
//
//  CONCEPTS USED HERE:
//  - 2D Array  : grid is a ROWS x COLS matrix
//  - Cell State: each cell is 0 (empty) or 1 (wall)
//  - DOM Events: mousedown, mouseenter, touchmove
// ============================================================

const ROWS = 18;   // number of rows in the grid
const COLS = 22;   // number of columns in the grid

// grid[r][c] = 0 → empty cell
// grid[r][c] = 1 → wall
let grid = [];

// Start and End positions stored as [row, col]
let startCell = [4, 2];
let endCell   = [13, 19];

// Tracks if mouse button is held down (for drag-drawing)
let isMouseDown = false;

// ------------------------------------------------------------------
// initGrid()
// Creates a fresh empty 2D grid array, then renders it on screen.
// ------------------------------------------------------------------
function initGrid() {
  // Create ROWS x COLS matrix filled with 0 (empty)
  grid = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  renderGrid();
}

// ------------------------------------------------------------------
// renderGrid()
// Builds the CSS grid of <div> cells and injects into #grid.
// ------------------------------------------------------------------
function renderGrid() {
  const gridEl = document.getElementById('grid');

  // Set CSS grid columns
  gridEl.style.gridTemplateColumns = `repeat(${COLS}, 30px)`;
  gridEl.innerHTML = '';  // clear any old cells

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.r = r;  // store row index on the element
      cell.dataset.c = c;  // store col index on the element

      // Apply correct visual class (start, end, wall, empty)
      applyStateClass(cell, r, c);

      // Mouse events
      cell.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isMouseDown = true;
        handleCellInteraction(r, c);
      });

      cell.addEventListener('mouseenter', () => {
        if (isMouseDown) handleCellInteraction(r, c);
      });

      // Touch events (mobile support)
      cell.addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleCellInteraction(r, c);
      }, { passive: false });

      cell.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const el = document.elementFromPoint(touch.clientX, touch.clientY);
        if (el && el.dataset.r !== undefined) {
          handleCellInteraction(+el.dataset.r, +el.dataset.c);
        }
      }, { passive: false });

      gridEl.appendChild(cell);
    }
  }
}

// ------------------------------------------------------------------
// applyStateClass(cell, r, c)
// Sets the correct CSS class on a cell based on its state.
// ------------------------------------------------------------------
function applyStateClass(cell, r, c) {
  // Reset to base class
  cell.className = 'cell';

  if (r === startCell[0] && c === startCell[1]) {
    cell.classList.add('start');
  } else if (r === endCell[0] && c === endCell[1]) {
    cell.classList.add('end');
  } else if (grid[r][c] === 1) {
    cell.classList.add('wall');
  }
  // else: empty cell, no extra class
}

// ------------------------------------------------------------------
// getCellElement(r, c)
// Returns the DOM <div> for a given row, col position.
// ------------------------------------------------------------------
function getCellElement(r, c) {
  return document.querySelector(`[data-r="${r}"][data-c="${c}"]`);
}

// ------------------------------------------------------------------
// handleCellInteraction(r, c)
// Called on click/drag. Behavior depends on current mode.
// ------------------------------------------------------------------
function handleCellInteraction(r, c) {
  if (typeof animRunning !== 'undefined' && animRunning) return;  // block during animation

  if (currentMode === 'wall') {
    // Don't draw walls on start or end
    if ((r === startCell[0] && c === startCell[1]) ||
        (r === endCell[0]   && c === endCell[1]))   return;

    // Toggle: empty → wall, wall → empty
    grid[r][c] = grid[r][c] === 1 ? 0 : 1;
    applyStateClass(getCellElement(r, c), r, c);

  } else if (currentMode === 'start') {
    const prev = getCellElement(startCell[0], startCell[1]);
    startCell = [r, c];
    grid[r][c] = 0;  // ensure not a wall
    applyStateClass(prev, +prev.dataset.r, +prev.dataset.c);
    applyStateClass(getCellElement(r, c), r, c);

  } else if (currentMode === 'end') {
    const prev = getCellElement(endCell[0], endCell[1]);
    endCell = [r, c];
    grid[r][c] = 0;
    applyStateClass(prev, +prev.dataset.r, +prev.dataset.c);
    applyStateClass(getCellElement(r, c), r, c);
  }
}

// ------------------------------------------------------------------
// clearPathVisuals()
// Removes visited/path classes without touching walls or start/end.
// ------------------------------------------------------------------
function clearPathVisuals() {
  document.querySelectorAll('.cell.visited, .cell.path').forEach(cell => {
    const r = +cell.dataset.r, c = +cell.dataset.c;
    applyStateClass(cell, r, c);
  });
}

// ------------------------------------------------------------------
// resetGrid()
// Clears everything: walls, paths, start/end reset to default.
// ------------------------------------------------------------------
function resetGrid() {
  startCell = [4, 2];
  endCell   = [13, 19];
  initGrid();
  document.getElementById('stats').innerHTML = '';
}

// ------------------------------------------------------------------
// isInBounds(r, c)  — utility used by BFS/DFS
// Returns true if (r, c) is inside the grid.
// ------------------------------------------------------------------
function isInBounds(r, c) {
  return r >= 0 && r < ROWS && c >= 0 && c < COLS;
}

// Release mouse button even if released outside grid
document.addEventListener('mouseup', () => isMouseDown = false);
