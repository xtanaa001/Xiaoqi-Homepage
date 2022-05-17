---
title: CMPUT675 - Fall 2021
---

<style>
body {
  max-width: 860px;
  padding: 60px !important;
  padding-top: 20px !important;
  /*padding-right: 1.6em;*/
  padding-bottom: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 3px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  box-shadow: 0px -10px 10px #275D38;
}
</style>


# `CMPUT 204: Algorithms I`

## Section B2 - Winter 2022

**`Instructor`**: [Xiaoqi Tan](/) (xiaoqi.tan@ualberta.ca)\
**`Location & Time`**:  C E1-60; MWF 11:00–11:50am\
**`Office hour`**: Wednesday 2-3pm

---


## `Course Topics`

1. **`Foundations.`** Concepts; Model of computation; Loop invariants and inductions; Asymptotic notations; Recurrence relations  
2. **`Data Structures.`** Heaps; Priority queue; Binary search tree; AVL tree; Hash table 
3. **`Algorithm Design Paradigms`** 
   - **Divide and conquer**: Merge Sort; QuickSort and random quicksort; Large integer multiplication; Matrix multiplication; Advanced topics
   - **Greedy algorithms**: Fractional knapsack; Job scheduling; Activity selection; Advanced topics
   - **Dynamic programming**: Integral knapsack; Rod cutting; Longgest common subsequence; Matrix chain multiplication; Advanced topics
4. **`Graphs.`** Graph representation; Graph traversals: BFS/DFS; Directed acyclic graphs and topological sort; Connectivity in directed graphs; Minimum spanning trees; Single-source shortest path; All-pairs shortest path

## `Course Schedule` 

