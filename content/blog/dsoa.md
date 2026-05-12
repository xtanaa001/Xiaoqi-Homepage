---
title: A Plain Markdown Post
---

# A Dynamical Systems Perspective of Online Algorithms

Modern computational systems make decisions continuously and under uncertainty.

Cloud platforms allocate compute resources to incoming jobs. Online marketplaces decide which requests to accept. LLM inference systems dynamically schedule workloads across GPUs. Advertising platforms allocate impressions in real time. In all of these systems, decisions must be made sequentially, without knowing the future.

A central challenge in algorithm design is therefore: how should a system allocate limited resources over time while balancing immediate rewards against future uncertainty?

For decades, online algorithms research has approached this question by searching for a single optimal algorithm — one carefully designed policy that achieves the best possible worst-case guarantee.

But what if there is not just one optimal design?

What if optimal online decision-making is better understood as an entire *space* of possible behaviors?

This question motivated our recent work on **Online Allocation with Convex Costs (OACC)**, where we develop a dynamical-systems framework that characterizes not merely one optimal online algorithm, but infinitely many.

---

## From Fixed Capacities to Convex Costs

Traditional online allocation models often assume hard capacity constraints: once resources are exhausted, no further allocations can be made.

However, many real systems are better modeled by *soft* constraints.

A data center can provision additional compute resources, but doing so becomes increasingly expensive due to energy usage, cooling costs, or carbon emissions. A cloud provider may scale infrastructure elastically, but the marginal cost rises with utilization. LLM inference systems can admit more requests, but high loads may dramatically increase latency and operational costs.

These settings are naturally modeled through **convex production costs**.

Under this framework, the system can continue allocating resources, but the cost of doing so grows nonlinearly with total utilization.

This leads to the Online Allocation with Convex Costs problem:

- requests arrive sequentially,
- decisions are irrevocable,
- allocations generate rewards,
- and resources incur convex costs as utilization increases.

The key challenge is deciding *how kkaggressively* the system should allocate resources now versus reserve them for potentially better future requests.

---

## Online Algorithms as Dynamic Pricing Rules

Many online allocation algorithms can be interpreted as dynamic pricing mechanisms.

As utilization increases, the algorithm raises an internal “price” for consuming additional resources. Incoming requests are accepted only if their value exceeds this evolving threshold.

At the heart of our framework is a **reserve function**:

- a rapidly increasing reserve function behaves conservatively,
- while a flatter reserve function behaves more aggressively.

Traditionally, prior work focused on constructing a *single* reserve function that achieves the optimal competitive ratio.

But this perspective hides a deeper structural question:

> What is the full set of reserve functions that achieve optimal performance?

Surprisingly, this question turns out to be deeply connected to nonlinear dynamical systems.

---

## A Dynamical Systems Perspective

Our main result shows that the design of optimal reserve functions reduces to solving a nonlinear differential equation.

More precisely, the reserve function evolves according to a nonlinear dynamical system whose trajectories correspond to feasible online algorithms.

Under this perspective:

- online algorithms become trajectories in a geometric phase space,
- the optimal competitive ratio emerges as a dominant eigenvalue,
- and the set of all optimal algorithms forms a structured geometric region.

Rather than discovering a single isolated solution, we characterize an entire **optimal design space**.

This viewpoint fundamentally changes how we think about online algorithm design.

Traditionally, optimality is viewed as a single point:

> one algorithm, one proof, one guarantee.

In contrast, our work reveals that optimality can instead be a *continuum* of algorithmic behaviors.

---

## Infinitely Many Optimal Algorithms

One of the most surprising outcomes of our analysis is that there are infinitely many optimal reserve functions achieving the same best-possible competitive ratio.

These algorithms are not arbitrary variations. They form a highly structured family bounded by extremal solutions:

- one corresponding to the most aggressive feasible design,
- and another corresponding to the most conservative feasible design.

Every trajectory between these boundaries yields an optimal online algorithm.

Geometrically, the design space resembles a cone-shaped region filled with infinitely many valid trajectories.

This geometric structure provides a new lens for understanding online decisions:\
instead of searching for a single handcrafted policy, we can study the entire landscape of optimal behaviors.

---

## Mixing Dynamic and Static Pricing

