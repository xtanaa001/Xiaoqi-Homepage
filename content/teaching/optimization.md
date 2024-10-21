---
title: CMPUT676 - Fall 2024
---

<style>
    
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

## `CMPUT 676: Optimization and Decision-Making under Uncertainty`
##  Fall 2024

**`Instructor`**: [Xiaoqi Tan](/) (xiaoqi.tan$\textsf{@}$ualberta.ca)\
**`Location & Time`**:  GSB 7-11, MW 12:00 PM – 1:20 PM\
**`Office hour`**: After class or by appointment\
<!-- **`Slack`**: Join the [**Tan@CS-UofA slack workspace**](https://join.slack.com/t/odmu/signup) with your $\textsf{@ualberta.ca}$ email for online discussions about course-related questions.  -->

---

### `Course Overview`
>
Many real-world problems involve making decisions over time in the presence of various forms of uncertainty. These challenges arise in fields such as Internet advertising, energy sustainability, transportation, financial trading, healthcare, and a wide range of problems in artificial intelligence and machine learning. Although these specific decision problems may initially appear different in various application scenarios, the models and algorithms needed to address them are often similar.

>
In this research-oriented course, we will review recent developments and discuss open directions in the general field of decision-making under uncertainty through several modern optimization lenses. We will begin with a brief introduction to convex optimization, covering basic concepts of convex sets and convex functions, canonical convex problems, Lagrange multipliers, duality theory, KKT optimality conditions, and standard convex optimization algorithms. Following this, we will explore models and algorithms designed to handle different forms of uncertainty in optimization and decision-making. Major topics include: i) online optimization and competitive analysis; ii) stochastic optimization, learning, and approximation; and iii) algorithmic game theory and mechanism design. These topics are highly interdisciplinary, with strong connections to theoretical computer science, artificial intelligence, machine learning, economics, operations research, statistics, and control. While the course is theoretical in nature, most problems discussed will be motivated and illustrated by practical examples.

>
**Notes**: We welcome high level undergrads to audit or take the course (subject to administrative approval). 

---

### `Course Project`

