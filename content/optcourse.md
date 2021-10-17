---
title: CMPUT675 - Fall 2021
---


# `CMPUT 675 (Fall 2021):`
# `Optimization and Decision Making under Uncertainty`

**`Instructor`**: [Xiaoqi Tan](/) (xiaoqi.tan@ualberta.ca)\\
**`Location & Time`**:  VVC 2-227, MW 2:00pm – 3:20pm\\
**`Office hour`**: After class or by appointment\\
**`Slack workspace`**: Join our [Slack workspace](https://join.slack.com/t/optcourse/signup) with your $\textsf{@ualberta.ca}$ email

---


## `Course Overview`

Many real-world problems involves making decisions, over a period of time, in the presence of different forms of uncertainty. These challenges arise in Internet advertising, energy sustainability, transportation, financial trading, healthcare, and a wide range of problems in artificial intelligence and machine learning. In different application scenarios, these speciﬁc decision problems might look different at first glance; however, the models and algorithms needed to address them are often similar. 

In this research-oriented course, we will review recent developments and discuss open directions in the general field of algorithmic decision-making under uncertainty via several modern optimization lenses. We will start by giving an introduction to `convex optimization`, topics in this part include basic concepts of convex sets and convex functions, canonical convex problems, Lagrange multipliers, duality theory, and KKT optimality conditions. After that, we will discuss models and algorithms to handle different forms of uncertainty in algorithmic decision-making. Some major topics to be covered include: i) `Online algorithms and online optimization`; ii) `Stochastic modeling, optimization, and learning`; and iii) `Algorithmic game theory and mechanism design`. These topics are highly interdisciplinary - they have strong ties to various disciplines such as Theoretical Computer Science, Artificial Intelligence, Machine Learning,  Economics, Operations Research, Statistics, and Control. The course is theoretical in nature, but most problems considered will be motivated and illustrated by practical examples.


## `Course Objectives`

- Understand the basics of optimization theory, methods, and applications.
- Understand how to build rigorous mathematical models and develop efficient algorithms for sequential decision-making problems under different forms of uncertainty.
- Be well prepared to conduct research in areas such as online algorithms, stochastic modeling and optimization, algorithmic game theory, and mechanism design.

## `Course Policies`

**`Textbook`**: This course does not require any textbook. There will be references (e.g., lecture slides, notes, papers, and/or book chapters) suggested for each lecture.

**`Prerequisites`**: You should know material in standard UG courses in calculus, linear algebra, probability, and algorithms very well. Having some optimization background will be a bonus. 

**`Grading`**: Participation (10%); Assignments (20%); Project: Proposal (20%) + Presentation (20%) + Report (30%).

**`Homeworks`**: There are three research-oriented questions, and you are free to pick any one from the list. Solving these questions will need some mathematical derivations, and you may also ﬁnd it necessary to write some code to demonstrate some numerical results. There is no designated programming language, but you are recommended to use Python if you can. The submission of your solution includes a written report and a link to the code (e.g., a repository in GitHub). 

**`Project`**: You are expected to complete a research-flavored project  which includes a proposal, an in-class presentation, and a written report. 

