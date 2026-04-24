# 🗺️ Pathfinding Visualizer

A visual, interactive tool to learn **BFS** and **DFS** graph algorithms by watching them find paths on a grid.

---

## 📁 Project Structure

```
pathfinding-visualizer/
│
├── index.html          ← Main HTML entry point
├── style.css           ← All visual styling
├── js/
│   ├── grid.js         ← Grid state (2D array), rendering, cell events
│   ├── bfs.js          ← Breadth-First Search algorithm
│   ├── dfs.js          ← Depth-First Search algorithm
│   └── visualizer.js   ← Animation engine + UI controller
└── README.md
```

---

## 🚀 How to Run

Just open `index.html` in any browser — no server, no install needed.

```bash
# Option 1: Double-click index.html

# Option 2: Use VS Code Live Server extension
# (Right-click index.html → Open with Live Server)

# Option 3: Python quick server
python -m http.server 8000
# then open http://localhost:8000
```

---

## 🎮 How to Use

| Action | How |
|--------|-----|
| Draw walls | Click/drag on grid (default mode) |
| Erase walls | Click on an existing wall |
| Move start | Click "Move Start" button, then click a cell |
| Move end | Click "Move End" button, then click a cell |
| Run BFS | Select BFS → click ▶ Run |
| Run DFS | Select DFS → click ▶ Run |
| Clear path | Click "Clear Path" |
| Full reset | Click "Reset Grid" |

---

## 🧠 Concepts to Learn

### BFS — Breadth-First Search (`bfs.js`)
- Uses a **Queue** (FIFO)
- Explores cells **level by level** (nearest first)
- **Guarantees shortest path**
- Great for: unweighted shortest-path problems

### DFS — Depth-First Search (`dfs.js`)
- Uses a **Stack** (LIFO)
- Dives **deep** along one path before backtracking
- Does **NOT guarantee shortest path**
- Great for: maze generation, cycle detection, topological sort

### Key Comparison
| Feature | BFS | DFS |
|---------|-----|-----|
| Data structure | Queue | Stack |
| Path guarantee | Shortest ✅ | Not guaranteed ❌ |
| Memory | More (stores all frontiers) | Less |
| Pattern | Ripple outward | Dive deep |

---

## 📚 DSA Concepts in This Project

| File | Concepts |
|------|----------|
| `grid.js` | 2D arrays, DOM events, state management |
| `bfs.js` | Queue, BFS traversal, parent map |
| `dfs.js` | Stack, DFS traversal, backtracking |
| `visualizer.js` | setTimeout animation, event listeners, path reconstruction |
