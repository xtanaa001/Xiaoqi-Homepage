var papers_full = new Array (

    {
        id : "OSCC_Full_2022",
        name : "Threshold Policies with Tight Guarantees for Online Selection with Convex Costs",
        coauthors : new Array(authorList.XQTan, authorList.SYu, authorList.RBoutaba, authorList.Garcia),
        journal : "Preprint",
        //pubinfo: "",
        //arxiv: "",
        //pdf: "/documents/.pdf",
        highlight : "yes",
        topic: "O",
        year: "2023",
        note: "Full version is available upon request",
        paperAbstract : "<p>This paper provides threshold policies with tight guarantees for online selection with convex cost (OSCC). In OSCC, a seller wants to sell some asset to a sequence of buyers with the goal of maximizing his/her profit. The seller can produce additional units of the asset, but at non-decreasing marginal costs. At each time, a buyer arrives and offers a price, and the seller must make an immediate and irrevocable decision in terms of whether to accept the offer and produce/sell one unit of the asset to this buyer. The goal is to develop an online algorithm that selects a subset of buyers to maximize the seller’s profit, namely, the total selling revenue minus the total production cost. Our main result is the development of a class of simple threshold policies that are logistically-simple and easy to implement, but have provable optimality guarantees among all deterministic algorithms. We also derive a lower bound on competitive ratios of randomized algorithms, and prove that the competitive ratio of our threshold policy asymptotically converges to this lower bound when the total production output is sufficiently large. Our results generalize and unify various online search, pricing, and auction problems, and provide a new perspective on the impact of non-decreasing marginal costs on real-world online resource allocation problems. </p>",
    },

    {
        id : "unified_sigmetrics",
        name : "Mechanism Design for Online Resource Allocation: A Unified Approach",
        coauthors : new Array(authorList.XQTan, authorList.BSun, authorList.Garcia, authorList.YWu, authorList.DHKTsang),
        conference : "ACM SIGMETRICS 2020",
        //pdf: "/documents/pomacs20_mdora.pdf",
        arxiv: "https://arxiv.org/pdf/2004.09640.pdf",
        talk: "/documents/SIGMETRICS20_slides.pdf",
        video: "https://www.youtube.com/watch?v=7s09s9p2ZYQ",
        highlight : "yes",
        selected : "yes",
        topic: "",
        //year: "2020",
        //note: "Journal version appeared in Proceedings of the ACM on Measurement and Analysis of Computing Systems, vol. 4, no. 2, June 2020",
        paperAbstract : "<p>This paper concerns the mechanism design for online resource allocation in a strategic setting.  In this setting, a single supplier allocates capacity-limited resources to requests that arrive in a sequential and arbitrary manner. Each request is associated with an agent who may act selfishly to misreport the requirement and valuation of her request. The supplier charges payment from agents whose requests are satisfied, but incurs a load-dependent supply cost. The goal is to design an incentive compatible  online mechanism, which determines not only the resource allocation of each request, but also the payment of each agent,  so as to (approximately) maximize  the social welfare (i.e., aggregate valuations minus supply cost). We study this problem under the framework of competitive analysis. The major contribution of this paper is the development of a unified approach that achieves the best-possible competitive ratios for setups with different supply costs. Specifically, we show that when there is no supply cost or the supply cost function is linear, our model is essentially a standard 0-1 knapsack problem, for which our approach achieves logarithmic competitive ratios that match the state-of-the-art (which is optimal). For the more challenging setup when the supply cost is  strictly-convex, we provide online mechanisms, for the first time, that lead to the optimal competitive ratios as well.  To the best of our knowledge, this is the first approach that unifies the characterization of optimal competitive ratios in online resource allocation for different setups including zero, linear and strictly-convex supply costs.</p>",
    },
);