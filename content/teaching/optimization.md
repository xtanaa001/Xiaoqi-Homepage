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