The characterized design space also enables new algorithmic constructions that are difficult to see from traditional analyses.

One particularly intriguing result is that we can combine:

- dynamic pricing phases,
- and static pricing phases,

without sacrificing worst-case optimality.

This is surprising because, in many online decision problems, static and dynamic pricing are viewed as opposite ends of a trade-off:

- fully dynamic pricing offers adaptability,
- while static pricing offers simplicity and stability.

In our setting, however, these are not competing paradigms. They become modular components that can be flexibly combined within the same optimal design.

This reveals a fundamentally richer structure underlying online allocation with convex costs.

---

## Robustness Under Unknown Costs

Real systems rarely know their exact operating costs in advance.

Energy prices fluctuate. Hardware efficiency changes over time. Workload characteristics evolve. Future demand is uncertain.

Most existing online algorithms assume these cost functions are known beforehand.

Our framework instead allows us to characterize **universal design spaces**: families of reserve functions that remain competitive across entire classes of possible cost functions.

Conceptually, rather than optimizing for one precise environment, we identify a safe region of algorithmic behaviors that remain robust under uncertainty.

This perspective naturally connects online algorithms with broader themes in robust optimization, adaptive systems, and learning-enabled decision-making.

---

## Beyond a Single Optimal Algorithm

At a broader level, this work suggests a different philosophy for online algorithm design.

Traditionally, online algorithms are viewed as isolated solutions:\
one problem, one optimal policy.

But modern computational systems are increasingly dynamic, heterogeneous, and data-driven. In such environments, a single rigid design may be unnecessarily restrictive.

Our results suggest that optimal online decision-making may instead be better understood as a *structured space* of feasible behaviors — one that can potentially be explored, adapted, calibrated, and even learned.

We believe this opens several exciting directions:

- integrating worst-case guarantees with statistical learning,
- designing algorithms that adapt to structural regularities in real systems,
- understanding geometric properties of algorithmic design spaces,
- and building more flexible decision systems for emerging AI infrastructure.

As online systems continue to scale in complexity, the future of algorithm design may lie not in discovering a single optimal trajectory, but in understanding the geometry of optimal decision-making itself.




## 1. Markdown or R Markdown

This is a post written in plain Markdown (`*.md`) instead of R Markdown (`*.Rmd`). The major differences are:

1. You cannot run any R code in a plain Markdown document, whereas in an R Markdown document, you can embed R code chunks (```` ```{r} ````);
2. A plain Markdown post is rendered through [Blackfriday](https://gohugo.io/overview/configuration/), and an R Markdown document is compiled by [**rmarkdown**](http://rmarkdown.rstudio.com) and [Pandoc](http://pandoc.org).

There are many differences in syntax between Blackfriday's Markdown and Pandoc's Markdown. For example, you can write a task list with Blackfriday but not with Pandoc:

- [x] Write an R package.
- [ ] Write a book.
- [ ] ...
- [ ] Profit!

When creating a new post, you have to decide whether the post format is Markdown or R Markdown, and this can be done via the `rmd` argument of the function `blogdown::new_post()`, e.g.

```r
blogdown::new_post("Post Title", rmd = FALSE)
```

Actually I recommend you to use the RStudio addin "New Post" instead:

![RStudio addin New Post](https://bookdown.org/yihui/blogdown/images/new-post.png)

# 2. Sample Text

## Second-level header

### Third-level header

#### Fourth-level header

A paragraph (with a footnote):

**Lorem ipsum** dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore _magna aliqua_. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.^[I'm sure you are bored by the text here.]

A blockquote (a gray bar at the left and lightgray background):

> Quisque mattis volutpat lorem vitae feugiat. Praesent porta est quis porta imperdiet. Aenean porta, mi non cursus volutpat, mi est mollis libero, id suscipit orci urna a augue. In fringilla euismod lacus, vitae tristique massa ultricies vitae. Mauris accumsan ligula tristique, viverra nulla sed, porta sapien. Vestibulum facilisis nec nisl blandit convallis. Maecenas venenatis porta malesuada. Ut ac erat tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sodales quam sit amet tincidunt egestas. In et turpis at orci vestibulum ullamcorper. Aliquam sed ante libero. Sed hendrerit arcu lacus.

Some code (with a drop-shadow effect):
