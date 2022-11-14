---
title: CMPUT676 - Fall 2022
---

<style>

blockquote {
  margin: auto;
  background: #fff1e5; /* #fff1e5; /*#f9f9f9*/
  border: 2px solid #F2DFCE;
  border-left: 8px solid #F2DFCE;
  padding: 0.02px 1em 0.02px 1em;
  /* 
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 4px, rgba(0, 0, 0, 0.3) 0px 0px 0px -3px, rgba(0, 0, 0, 0.2) 0px 0px 0px inset;
  */
}

table th:first-of-type {
    width: 10%;
}
table th:nth-of-type(2) {
    width: 50%;
}
/*
table th:nth-of-type(3) {
    width: 50%;
}
table th:nth-of-type(4) {
    width: 30%;
} */

</style>

# `CMPUT 676: Optimization and Decision-Making under Uncertainty`
#  Fall 2022

**`Instructor`**: [Xiaoqi Tan](/) ($ \textsf{xiaoqi.tan@ualberta.ca} $)\
**`Location & Time`**:  CAB 369, MW 2:00pm – 3:20pm\
**`Office hour`**: After class or by appointment\
**`Slack workplace`**: Join the [ODMU@UofA slack workspace](https://join.slack.com/t/odmu/signup) with your $\textsf{@ualberta.ca}$ email for online discussions about course-related questions, or topics in the general field of **O**ptimization \& **D**ecision-**M**aking under **U**ncertainty. 

---

## `Course Overview`
>
Many real-world problems involves making decisions, over a period of time, in the presence of different forms of uncertainty. These challenges arise in Internet advertising, energy sustainability, transportation, financial trading, healthcare, and a wide range of problems in artificial intelligence and machine learning. In different application scenarios, these speciﬁc decision problems might look different at first glance; however, the models and algorithms needed to address them are often similar. 

>
In this research-oriented course, we will review recent developments and discuss open directions in the general field of decision-making under uncertainty via several modern optimization lenses. We will start by giving a brief introduction to **convex optimization**. Topics in this part include basic concepts of convex sets and convex functions, canonical convex problems, Lagrange multipliers, duality theory, KKT optimality conditions, and standard convex optimization algorithms. After that, we will discuss models and algorithms to handle different forms of uncertainty in optimization and decision-making. Major topics to be covered include: i) **Online algorithms and Online optimization**; ii) **Stochastic  optimization, learning, and approximation**; and iii) **Algorithmic game theory + Mechanism design**. These topics are highly interdisciplinary -- they have strong ties to various disciplines such as theoretical computer science, artificial intelligence, machine learning,  economics, operations research, statistics, and control. The course is theoretical in nature, but most problems considered will be motivated and illustrated by practical examples.


## `Course Objectives`
>
1. Understand the basics of optimization theory, algorithms, and applications.
>
2. Understand how to build rigorous mathematical models and develop efficient algorithms, with provable guarantees, for optimization and decision-making under different forms of uncertainty.
- Be well prepared to conduct research in areas such as i) online optimization, learning, and decision-making; ii) stochastic optimization, learning, and approximation; and iii) algorithmic game theory, mechanism design, and auctions.


## `Course Policies`

