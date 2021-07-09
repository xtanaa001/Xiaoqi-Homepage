---
title: Decision-Making under Uncertainty
---


# CMPUT 675 (Fall 2021):
# Optimization and Decision Making under Uncertainty

**Instructor**: [Xiaoqi Tan](/)\\
**Class Times**: Monday and Wednesday 2:00pm – 3:20pm, VCC 2-227\\
**Office Hour**: By appointment

---


# `Course Overview`

Many real-world problems involves making decisions in the presence of different forms of uncertainty. These challenges arise in Internet advertising, energy sustainability, transportation, financial trading, health, and a wide range of problems in artificial intelligence and machine learning. In different application scenarios, the specific decision problems might look different at first glance; however, the models and algorithms needed to address them are often similar. In this research-oriented course, we will review recent developments and discuss open directions in the general field of algorithmic decision-making under uncertainty via several modern optimization lenses. Major topics to be covered in this course include: i) online optimization, competitive analysis, and beyond worst-case analysis; ii) stochastic modeling, optimization, and learning; iii) algorithmic game theory and mechanism design. These topics are highly interdisciplinary - they have strong ties to various disciplines such as theoretical computer science, operations research, statistics, control, decision theory, and economics. The course is theoretical in nature, but most problems considered will be motivated and illustrated by practical examples.


# `Grade Distribution`

- Participation (10%)
- Homework Assignments (30%)
- Project (20% presentation + 40% written report)
  

# `Course Policies`
We will slant towards learning the design and analysis of online algorithms and mechanisms for settings where the uncertain information is completely unknown. 
This course does not require any textbook. The homework assignments will consists of several open questions.



# `Course Outline (Tentative)` 

The exact topics and reading list are still being finalized and **subject to change**. 


| Date (#)        | Topic                 |  Readings                 |
|:-------------   | :-----                |  :-----                   |
| Sept. 1 (L1)    | Course logistics <br> Decisions and  uncertainty <br> Warm-up examples.      | KVV (1990) <br>  KVV (1990) <br>  KVV (1990) |
| Sept. 6         | `Labour Day`                      |                          |
| Sept. 8 (L2)    | Linear programming <br> Nonlinear programming <br> Duality, optimality conditions |   KVV (1990) <br>  KVV (1990) <br>  KVV (1990) |

\
### Part 1 : Online Algorithms and Competitive Analysis (9 lectures)

| Date (#)        | Topic                 |  Readings                 |
|:-------------   | :-----                |  :-----                   |
| Sept. 13 (L3)   | Online algorithms <br> Competitive ratio vs. regret <br> Example: Ski Rental, packing    |     KVV (1990) <br>  KVV (1990) <br>  KVV (1990) |
| Sept. 15 (L4)   | Online search <br> One-way trading <br> Optimal threshold policies    |    $1 |
| Sept. 20 (L5)   | Online matching <br> Deterministic vs. Randomized   <br> RANKING    |    $1 |
| Sept. 22 (L6)   | Online convex optimization <br> XXX    |    $1 |
| Sept. 27 (L7)   | Smoothes online convex optimization <br> XXX    |    $1 |
| Sept. 29 (L8)   | Online packing <br> Primal-dual algorithms <br> XXX   |    $1 |
| Oct. 4  (L9)   | Online algorithms, ratio vs. regret <br> Ski Rental, packing    |    $1 |
| Oct. 6  (L10)   | Online algorithms, ratio vs. regret <br> Ski Rental, packing    |    $1 |
| Oct. 11         |  `Thanksgiving Day`   |    $1 |
| Oct. 13  (L11)  | Prophet inequalities <br> Optimal stopping problems   |    $1 |

\
### Part 2 : Stochastic Optimization, Approximation, and Learning (5 lectures)

| Date (#)        | Topic                 |  Readings                 |
|:-------------   | :-----                |  :-----                   |
| Oct. 18  (L12)  | Prophet inequalities <br> Optimal stopping problems   |    $1 |
| Oct. 20  (L13)  | Stochastic optimization <br> Stochastic gradient descent   |    $1 |
| Oct. 25  (L14)  | Markov decision process <br> Dynamic programming   |    $1 |
| Oct. 27  (L15)  | Reinforcement learning <br> Policy gradient algorithms   |    $1 |
| Nov. 1  (L16)  | Online learning <br> Multi-armed bandits   |    $1 |

\
### Part 3 : Algorithmic Game Theory and Mechanism Design (6 lectures)

| Date (#)        | Topic                 |  Readings                 |
|:-------------   | :-----                |  :-----                   |
| Nov. 3  (L17)  | Game theory <br> Nash equilibrium <br> Examples:   |    $1 |
| Nov. 8  (L18)  | Network congestion games <br> Price of anachy <br> Examples:  |    $1 |
| Nov. 10  (L19)  | Mechanism design <br> Incentive compatibility <br> Examples: Myerson auction   |    $1 |
| Nov. 15  (L20)  | Combinatorial auctions <br> Examples:   |    $1 |
| Nov. 17  (L21)  | Posted price mechanisms <br> Examples:   |    $1 |
| Nov. 22  (L22)  | Online mechansim design <br> Examples:  |    $1 |

\
### Paper Presentation + Discussion (4 lectures)

| Date (#)        | Topic                 |  Readings                 |
|:-------------   | :-----                |  :-----                   |
| Nov. 24  (L23)  | Student A: online resource allocation <br> Student B: online resource allocation <br> Student C: online resource allocation   |    $1 |
| Nov. 29  (L24)  | Student A <br> Student B <br> Student C   |    $1 |
| Dec. 1  (L25)   | Student A <br> Student B <br> Student C   |    $1 |
| Dec. 6  (L26)   | Student A <br> Student B <br> Student C   |    $1 |


2. **Part A: Online Algorithms and Competitive Analysis `(06/09/2021 -- 01/10/2021)`**
  - Competitive ratio vs. regret
  - Deterministic vs. randomized
  - Online matching, scheduling, and packing
  - Online knapsack problems
  - Online convex optimization
  - Beyond worst-case analysis

3. **Part B: Stochastic Optimization, Approximation, and Learning `(01/10/2021 -- 01/11/2021)`**
  - Stochastic optimization
  - Prophet inequalities
  - Markov decision process, dynamic programming
  - Reninforcement learning
  - Online learning and bandits

4. **Part C: Algorithmic Game Theory and Mechanism Design**
  - Game theory and Nash equilibrium
  - Network congestion games and price of anachy
  - Mechanism design, auctions, and combinatorial auctions
  - Posted price mechanisms