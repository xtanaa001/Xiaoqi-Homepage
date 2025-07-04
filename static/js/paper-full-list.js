var papers_full = new Array (

    {
        id : "OAMcA_2025",
        name : "Online Allocation with Multi-Class Arrivals: Group Fairness vs Individual Welfare",
        coauthors : new Array(authorList.FZargari, authorList.HNekouyan, authorList.BSun, authorList.XQTan),
        conference : "ACM SIGMETRICS 2025",
        //pubinfo: "",
        //arxiv: "https://arxiv.org/pdf/2501.15782",
        pdf: "https://arxiv.org/pdf/2501.15782", 
        highlight : "yes",
        topic: "F",
        year: "2025", 
        paperAbstract : "<p>We introduce and study a multi-class online resource allocation problem with group fairness guarantees. The problem involves allocating a fixed amount of resources to a sequence of agents, each belonging to a specific group. The primary objective is to ensure fairness across different groups in an online setting. We focus on three fairness notions: one based on quantity and two based on utility. To achieve fair allocations, we develop two threshold-based online algorithms, proving their optimality under two fairness notions and near-optimality for the more challenging one. Additionally, we demonstrate a fundamental trade-off between group fairness and individual welfare using a novel representative function-based approach. To address this trade-off, we propose a set-aside multi-threshold algorithm that reserves a portion of the resource to ensure fairness across groups while utilizing the remaining resource to optimize efficiency under utility-based fairness notions. This algorithm is proven to achieve the Pareto-optimal trade-off. We also demonstrate that our problem can model a wide range of real-world applications, including network caching and cloud computing, and empirically evaluate our proposed algorithms in the network caching problem using real datasets. </p>",
    },

    {
        id : "OSDoS",
        name : "Posted Price Mechanisms for Online Allocation with Diseconomies of Scale",
        coauthors : new Array(authorList.HNekouyan, authorList.BSun, authorList.RBoutaba, authorList.XQTan),
        conference : "ACM Web Conference (WWW) 2025",
        //pubinfo: "",
        //arxiv: "https:",
        pdf: "https://arxiv.org/pdf/2502.02543",
        highlight : "yes",
        topic: "O",
        year: "2025",
        note: "Track: Economics, Online Markets and Human Computation",
        paperAbstract : "<p>This paper addresses the online $k$-selection problem with diseconomies of scale (OSDoS), where a seller seeks to maximize social welfare by optimally pricing items for sequentially arriving buyers, accounting for increasing marginal production costs. Previous studies have investigated deterministic dynamic pricing mechanisms for such settings. However, significant challenges remain, particularly in achieving optimality with small or finite inventories and developing effective randomized posted price mechanisms. To bridge this gap, we propose a novel randomized dynamic pricing mechanism for OSDoS, providing a tighter lower bound on the competitive ratio compared to prior work. Our approach ensures optimal performance in small inventory settings (i.e., whenis small) and surpasses existing online mechanisms in large inventory settings (i.e., whenis large), leading to the best-known posted price mechanism for optimizing online selection and allocation with diseconomies of scale across varying inventory sizes. </p>",
    },
    
    {
        id : "staticPricing",
        name : "Static Pricing for Online Selection Problem and its Variants",
        coauthors : new Array(authorList.BSun, authorList.HNekouyan, authorList.XQTan, authorList.RBoutaba),
        conference : "WINE 2024",
        //pubinfo: "",
        //arxiv: "https://arxiv.org/pdf/2410.07378",
        pdf: "https://arxiv.org/pdf/2410.07378",
        highlight : "yes",
        topic: "F",
        year: "2024",
        //note: "Full version is available upon request",
        paperAbstract : "<p>This paper studies an online selection problem, where a seller seeks to sequentially sell multiple copies of an item to arriving buyers. We consider an adversarial setting, making no modeling assumptions about buyers’ valuations for the items except acknowledging a finite support. In this paper, we focus on a class of static pricing algorithms that sample a price from a pre-determined distribution and sell items to buyers whose valuations exceed the sampled price. Such algorithms are of practical interests due to their advantageous properties, such as ease of implementation and non-discrimination over prices. Our work shows that the simple static pricing strategy can achieve strong guarantees comparable to the best known dynamic pricing algorithms. Particularly, we design the optimal static pricing algorithms for the adversarial online selection problem and its two important variants: the online assignment problem and the online selection with convex cost. The static pricing algorithms can even attain the optimal competitive ratios among all online algorithms for the online selection problem and the online assignment problem. To achieve these results, we propose an economics-based approach in the competitive analysis of static pricing algorithms, and develop a novel representative function-based approach to derive the lower bounds. We expect these approaches will be useful in related problems such as online matching. </p>",
    },

    {
        id : "GLB_subexp_tail",
        name : "Almost Free: Self-concordance in Natural Exponential Families and an Application to Bandits",
        coauthors : new Array(authorList.SLiu, authorList.AAyoub, authorList.FSentenac, authorList.XQTan, authorList.CSzepesvari),
        conference : "NeurIPS 2024",
        //pubinfo: "",
        //arxiv: "https://arxiv.org/pdf/2410.01112",
        pdf: "https://arxiv.org/pdf/2410.01112",
        highlight : "no",
        topic: "B",
        year: "2024",
        //note: "Full version is available upon request",
        paperAbstract : "<p>We prove that single-parameter natural exponential families with subexponential tails are self-concordant with polynomial-sized parameters. For subgaussian natural exponential families we establish an exact characterization of the growth rate of the self-concordance parameter. Applying these findings to bandits allows us to fill gaps in the literature: We show that optimistic algorithms for generalized linear bandits enjoy regret bounds that are both second-order (scale with the variance of the optimal arm's reward distribution) and free of an exponential dependence on the bound of the problem parameter in the leading term. To the best of our knowledge, ours is the first regret bound for generalized linear bandits with subexponential tails, broadening the class of problems to include Poisson, exponential and gamma bandits.</p>",
    },

    {
        id : "OSCC_TEAC_2025",
        name : "Threshold Policies with Tight Guarantees for Online Selection with Convex Costs",
        coauthors : new Array(authorList.XQTan, authorList.SYu, authorList.RBoutaba, authorList.Garcia),
        //journal : "ACM Transactions on Economics and Computation",
        //pubinfo: "vol. 13, no. 2, June 2025",
        conference : "WINE 2023",
        //arxiv: "https://arxiv.org/pdf/2310.06166.pdf",
        pdf: "https://arxiv.org/pdf/2310.06166.pdf",
        //talk: "/documents/OSCC_slides_WINE 2023.pdf",
        highlight : "yes",
        topic: "O",
        year: "2023", 
        note: "Journal version appears in ACM Transactions on Economics and Computation",
        paperAbstract : "<p>This paper provides threshold policies with tight guarantees for online selection with convex cost (OSCC). In OSCC, a seller wants to sell some asset to a sequence of buyers with the goal of maximizing his/her profit. The seller can produce additional units of the asset, but at non-decreasing marginal costs. At each time, a buyer arrives and offers a price, and the seller must make an immediate and irrevocable decision in terms of whether to accept the offer and produce/sell one unit of the asset to this buyer. The goal is to develop an online algorithm that selects a subset of buyers to maximize the seller’s profit, namely, the total selling revenue minus the total production cost. Our main result is the development of a class of simple threshold policies that are logistically-simple and easy to implement, but have provable optimality guarantees among all deterministic algorithms. We also derive a lower bound on competitive ratios of randomized algorithms, and prove that the competitive ratio of our threshold policy asymptotically converges to this lower bound when the total production output is sufficiently large. Our results generalize and unify various online search, pricing, and auction problems, and provide a new perspective on the impact of non-decreasing marginal costs on real-world online resource allocation problems. </p>",
    },
);