>
**`Textbook`**: This course does not require any textbook. There will be references (e.g., lecture slides, notes, papers, and/or book chapters) suggested for each lecture.
>
**`Prerequisites`**: You should know material in standard UG courses in calculus, linear algebra, probability, and algorithms very well. Having some optimization background will be a bonus. 
>
**`Grading`**: Participation (10%); Assignment (20%); Project: Proposal (20%) + Presentation (20%) + Report (30%).
>
**`Assignment`**: The assignment includes two parts. Part I consists of questions that
everyone must answer with rigorous proofs (no programming required). In Part II, there are some open-ended questions. You are free to pick any one from the list. Solving these questions will need some mathematical derivations, and you may also ﬁnd it necessary to write some code to demonstrate some numerical results. There is no designated programming language, but you are recommended to use Python if you can. The submission of your solution includes a written report and a link to the code (e.g., a repository in GitHub). 
>
**`Project`**: You are expected to complete a research-flavored project  which includes a proposal, an in-class presentation, and a written report.
>
- `Proposal`: You need to selected two papers that are related to this course, and prepare a one-page review of the main idea, methodologies, and key results of the papers selected, and another one-page proposal of what could be improved, what could be done differently, and/or other new discoveries. Your paper review and proposal will be evaluated by using a scoring grid relative to the following criteria: i) depth, rigor, and thoroughness of the review, ii) clarity and merit of the proposal, and iii) coherence between the review and the proposal. Please note that the one-page proposal is proportionally more important, and hence the name "Proposal" rather than "Paper Review".
- `Presentation`: You will give a presentation in class -- based on your paper review and proposal.  Your presentation will be evaluated by using a scoring grid relative to the following criteria: i) clarity of the content (e.g., structure of the slides), ii) clarity of the presentation, and iii) effectiveness of addressing possible questions. These three criteria are equally important in evaluating your presentation.
- `Report`: This is a research-oriented graduate course, and it is up to you to decide what your final report is about -- proof of a new theorem, a new implementation, or a new survey -- but it must be related to your proposal, your presentation, and of course, the topics covered by this course. Your final report will be evaluated by using a scoring grid relative to the following criteria: i) novelty, ii) consistency to the proposal and presentation, and iii) relevance to this course. Please note that **novelty** does not necessarily mean novel research results: you will be awarded bonus marks if you make novel research discoveries that are relevant to this course, but they are not necessary to get full marks in the project. For more details, please refer to our [**project guidlines**](https://drive.google.com/file/d/1BYB-ftB5gIFb6O0F6_jZPY1O6wFscHME/view?usp=sharing).

>
For each evaluation criteria, a score will be assigned between 1 and 5 (i.e., 1: very low, 2: low, 3: medium, 4: high, 5: very high). When preparing your proposal and report, you are highly recommended to use Latex ([**template here**](https://drive.google.com/open?id=1QpiZ9CkmqpVdBgskqOLDR9Bx23cyKeyJ&authuser=xt7%40ualberta.ca&usp=drive_fs)). 



## `Course Schedule` 

| Date            | Topic                                         |  References                 |
|:-------------   | :-----                                        |  :-----                   |
| Sept. 5         |  ~~No Class~~  <mark> (Labour Day) </mark>   |     |
| Sept. 7          | `Lec 1: Overview` <br> Course topics; Logistics    |       [L1-slides](https://drive.google.com/file/d/1g-LbtVXtbCDj_GavkliXJCOK9d3A5hwa/view?usp=sharing)              |
|                 | **`Convex Optimization: A Brief Introduction`**     |       |
| Sept. 12         | `Lec 2: Concepts` <br> Convex sets <br> Convex functions <br> Convex problems         |  [L2-slides](https://drive.google.com/file/d/1o2pw4i2mczxlcmdyuS_5s5b_CAO_erqs/view?usp=sharing)  <br> [BV Book](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf): Ch1-Ch4 |
| Sept. 14       | `Lec 3: Theory` <br> Lagrange multipliers <br> Duality theory <br> Optimality conditions    |  [L3-slides](https://drive.google.com/file/d/1h66_jzkPXbYj3KSozKKOHU9elsF0GNWo/view?usp=sharing) <br> [BV Book](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf): Ch5 <br> [DB Book](http://web.mit.edu/dimitrib/www/Convex_Theory_Entire_Book.pdf)  |
| Sept. 19       | `Lec 4: Algorithms` <br> Gradient descent <br> Newton's methods <br> Barrier methods <br> Dual ascent     | [L4-slides](https://drive.google.com/file/d/14XZVz5H_F4dN_0Sm66_776tfepyozlAh/view?usp=sharing), [notes](https://drive.google.com/file/d/14opoG-nidFOTArpdjusdBPNBfN8_beuT/view?usp=sharing) <br> [BV Book](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf): Ch9-Ch11 | 
|                 | **`Online Algorithms; Online Optimization`**     |   |
| Sept. 21       |  `Lec 5: Online algorithms` <br> Ski rental problem <br> Deterministic vs Randomized <br> Yao's principle  |  [L5-slides](https://drive.google.com/file/d/17SEJ7fLpTmc6FeaNPaORpAr4IS6tpdYm/view?usp=sharing) <br> Reading: [Paper 1](https://drive.google.com/file/d/15CMGbb64D9Uc6TKPK-unaxDqCc31Ag3c/view?usp=sharing), [Paper 2](https://drive.google.com/open?id=15EHhl6OT-QXWR3lYZzHeZI3HKHtfQPqV&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> Extra reading: [Paper 3](https://drive.google.com/open?id=15HJADsqRHsJY6rUsOgBdvxKSvf7JNpM9&authuser=xt7%40ualberta.ca&usp=drive_fs) |
| Sept. 26      |  `Lec 6: Online primal-dual (OPD)`  <br> Time series search <br> $k$-max and $k$-min search<br> One-way trading <br> The OPD approach (1st look) |  [L6-slides](https://drive.google.com/open?id=1Cw_xedStfUxNr6ATNJXWzmHQYsDZPKgg&authuser=xt7%40ualberta.ca&usp=drive_fs), [notes](https://drive.google.com/file/d/1DfGPvfkmlmZ_4uMCVFLP1sSZHdSM82Kh/view?usp=sharing)  <br>  Reading: [Paper 1](https://drive.google.com/open?id=179SOo-_E-BkQNyH41reNTEtGAR8MchWV&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 2](https://drive.google.com/open?id=17EucWfTjRC-SiHsqWOfEJEc0tcREIKbo&authuser=xt7%40ualberta.ca&usp=drive_fs)  <br> Extra reading: [Paper 3](https://sodalab.ca/documents/MAMA2022_OSCC_TanYuBoutaba.pdf), [Paper 4](https://drive.google.com/open?id=1DXrp8wQWJuIcgzKpNZ5UJGIaS7CytW62&authuser=xt7%40ualberta.ca&usp=drive_fs) |
| Sept. 28    |  `Lec 7: Online knapsack` <br> Threshold-based algorithms <br> The OPD approach (2nd look)  |  [L7-slides](https://drive.google.com/open?id=1EsJ7_hYJNfDQnQO2bYcq_hV1WeKID5D0&authuser=xt7%40ualberta.ca&usp=drive_fs), [notes](https://drive.google.com/open?id=1GZyofaptlINY7XegXNr9u3GUhlVjifZq&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> Reading: [Paper 1](https://drive.google.com/open?id=17vOHlkORgcvQ2oRPIr-f7c1k15EpKM9J&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 2](https://drive.google.com/open?id=17pi9wdTudCKRqk4Xu3q0asUOsB7thMui&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> Extra reading: [Paper 3](https://drive.google.com/open?id=1DJ9k4rGEL82V1lyRbZb4iYcOVv6AAE5v&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 4](https://drive.google.com/open?id=1DHXsrtibrkf1BA_tjuCXEZw3XoIPrME9&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> [More related papers](https://drive.google.com/drive/folders/1EFIyLQhTgwlp_Ly6KD236_D6ygV8IFmC?usp=sharing) |
| Oct. 3    |  `Lec 8: Online matching`  <br> RANKING algorithm <br> The OPD approach (3rd look) |   [L8-slides](https://drive.google.com/open?id=1O9_h3Hff6A9e3MhkwJQq2dW6j5N0kzw0&authuser=xt7%40ualberta.ca&usp=drive_fs)  <br> [AM Survey](https://drive.google.com/open?id=1O306UTs9RAd94dbdqglHKScZnMgrkOPB&authuser=xt7%40ualberta.ca&usp=drive_fs), [OPD Survey](https://drive.google.com/open?id=1O06D6MflNXFcPn4rJji_zly8cEDQdh2g&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> Reading: [Paper 1](https://drive.google.com/open?id=1F6tkAE2t61jM-SsdDKrC1CfEH_H7G_kx&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 2](https://drive.google.com/open?id=1FADLNKIZMHKBtycONaJEipHhxG971oTX&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 3](https://drive.google.com/open?id=1FECbBF07utZMzJ9GyGCW-wiKi9g9GBXw&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> Extra reading: [Paper 4](https://drive.google.com/open?id=1FMN34_0kn-qyLd6yXE9qvxtoKC6Ufw9I&authuser=xt7%40ualberta.ca&usp=drive_fs)|
| Oct. 5    |  `Lec 9: Online convex optimization (OCO)` <br> The Experts problem <br> OCO: intro + algorithms + variants <br> Competitive ratio vs. Regret (1st look) |  [L9-slides](https://drive.google.com/open?id=1Of8blXTl__Ap0B9EG13vAmLodHGQ6FmJ&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> [EH Book](https://drive.google.com/open?id=1FRCzXCkN5QWJRxZFRzk2NrlXzZoc-LH4&authuser=xt7%40ualberta.ca&usp=drive_fs), [CBL Book](https://drive.google.com/open?id=1OK2ZAt87Ix1tPWGsTdyYmWe9rljWTC3p&authuser=xt7%40ualberta.ca&usp=drive_fs), [SSS Survey](https://drive.google.com/open?id=1FgFS35JmzAI3kEf2Ccqm3hcWFoDxF2ym&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> SOCO reading: [Paper 1](https://drive.google.com/open?id=1FRfhYS4tHAG5d6EZueJrFkAeZ6SAupoR&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 2](https://drive.google.com/open?id=1FSjFurJ7DtWDk3QguCogcjZXg-jPOmJ-&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 3](https://drive.google.com/open?id=1FdR77pL93Usd9n_oxQ0Lmln9ptnEvaR-&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> CCB reading: [Paper 4](https://drive.google.com/open?id=1FUyuoT_-qO79x67ltpXT_m7OJx0Mivxl&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 5](https://drive.google.com/open?id=1FmIEyF0cUdBhTmiugUWrI8tPJ1HJrtA_&authuser=xt7%40ualberta.ca&usp=drive_fs)  |
| Oct. 10         |  ~~No Class~~  <mark> (Thanksgiving Day) </mark>   |     |
| Oct. 12      |  `Lec 10: Online linear programming (OLP)` <br> OLP: intro + variants <br> Adversarial inputs vs. Random inputs <br> Competitive ratio vs. Regret (2nd look) | [L10-slides](https://drive.google.com/open?id=1PuH0yg2P8EFbfobnfz01RIAfb3_GgHca&authuser=xt7%40ualberta.ca&usp=drive_fs)   <br> OLP reading: [Paper 1](https://drive.google.com/open?id=1PgYULZNIdrtr9lNvksuaXcVlOp86B5V4&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 2](https://drive.google.com/open?id=1PftY7s8K_oNtWJ7Bd4tiDqjE7rvfur4U&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> ROM reading: [Paper 3](https://drive.google.com/open?id=1Pg_Ej_hXKQ5DqqtEuFr-lyI0_fjduoo0&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 4](https://drive.google.com/open?id=1Pj6gBLeCmVOb4eAphHPNrkjKqWSiwkaJ&authuser=xt7%40ualberta.ca&usp=drive_fs) |
| Oct. 17      |  `Lec 11: Beyond worst-case analysis (WCA)` <br> Beyond WCA: why + how  <br> Learning-augmented algorithms <br> Data-driven algorithms | [L11-slides](https://drive.google.com/open?id=1QDf1chRhMQ-VdElZY-v4aS4OuNDEl7Re&authuser=xt7%40ualberta.ca&usp=drive_fs)  <br> Beyond WCA: [Paper 1](https://drive.google.com/open?id=1PjFRN05SK4chkrnUKbifcf_H39bLz0BB&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 2](https://drive.google.com/open?id=1QInR-uU-qQ2csk8j9UlvgcEruYrbvKMx&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 3](https://drive.google.com/open?id=1QKBb7AKOSUJ66VtiGPUNro1fjzeKa8Fn&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> Reading: [Paper 4](https://drive.google.com/open?id=1Q6jsfan-xJTquQYrXYxW3m2x1voUwxND&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 5](https://drive.google.com/open?id=1Q6rkLB7Ta84LDr8aHtL1ILtBsI4ZE0Tc&authuser=xt7%40ualberta.ca&usp=drive_fs)  |
|                 | **`Stochastic Optimization and Learning`** |     |
| Oct. 19         | `Lec 12: Markov decision process (MDP)` <br> MDPs: A brief intro <br> Algorithms: Value/policy iteration; LP approach <br> Example: energy storage control |  [L12-slides](https://drive.google.com/open?id=1QVDfi_s_jUZuV9KyPjjMHgvahVb5QvVG&authuser=xt7%40ualberta.ca&usp=drive_fs)    |
| Oct. 24     | `Lec 13: Reinforcement learning (RL)` <br> RL: A brieft intro <br> Algorithms: Q-learning; Policy gradients; Actor-Critic |  [L13-slides](https://drive.google.com/open?id=1QidBWgozTWfSb1VgIJnl8okcgwiuxdHv&authuser=xt7%40ualberta.ca&usp=drive_fs)  <br> Courses: [CMPUT 609](https://drive.google.com/drive/folders/0B3w765rOKuKANmxNbXdwaE1YU1k?resourcekey=0-JZz-noRuJgogNsg1ljgV8w), [CMPUT 653](https://rltheory.github.io/)  |
| Oct. 26    | `Lec 14: Multi-armed bandits (MABs)` <br> MABs: intro + variants <br> Stochatic bandits; Algorithms                    |    [L14-slides](https://drive.google.com/open?id=1R4tNizIM9SNe_OsZhxOyuJBRjmU33Rkc&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> [LS Book](https://tor-lattimore.com/downloads/book/book.pdf), [BCB Book](http://sbubeck.com/SurveyBCB12.pdf), [Slivkins Book](https://arxiv.org/pdf/1904.07272.pdf) <br> Readings: Papers on pp. 42 |
| Oct. 31   | `Lec 15: Stochastic approximation` <br> The Robbins-Monro algorithm <br> Stochastic gradient descent (SGD); Adaptive SGD <br> Summary: Online vs. Stochastic  |  [L15-slides](https://drive.google.com/open?id=1XmBbumxu07YmnwtNLHEkcKrQ4McZ0y1n&authuser=xt7%40ualberta.ca&usp=drive_fs)  <br> Readings: [Paper 1](https://drive.google.com/open?id=1Xl7g4x6KvAQ_YReNIyhU2VjJPVR8XEnW&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 2](https://drive.google.com/open?id=1XkA-P91hCx-sLg6CPWMQXvisiZ8uBVcG&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 3](https://drive.google.com/open?id=1XlsbD6cCyYRZMowdE-lflyM6HlMsk8I3&authuser=xt7%40ualberta.ca&usp=drive_fs) |
|                 | **`Algorithmic Game Theory; Mechanism Design`**    |  |
| Nov. 2     | `Lec 16: Game theory` <br> Pure-strategy Nash equilibrium   <br>  Mixed-strategy Nash equilibrium | [L16-slides](https://drive.google.com/open?id=1g-p4CH_bgzKpsxDVqd25wX6PkfbB_r9s&authuser=xt7%40ualberta.ca&usp=drive_fs) |
| Nov. 7           |  ~~No Class~~  <mark> (Reading Week Break)</mark>              |        |
| Nov. 9           |  ~~No Class~~  <mark> (Reading Week Break)</mark>              |        |
| Nov. 11          |         |   **Proposal Due** ([eClass link](https://eclass.srv.ualberta.ca/course/view.php?id=79669))   |
| Nov. 14          |  `Lec 17: Mechanism design (MD)` <br> Key concepts of MD  <br> Auctions; Vickrey-Clarke-Groves mechanisms <br> Optimal auctions  |  [L17-slides](https://drive.google.com/open?id=1R38kxug35PHzUndgbKnGFdJRdHEPKX5h&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> MD reading: [Econ](https://drive.google.com/open?id=1R0mimJnyT3wgIc04bzRZiyx3M-GXcPUu&authuser=xt7%40ualberta.ca&usp=drive_fs), [CS](https://drive.google.com/open?id=1RCRPzErRgH4M_0nqg3jbMJuMdELQT8p1&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> Auctions reading: [Survey](https://drive.google.com/open?id=1RD2Rm8yrow0uULCj3hstqk_fk-kW3Oqd&authuser=xt7%40ualberta.ca&usp=drive_fs) <br> Readings: [Paper 1](https://drive.google.com/open?id=1RC7bLkFLIbIbPnR7AaPdYMHgXZwxjgfA&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 2](https://drive.google.com/open?id=1R09v8wp6hbPtG2h-un4OgYWXNs91wm9a&authuser=xt7%40ualberta.ca&usp=drive_fs)       |
| Nov. 16    |  `Lec 18: Online mechanism design` <br> Online auctions <br> Posted price mechanisms <br> Prophet inequalities <br> **Course summary**   | L18-slides <br> Reading: [Paper 1](https://drive.google.com/open?id=1R4GPOzNA-lHBFCyehvEE8zBrLW9sMyCC&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 2](https://drive.google.com/open?id=1R83eA1Swirt6otBGFIZLQLSDJPxpvATU&authuser=xt7%40ualberta.ca&usp=drive_fs), [Paper 3](https://drive.google.com/open?id=1R6E7d9bFeqwylaZjf9hKGdhMvdApS6eM&authuser=xt7%40ualberta.ca&usp=drive_fs) <br>[More readings](https://drive.google.com/open?id=1R51ULVFMlglEUoK4qG375aNi7-1aiuz4&authuser=xt7%40ualberta.ca&usp=drive_fs) <br>  |
|       |    |     **Assignment -- Part I** ([pdf](https://drive.google.com/open?id=1vgPYkf0KZqrW3u8JKJAQI7Abz87cRmvu&authuser=xt7%40ualberta.ca&usp=drive_fs), [tex](https://drive.google.com/open?id=1vkVALqUe6D8beVfUJCOz0AqnZiygCL6N&authuser=xt7%40ualberta.ca&usp=drive_fs)) <br> **Assignment -- Part II** ([pdf](https://drive.google.com/open?id=1vk0z84Z0Hwo438SYOTOgXOiWzDhE9mrH&authuser=xt7%40ualberta.ca&usp=drive_fs), [tex](https://drive.google.com/open?id=1vnPHJcXFEtGusaj273mJCf1OCFny0UNe&authuser=xt7%40ualberta.ca&usp=drive_fs))      |
|                 | **`Project - Presentations`** |               |
| Nov. 21    |  **Student Name** <br> Topic:   <br><br>  **Student Name** <br> Topic:   <br><br> **Student Name** <br> Topic: <br><br>  **Student Name** <br> Topic:                |       |
| Nov. 23    |  **Student Name** <br> Topic:   <br><br>  **Student Name** <br> Topic:   <br><br> **Student Name** <br> Topic: <br><br>  **Student Name** <br> Topic:                 |       |
| Nov. 28    |  **Student Name** <br> Topic:   <br><br>  **Student Name** <br> Topic:   <br><br> **Student Name** <br> Topic: <br><br>  **Student Name** <br> Topic:                |       |
| Nov. 30    |  **Student Name** <br> Topic:   <br><br>  **Student Name** <br> Topic:   <br><br> **Student Name** <br> Topic: <br><br>  **Student Name** <br> Topic:                |       |
| Dec. 5     |    **Student Name** <br> Topic:   <br><br>  **Student Name** <br> Topic:   <br><br> **Student Name** <br> Topic:   <br><br>  **Student Name** <br> Topic:                |       |
| Dec. 7     |     ~~No Class~~ |  **Project Due** (Final report) <br> **Assignment Due** (Part I & Part II)  
