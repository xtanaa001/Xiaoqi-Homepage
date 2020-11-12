var talks_full = new Array (

    {
        id : "talk_SIGMETRICS_2020",
        name : "Mechanism Design for Online Resource Allocation: A Unified Approach",
        conference : "ACM SIGMETRICS 2020",
        pubinfo: "June 2020",
        talk: "/documents/SIGMETRICS20_slides.pdf",
        video: "https://www.youtube.com/watch?v=7s09s9p2ZYQ",
        highlight : "yes",
        //topic: "ON",
        //year: "2020",
        //note: "Conference version appeared in ACM SIGMETRICS 2020",
        //paperAbstract : "<p>This paper concerns the mechanism design for online resource allocation in a strategic setting.  In this setting, a single supplier allocates capacity-limited resources to requests that arrive in a sequential and arbitrary manner. Each request is associated with an agent who may act selfishly to misreport the requirement and valuation of her request. The supplier charges payment from agents whose requests are satisfied, but incurs a load-dependent supply cost. The goal is to design an incentive compatible  online mechanism, which determines not only the resource allocation of each request, but also the payment of each agent,  so as to (approximately) maximize  the social welfare (i.e., aggregate valuations minus supply cost). We study this problem under the framework of competitive analysis. The major contribution of this paper is the development of a unified approach that achieves the best-possible competitive ratios for setups with different supply costs. Specifically, we show that when there is no supply cost or the supply cost function is linear, our model is essentially a standard 0-1 knapsack problem, for which our approach achieves logarithmic competitive ratios that match the state-of-the-art (which is optimal). For the more challenging setup when the supply cost is  strictly-convex, we provide online mechanisms, for the first time, that lead to the optimal competitive ratios as well.  To the best of our knowledge, this is the first approach that unifies the characterization of optimal competitive ratios in online resource allocation for different setups including zero, linear and strictly-convex supply costs.</p>",
    },

    {
        id : "talk_knapsack_2020",
        name : "Online Knapsack Problems with Convex Packing Costs: Algorithms and Applications",
        conference : "David R. Cheriton School of Computer Science, University of Waterloo, ON, Canada",
        pubinfo: "June 2020",
        highlight : "yes",
        //topic: "",
        //year: "2020",
        paperAbstract : "<p>In this talk, we present our recent progress on a new variant of knapsack problems, termed as online knapsack problems with convex packing costs. In this problem, a set of items, each with a value and a weight, appear in a sequential and arbitrary manner. Upon the arrival of each item, an irrevocable decision must be made in terms of whether to pack this item or not into the knapsack with a limited capacity. If an item is accepted, the knapsack incurs a packing cost which depends on the total weight of items that are currently being included in the knapsack, namely, a weight-dependent packing cost. The objective is to (approximately) maximize the social welfare, i.e., the total value of accepted items minus the packing cost. We study this problem under the framework of competitive analysis. The major contribution of our work is the development of a unified approach that achieves the best-possible competitive ratios for settings with different packing costs. Specifically, in the talk we will show that when there is no packing cost or the packing cost is linear, our model is essentially a standard 0-1 knapsack problem, for which our approach achieves logarithmic competitive ratios that match the state-of-the-art (which is optimal). For the more challenging setting when the packing cost is strictly-convex, we provide online algorithms, for the first time, that lead to optimal competitive ratios as well. To the best of our knowledge, this is the first approach that unifies the characterization of optimal competitive ratios for online knapsack problems with either zero, linear, or strictly-convex packing costs. We validate the theoretic results via empirical studies of online resource allocation in cloud computing. Our numerical results demonstrate that the proposed online algorithm is robust against arrival uncertainties and outperforms several existing benchmarks.</p>",
    },

);