>
The main assignment of this course is to complete a course project which includes a proposal (20%), an in-class presentation (30%), and a final report (50%). 
>
**Proposal** (20%): You need to select 1-2 papers from this [**`list`**](https://docs.google.com/document/d/1lgP59qrMdMtr9EH7UQF3Qu4010K8q8Duj4oEbYiY6Ts/edit?usp=sharing) and prepare a _one-page review_ (covering the main idea, methodologies, and key results of the selected papers) and a separate _one-page proposal_ (containing potentially multiple ideas, such as improvements, alternative approaches, or new discoveries). Your paper review and proposal will be evaluated using a scoring grid based on the following criteria: i) depth, rigor, and thoroughness of the review, ii) clarity and merit of the proposal, and iii) coherence between the review and the proposal. Please note that the one-page proposal is proportionally more important, which is why the task is titled “Proposal” rather than “Paper Review.”
>
**Presentation** (30%): You will give an in-class presentation based on your paper review and proposal. Your presentation will be evaluated using a scoring grid based on the following criteria: i) clarity of the content (e.g., structure of the slides), ii) clarity of the presentation, and iii) effectiveness in addressing questions. These three criteria are equally important in evaluating your presentation.
>
**Final Report** (50%): You are expected to complete this course with an 8-10 page final report. As a research-oriented graduate course, it is up to you to decide the focus of your final report—whether it be a proof of a new theorem, a new implementation, or a new survey—but it must be related to your proposal. Your final report will be evaluated using a scoring grid based on the following criteria: i) novelty, ii) consistency with the proposal and presentation, and iii) relevance to this course. Please note that novelty does not necessarily mean novel research results. While you will receive bonus marks for making novel research discoveries relevant to this course, they are not required to receive full marks on the project.
<!-- For more details, please refer to our [**project guidlines**](https://drive.google.com/file/d/1BYB-ftB5gIFb6O0F6_jZPY1O6wFscHME/view?usp=sharing). -->

---

### `Course Schedule and Readings` 

| Date            | Topics                                         |  References and Readings                 |
|:-------------   | :-----                                        |  :-----                   |
| Sept. 4          | `Lec 1: Overview` <br> Course topics; Logistics    |       [L1-slides](https://drive.google.com/open?id=1sY_QFUzIOT1eXjVvEG5sjt00JBY2DwZ9&usp=drive_fs)               |      
|                 | **`Convex Optimization (A brief intro)`**     |       |
| Sept. 9         | `Lec 2: Concepts` <br> Convex sets <br> Convex functions <br> Convex problems         |  [L2-slides](https://drive.google.com/open?id=1sowdEEi62AGmCLZ1B_aU01KW1Hk0_W2w&usp=drive_fs) <br> [BV Book](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf): Ch1-Ch4 |
| Sept. 11       | `Lec 3: Theory` <br> Lagrange multipliers <br> Duality theory <br> Optimality conditions    |  [L3-slides](https://drive.google.com/open?id=1siPM5shl4b45PatkQHpBnvaLqW5uLAII&usp=drive_fs)  <br> [BV Book](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf): Ch5 <br> [DB Book](http://web.mit.edu/dimitrib/www/Convex_Theory_Entire_Book.pdf)  |
| Sept. 16       | `Lec 4: Algorithms` <br> Gradient descent <br> Newton's methods <br> Barrier methods <br> Dual ascent     | [L4-slides](https://drive.google.com/open?id=1soQApib-aBmmb_qh9OAi6bdFKOc55d-J&usp=drive_fs) <br> [BV Book](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf): Ch9-Ch11 | 
|                 | **`Online Optimization`**     |   |
| Sept. 18       |  `Lec 5: Online Algorithms (Basics)` <br> Ski rental problem <br> Deterministic vs Randomized <br> Yao's principle  |  [L5-slides](https://drive.google.com/open?id=1ssEw93oq1XltxrkESI3k_aRjWLEfFFHE&usp=drive_fs) <br> [BP book: Ch1-Ch3](https://drive.google.com/open?id=1x6v_BeCvtGCZycIplfngO0OFHhhJrakv&usp=drive_fs) <br> [Ski rental](https://cs.brown.edu/~claire/Talks/skirental.pdf)|
| Sept. 23      |  `Lec 6: Online Primal-Dual (OPD)`  <br> Time series search <br> $k$-max and $k$-min search<br> One-way trading <br> The OPD approach (1st look) |  [L6-slides](https://drive.google.com/open?id=1t2fijovROq75FF6ROa57IUsebr2DquVN&usp=drive_fs)  <br>  [Online search and one-way trading](https://drive.google.com/open?id=1vPkn4GevwQhk3eArkUCzR2dT4WWC_C0X&usp=drive_fs) <br> [$k$-max and $k$-min search](https://drive.google.com/open?id=1wfEqPcnU53IHezDCYC6I4hDBoXHyV-LO&usp=drive_fs) <br> [Online selection with convex costs](https://arxiv.org/pdf/2310.06166)|
| Sept. 25    |  `Lec 7: Online Knapsack` <br> Threshold-based algorithms <br> The OPD approach (2nd look)  |  [L7-slides](https://drive.google.com/open?id=1yFMKGhkgAyLY0xwQVJe1Phbv1vlz_gk5&usp=drive_fs), [notes](https://drive.google.com/open?id=1y84oB2ftSoACKfNtxRM9rZycGNsCUYQi&usp=drive_fs) <br> [Online knapsack and variants](https://drive.google.com/open?id=1vYY6wyca41rkgNF3xeAis3MAqrPWt6MS&usp=drive_fs) <br> [Online knapsack with convex costs](https://drive.google.com/open?id=1yKHnFg28Z6Bpkcw3lJNQzqldzmfLaBuh&usp=drive_fs) <br> [Generized one-way trading; multiple knapsack](https://drive.google.com/open?id=1uPGudwKHBlK0j_ZGA_ELAz05GvjSbEJU&usp=drive_fs) <br> [Knapsack and advice complexity](https://drive.google.com/open?id=1tqe0G3umQw5rd19vRjwSC7d6jLktfn30&usp=drive_fs) |
| Sept. 30         |  ~~No Class~~  <mark> (Statutory Holiday) </mark>   |     |
| Oct. 2    |  `Lec 8: Online Matching`  <br> RANKING algorithm <br> The OPD approach (3rd look) |   [L8-slides](https://drive.google.com/open?id=1yMbtg0rSJMp3kRvXXvWeN_MQdP4HxdL1&usp=drive_fs)  <br> [AM Survey](https://drive.google.com/open?id=1vpQG_eC67pKPqO-iOoZY-n6Nb7R_Dc07&usp=drive_fs), [OPD Survey](https://drive.google.com/open?id=1t_76jd1-fxBE2uZUsC1PHl8LMOxbm9FY&usp=drive_fs) <br> Readings on RANKING: [KVV](https://drive.google.com/open?id=1utyFil16IjYsfIIre-SqFcpIOZ0gpL0d&usp=drive_fs); [An elegant proof](https://drive.google.com/open?id=1vD9zEJhX2MiGsHuROgNCivz1khlN6F2h&usp=drive_fs);  <br>[Economic-based analysis](https://drive.google.com/open?id=1upoZci_G1ScL017OxDAAx27BTgi5bH5i&usp=drive_fs); [Randomized OPD analysis](https://drive.google.com/open?id=1wdyJ_SaoML1Vtc5DlLM_16PxtC4T_zhm&usp=drive_fs)|
| Oct. 7    |  `Lec 9: Online Convex Optimization (OCO)` <br> The Experts problem <br> OCO: intro + algorithms + variants <br> Competitive ratio vs. Regret (1st look) |  [L9-slides](https://drive.google.com/open?id=18SQFRvdZ90Zs_jsii0wn8Kq9_5Rmhuej&usp=drive_fs) <br> [EH Book](https://drive.google.com/open?id=1vx2vE4LwAdXi7B4hYxU8IlQY2Czf5utZ&usp=drive_fs), [CBL Book](https://drive.google.com/open?id=1vMX90hBFPsWoY6IadcJJPVxycrqk9MR9&usp=drive_fs) |
| Oct. 9      |  `Lec 10: Online Linear Programming (OLP)` <br> OLP: intro + variants <br> Adversarial inputs vs. Random inputs <br> Competitive ratio vs. Regret (2nd look) | [L10-slides](https://drive.google.com/open?id=1xjGcY2xFSHUirMFQWRZ9eLHMu-AT7ppu&usp=drive_fs)   <br>  [Random-order models](https://drive.google.com/open?id=1vWTlJJ7AR4x4jyO4JWZWqiLJSobm8g74&usp=drive_fs) <br> [Online LP under ROM](https://drive.google.com/open?id=1ux9TCN5Raglndyq94M0I70AepvnfalHR&usp=drive_fs) <br> [Online LP under IID](https://drive.google.com/open?id=1vPPH8KZteaHwUK69R1AzcH8IGsEkX-MK&usp=drive_fs) |
| Oct. 14         |  ~~No Class~~  <mark> (Statutory Holiday) </mark>   |     |
| Oct. 16      |  `Lec 11: Beyond Worst-Case Analysis (WCA)` <br> Beyond WCA: why + how  <br> Learning-augmented algorithms <br> Data-driven algorithms | [L11-slides](https://drive.google.com/open?id=1MiJtAOkkKrQmc9w3HaaJefDt8-K_b1eg&usp=drive_fs)  <br> [Beyond WCA](https://arxiv.org/pdf/1806.09817) <br> [Algorithms with predictions](https://arxiv.org/pdf/2006.09123) <br> [Data-driven algorithm design](https://arxiv.org/pdf/2011.07177)  |
|                 | **`Stochastic Optimization and Learning`** |     |
| Oct. 21         | `Lec 12: Markov Decision Process (MDP)` <br> MDPs: A brief intro <br> Algorithms: Value/policy iteration; LP approach <br> Example: energy storage control   |  [L12-slides](https://drive.google.com/open?id=1-Ld-gVPaIXuHwcZFImfba_Ocngar3kWk&usp=drive_fs) <br> Courses: [CMPUT 609](https://drive.google.com/drive/folders/0B3w765rOKuKANmxNbXdwaE1YU1k?resourcekey=0-JZz-noRuJgogNsg1ljgV8w), [CMPUT 653](https://rltheory.github.io/)  |
| Oct. 23     | `Lec 13: Multi-Armed Bandits (MABs)` <br> MABs: intro + variants <br> Stochatic bandits; Algorithms                    |    [L13-slides](https://drive.google.com/open?id=1-SpmmpYJttWwLbCxRUNftBULpzxwX_yw&usp=drive_fs) <br> [LS Book](https://tor-lattimore.com/downloads/book/book.pdf), [BCB Book](http://sbubeck.com/SurveyBCB12.pdf), [Slivkins Book](https://arxiv.org/pdf/1904.07272.pdf)   |
| Oct. 28    | `Lec 14: Stochastic Approximation` <br> The Robbins-Monro algorithm <br> Stochastic gradient descent (SGD); Adaptive SGD <br> Summary: Online vs. Stochastic  |  [L14-slides](https://drive.google.com/open?id=1-Pb7rw2ygeLCSkYNpQrGpdmNudO0OgHG&usp=drive_fs)  |
|                 | **`Algorithmic Game Theory; Mechanism Design`**    |  |
| Oct. 30   | `Lec 15: Game Theory` <br> Pure-strategy Nash equilibrium   <br>  Mixed-strategy Nash equilibrium | [L15-slides](https://drive.google.com/open?id=1-WAhGGUwT7Rm2Va5leVyExW849losX9-&usp=drive_fs) |
| Nov. 4     | `Lec 16: Mechanism Design (MD)` <br> Key concepts of MD  <br> Auctions; Vickrey-Clarke-Groves mechanisms <br> Optimal auctions  |  [L16-slides](https://drive.google.com/open?id=1-TJtpxKMBgTK9Osi2Xhs24joX5MPYaAF&usp=drive_fs) <br> MD reading: [Econ](https://drive.google.com/open?id=1vZPfVwRakZLP1fxdVZ9Qg7p_3yDQM9aB&usp=drive_fs), [CS](https://drive.google.com/open?id=1vpcRns0gO2xBaGQOFE_OH-xaW_xKl4sr&usp=drive_fs) <br> Auctions reading: [Survey](https://drive.google.com/open?id=1uAInpAixPcRN63D7UnWWXJpfEA7PUIMu&usp=drive_fs)    |
| Nov. 6           |  `Lec 17: Online Mechanism Design (OMD)` <br> OMD: intro <br> Online auctions <br> Posted price mechanisms <br> Prophet inequalities <br> **Course summary**   | [L17-slides](https://drive.google.com/open?id=1-T2FF-d757y5WQbrdUbS2NeUKZcJHPF8&usp=drive_fs)  |         |
| Nov. 11           |  ~~No Class~~  <mark> (Reading Week Break)</mark>              |         |
| Nov. 13           |  ~~No Class~~  <mark> (Reading Week Break)</mark>              |    **Proposal Due** ([eClass link](https://eclass.srv.ualberta.ca/course/view.php?id=99355))       | 
|            | **`Project   Presentations`** |               |
| Nov. 18    |          |         |
| Nov. 20    |          |         |
| Nov. 25    |          |         |
| Nov. 27    |          |         |
| Dec. 2     |          |         |
| Dec. 4     |          |         |
| Dec. 9     |          |         |  