| DATE     | TOPICS                           |  REFERENCES             |
|:-------------   | :-----                    |  :-----                 |
|          |   **`Week 1: Introduction; Insertion Sort`**                               |   [CLRS](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf): Ch1-Ch4    |
| Jan 5 | Course overview     |    [Lecture 1-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)<br> [Lecture 1-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)                    |
| Jan 7        | RAM; Insertion Sort (getting started)      |     [Lecture 2-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 2-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)            |
|              |   **`Week 2: Loop Invariants; Insertion Sort Analysis`**                              |       |
| Jan 10     | Loop invariants: concepts        |  [Lecture 3-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 3-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) |
| Jan 12   | Loop invariants: more examples     |  [Lecture 4-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 4-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)   |
| Jan 14   | Loop invariants: Insertion Sort analysis    |  [Lecture 5-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 5-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
|          |   **`Week 3: Asymptotic Growth of Functions`**                              |       |
| Jan 17     | Big-O notation: Part 1       |  [Lecture 6-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 6-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
| Jan 19   | Big-O notation: Part 2    |  [Lecture 7-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 7-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)   |
| Jan 21   | Big-O notation: Part 3    |  [Lecture 8-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 8-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
|             |   **`Week 4: Divide-and-Conquer I`** <br> **`(Merge Sort and Recurrence Relations)`**                              |  
| Jan 24     | Merge Sort; Recurrence  relations   |  [Lecture 9-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 9-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
| Jan 26   |  Methods for solving recurrence: Subsitution; Recursion tree   |  [Lecture 10-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 10-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)   |
| Jan 28   | Methods for solving recurrence: Master Theorem    |  [Lecture 11-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 11-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
|          |   **`Week 5: Heaps; Priority Queue; HeapSort`**                              |
| Jan 31     | Heaps      |  [Lecture 12-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 12-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
| Feb 2   |  Heaps; HeapSort   |  [Lecture 13-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 13-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)   |
| Feb 4   | Priority queue    |  [Lecture 14-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 14-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
|          |   **`Week 6: QuickSort; SLB; BST; Hash Table`**                              |
| Feb 7     | QuickSort      |  [Lecture 15-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 15-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
| Feb 9   |   QuickSort analysis; Random QuickSort <br> Sorting lower bound   |  [Lecture 16-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 16-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)   |
| Feb 11   | BST: binary search tree <br> Balanced BST: AVL tree <br> Hash tables    |  [Lecture 17-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 17-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
|          |   **`Week 7: Greedy Algorithms`**                              |
| Feb 14     | Fractional knapsack      |  [Lecture 18-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 18-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
| Feb 16   |  Job scheduling   |  [Lecture 19-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 19-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)   |
| Feb 18   | Activity selection  |  [Lecture 20-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 20-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
|          |   **`Week 8: Reading Week`**                                    |
|          |   **`Week 9: Divide-and-Conquer II`**                              |
| Feb 28    | **Test 1** (Coverage: Week 1--Week 6)      |     |
| Mar  2  |  Karatsuba's algorithm   |  [Lecture 21-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 21-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)   |
| Mar  4   | Strassen's algorithm    |  [Lecture 22-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 22-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
|          |   **`Week 10: Dynamic Programming`**                              |
| Mar  7  |  Introduction <br> Getting started: Fibonacci   |  [Lecture 23-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 23-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)   |
| Mar  9   | Integral knapsack <br> Rod cutting    |  [Lecture 24-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 24-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
| Mar  11  | Longest common subsequence <br> Matrix chain multiplication   |  [Lecture 25-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 25-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
|          |   **`Week 11: Graphs and BFS/DFS`**                              |
| Mar  14  |  Graphs: Introduction    |  [Lecture 26-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 26-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)   |
| Mar  16   | BFS: Breadth-First Search     |  [Lecture 27-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 27-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
| Mar  18  | DFS: Depth-First Search   |  [Lecture 28-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 28-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
|          |   **`Week 12: DAGs; TopoSort; SCCs; MST`**                              |
| Mar  21  |  DAG: Directed Acyclic Graphs   |  [Lecture 29-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 29-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)   |
| Mar  23   | TopoSort: Topological Sorting in DAGs <br> SCCs: Strongly connected components   |  [Lecture 30-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 30-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
| Mar  25  | MST: Minimum spanning tree <br> Kruskal's algorithm: Introduction   |  [Lecture 31-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 31-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
|          |   **`Week 13: Minimum Spanning Tree (Cont'd)`**                              |
| Mar  28  |  **Test 2** (Coverage: Week 7--Week 11)                  |                     |
| Mar  30   |  Kruskal's algorithm: Proof <br> Prim's algorithm: Introduction   |  [Lecture 32-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 32-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
| April  1  | Prim's algorithm: Proof       |  [Lecture 33-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 33-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
|          |   **`Week 14: Shortest Path`**                              |
| April  4  |  Dijkstra |  [Lecture 34-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 34-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)   |
| April  6  | Bellman-Ford    |  [Lecture 35-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 35-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |
| April  8  | Floyd-Warshall <br> Course recap   |  [Lecture 36-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing) <br> [Lecture 36-video](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)  |



## `Some Advices`

1. **`How to use the course material`** 
    - **Pre-lectures**: Go through the lecture notes and slides before each lecture. Failure to do so will make it very hard to follow the lectures in class. This session is recommended for every student with at least 30 minutes.
    - **Post-lectures**:  Review the lecture notes and slides after each lecture. This is recommended for every student, especially when you are confused about some topics discussed in class. at least 30 minutes.
2. **`How to understand the course topics.`** Heaps; Priority queue; Binary search tree; AVL tree; Hash table 
3. **`Assignments`**: Merge Sort; QuickSort and random quicksort; Large integer multiplication; Matrix multiplication; Advanced topics; Fractional knapsack; Job scheduling; Activity selection; Advanced topics; Integral knapsack; Rod cutting; Longgest common subsequence; Matrix chain multiplication; Advanced topics
4. **`Term Test 1 + Term Test 2.`** Graph representation; Graph traversals: BFS/DFS; Directed acyclic graphs and topological sort; Connectivity in directed graphs; Minimum spanning trees; Single-source shortest path; All-pairs shortest path
5. **`Final Exam`**. The final exam will cover all the topics discussed in this course, with an emphasis on algorithm design and analysis. Compared to the two term tests, the final exam is relatively harder in the sense that a considerable amount of questions may look new to you. 