- _Proposal_: You need to selected two papers that are related to this course, and prepare a one-page review of the main idea, methodologies, and key results of the papers selected, and another one-page proposal of what could be improved, what could be done differently, and/or other new discoveries. Your paper review and proposal will be evaluated by using a scoring grid relative to the following criteria: i) depth, rigor, and thoroughness of the review, ii) clarity and merit of the proposal, and iii) coherence between the review and the proposal. Please note that the one-page proposal is proportionally more important, and hence the name "Proposal" rather than "Paper Review".
- _Presentation_: You will give a presentation in class -- based on your paper review and proposal.  Your presentation will be evaluated by using a scoring grid relative to the following criteria: i) clarity of the content (e.g., structure of the slides), ii) clarity of the presentation, and iii) effectiveness of addressing possible questions. These three criteria are equally important in evaluating your presentation.
- _Report_: This is a research-oriented graduate course, and it is up to you to decide what your final report is about -- proof of a new theorem, a new implementation, or a new survey -- but it must be related to your proposal, your presentation, and of course, the topics covered by this course. Your final report will be evaluated by using a scoring grid relative to the following criteria: i) novelty, ii) consistency to the proposal and presentation, and iii) relevance to this course. Please note that **`Novelty`** does not necessarily mean novel research results: you will be awarded bonus marks if you make novel research discoveries that are relevant to this course, but they are not necessary to get full marks in the project. For more details, please refer to our [project guidlines](https://drive.google.com/file/d/1KaYzXP7_rg-533yhI2kpgRfUBskqThR8/view?usp=sharing). 

For each evaluation criteria, a score will be assigned between 1 and 5 (i.e., 1: very low, 2: low, 3: medium, 4: high, 5: very high). When preparing your proposal and report, you are highly recommended to use Latex (templates will be provided). 


## `Course Schedule` 

We will slant towards learning the design and analysis of algorithms for sequential decision problems where the uncertain information is either completely unknown, or characterized by some statistical models. Estimation or prediction of uncertain parameters is not the major focus of this course. The exact topics are subject to change.


| Date            | Topic                                         |  References                 |
|:-------------   | :-----                                        |  :-----                   |
| Sept. 1 (`L1`)  | Overview <br> Course topics <br> Logistics    |     [L1-slides](https://drive.google.com/file/d/1lseXfLxfmbkPr6OKUkGehPhl5CuU1JwR/view?usp=sharing)                     |
| Sept. 6         | ~~No Class~~  <mark> (Labour Day)</mark>                      |                          |
|                 | **`Convex Optimization: A Brief Introduction`**     |       |
| Sept. 8 (`L2`)    | CONCEPTS: <br> Convex sets <br> Convex functions <br> Convex problems         |  [L2-slides](https://drive.google.com/file/d/1nc5oBnOj3WK6muK2MlY782t5zKWyM36s/view?usp=sharing) <br> [BV Book](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf): Ch1-Ch4  |
| Sept. 13 `(L3)`   | THEORY: <br> Lagrange multipliers <br> Duality theory <br> Optimality conditions    |  [L3-slides](https://drive.google.com/file/d/1GAs-2lPzp2Nfx-ReF2fgO7Tm8I4MfUTA/view?usp=sharing) <br> [BV Book](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf): Ch5 <br> [DB Book](http://web.mit.edu/dimitrib/www/Convex_Theory_Entire_Book.pdf) <br>   |
| Sept. 15 `(L4)`   | ALGORITHMS: <br> Gradient descent <br> Newton's methods <br> Barrier methods <br> Dual ascent     |  [L4-slides](https://drive.google.com/file/d/1Ge51lp3AOqY8KBeZSyc4ck5HU5kG_qrG/view?usp=sharing) <br> [L4-notes](https://drive.google.com/file/d/1GbP9Okh5hP34sAi9iAR0JxBp7OCunSPD/view?usp=sharing) <br> [BV Book](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf): Ch9-Ch11   |
|                 | **`Online Algorithms and Online Optimization`**     |       |
| Sept. 20 `(L5)`   |  Online algorithms <br> Ski rental problem <br> Deterministic vs Randomized <br> Yao's principle  |  [L5-slides](https://drive.google.com/file/d/1HAZC97jAVHDfgyKrU28NlJYj3LZny08o/view?usp=sharing)  |
| Sept. 22 `(L6)`   |  Online primal-dual  <br> Time series search <br> $k$-search <br> One-way trading |  [L6-slides](https://drive.google.com/file/d/1Hg8W9MVm-FAPa4SQLZCkqRFztHXHiEiZ/view?usp=sharing) <br> [L6-notes](https://drive.google.com/file/d/1Hni4WBgcRXk-d7z2gu0RSga9-FijA3V8/view?usp=sharing)  <br>  [EI-Yaniv et al (2001)](https://drive.google.com/file/d/1HFVPGuBhrQZ2lD8xLUt1ChIY3vU9NIPa/view?usp=sharing) <br> [Lorenz et al (2009)](https://drive.google.com/file/d/1HG2D0slxIeFwSjArIi_UcdMixKwcVRE3/view?usp=sharing)  |
| Sept. 27 `(L7)`   |  Online knapsack problems <br> Threshold algorithms   |  [L7-slides](https://drive.google.com/file/d/1GBLRLQYiizLoJV3912mdHKBo2oUmQOBS/view?usp=sharing)  <br> [L7-notes](https://drive.google.com/file/d/1GB-ouKSbQHz6Qo6xIaFPD2VmdLXKy4js/view?usp=sharing)  <br> [MSV (1995)](https://drive.google.com/file/d/1GcUC8A_RZlii6qJzpxmDzEWxkt9if0n_/view?usp=sharing) <br> [CZL (2008)](https://drive.google.com/file/d/1Gcba3OZdXHXuZzDB2zJPa9ZuajkQYPRy/view?usp=sharing) <br> [Tan et al (2020)](https://drive.google.com/file/d/1GdX3IdS_QNmnClz3De5Uu-GCOACFG6h-/view?usp=sharing)  |
| Sept. 29 `(L8)`   |  Online matching <br> RANKING algorithm |   [L8-slides](https://drive.google.com/file/d/1GVwXHC8-h_Y6LVdCPnC6yieXOZSEyvd3/view)  <br> [KVV (1990)](https://drive.google.com/file/d/1GdcpjJ5oyxH-YKu8UZ90EI7_1RVBdRAA/view?usp=sharing) <br> [BM (2008)](https://drive.google.com/file/d/1Gdze-GoycfIby2zAnjonAH8zmOOSc8HP/view?usp=sharing) <br> [Eden et al (2020)](https://drive.google.com/file/d/1GerA-cIPKJ0Q5NsP45H9Wt-go-rrxJVO/view?usp=sharing) <br> [DJK (2013)](https://drive.google.com/file/d/1GexjPTNUeyYDjIWG7CI5bIMj3awZGUyt/view?usp=sharing) |
| Oct. 4 `(L9)`     |  Online convex optimization <br> Smoothed online convex optimization <br> Convex body chasing  |  [L9-slides](https://drive.google.com/file/d/1HiCilIlOU2IPqR3iXQOiaNGsjzQO747D/view?usp=sharing) <br> [Hazan Book](https://drive.google.com/file/d/1GQh_MEXG_KAl24CQ7nkIg2iL4NsEC4zf/view?usp=sharing) <br> [Lin et al 2011](https://drive.google.com/file/d/1KSTpBEY7MpkyxY6aSKSTIJmBdxGFou3K/view?usp=sharing) <br> [Bansal et al 2015](https://drive.google.com/file/d/1KUL0a8XUM7g0_UV1HalQAW_2xC_kazv8/view?usp=sharing) <br> [Sellke 2019](https://drive.google.com/file/d/1KUkdeghs0bt1s3NH3JkwgQfSBvJ_RpUd/view?usp=sharing)  |
| Oct. 6 `(L10)`    |  Beyond worst case analysis <br> Online algorithms with predictions | [L10-slides](https://drive.google.com/file/d/1K9cv8Vqz3Aw5RzJtdqZT79TmAX_dzvRm/view?usp=sharing)  <br> [Roughgarden 2018](https://drive.google.com/file/d/1KVWPUB8Os28LdfkloXzSkVX9X3n3mu7Q/view?usp=sharing) <br> [Purohit et al 2018](https://drive.google.com/file/d/1KW22Jw21vpK1S0Kv3rgcHhkrZpyxdzkK/view?usp=sharing) <br> [Bamas et al 2020](https://drive.google.com/file/d/1KXJ6mI0MP4er38nlLMDPj2byzY9iPJv2/view?usp=sharing)  |
| Oct. 11         |  ~~No Class~~  <mark> (Thanksgiving Day) </mark>   |     |
|                 | **`Stochastic Modeling, Optimization, and Learning`** |     |
| Oct. 13  `(L11)`   | Markov decision process  |  [L11-slides](https://drive.google.com/file/d/1ReDm-WyLhJX-mPB6vBAEjSoJF8HeE7tr/view?usp=sharing)    |
| Oct. 18  `(L12)`  | Reinforcement learning |      |
| Oct. 20  `(L13)`  | Multi-armed bandit                     |      |
| Oct. 25  `(L14)`  | Stochastic approximation (_tentative_)  |     |
|                 | **`Algorithmic Game Theory and Mechanism Design`**    |  |
| Oct. 27  `(L15)`  | Game theory <br> Network congestion games <br> Price of anachy             |     |
| Nov. 1  `(L16)`  |  Mechanism design; Auctions  |      |
| Nov. 3 `(L17)`   |  Online mechanism design <br> Prophet inequalities     | **Assignment** <br> **Released**    |
| Nov. 8           |  ~~No Class~~  <mark> (Reading Week Break)</mark>      |      |
| Nov. 10          |  ~~No Class~~  <mark> (Reading Week Break)</mark>      |   **Proposal Due**    |
|                 | **`Project - Presentations`** |               |
| Nov. 15  `(L18)` |                  |       |
| Nov. 17  `(L19)`  |                 |       |
| Nov. 22  `(L20)`  |                 |       |
| Nov. 24  `(L21)`  |                 |       |
| Nov. 29  `(L22)`  |                 |       |
| Dec. 1  `(L23)`   |                 |       |
| Dec. 6    |  ~~No Class~~               |  **Project Due** <br> **Assignment Due**    |
