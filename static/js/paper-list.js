var papers = new Array (


    {
        id : "knapsack",
        name : "Online Knapsack Problems with Packing Costs",
        coauthors : new Array(authorList.XQTan, authorList.Garcia),
        journal : "Preprint",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "yes",
        topic: "online_algorithms",
        paperAbstract : "<p>We consider a generalization of the third degree price discrimination problem studied in Bergemann et al. (2015), where an intermediary between the buyer and the seller can design market segments to maximize any linear combination of consumer surplus and seller revenue. Unlike in Bergemann et al. (2015), we assume that the intermediary only has partial information about the buyer's value. We consider three different models of information, with increasing order of difficulty. In the first model, we assume that the intermediary's information allows him to construct a probability distribution of the buyer's value. Next we consider the sample complexity model, where we assume that the intermediary only sees samples from this distribution. Finally, we consider a bandit online learning model, where the intermediary can only observe past purchasing decisions of the buyer, rather than her exact value. For each of these models, we present algorithms to compute optimal or near optimal market segmentation.</p>",
    },

    {
        id : "network",
        name : "Value-based Network Resource Allocation under Arbitrary Arrivals",
        coauthors : new Array(authorList.XQTan, authorList.Garcia),
        journal : "Preprint",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "yes",
        topic: "network",
        paperAbstract : "<p>We consider a generalization of the third degree price discrimination problem studied in Bergemann et al. (2015), where an intermediary between the buyer and the seller can design market segments to maximize any linear combination of consumer surplus and seller revenue. Unlike in Bergemann et al. (2015), we assume that the intermediary only has partial information about the buyer's value. We consider three different models of information, with increasing order of difficulty. In the first model, we assume that the intermediary's information allows him to construct a probability distribution of the buyer's value. Next we consider the sample complexity model, where we assume that the intermediary only sees samples from this distribution. Finally, we consider a bandit online learning model, where the intermediary can only observe past purchasing decisions of the buyer, rather than her exact value. For each of these models, we present algorithms to compute optimal or near optimal market segmentation.</p>",
    },

    {
        id : "unified",
        name : "Mechanism Design for Online Resource Allocation: A Unified Approach",
        coauthors : new Array(authorList.XQTan, authorList.Garcia),
        journal : "Preprint",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "yes",
        paperAbstract : "<p>We consider a generalization of the third degree price discrimination problem studied in Bergemann et al. (2015), where an intermediary between the buyer and the seller can design market segments to maximize any linear combination of consumer surplus and seller revenue. Unlike in Bergemann et al. (2015), we assume that the intermediary only has partial information about the buyer's value. We consider three different models of information, with increasing order of difficulty. In the first model, we assume that the intermediary's information allows him to construct a probability distribution of the buyer's value. Next we consider the sample complexity model, where we assume that the intermediary only sees samples from this distribution. Finally, we consider a bandit online learning model, where the intermediary can only observe past purchasing decisions of the buyer, rather than her exact value. For each of these models, we present algorithms to compute optimal or near optimal market segmentation.</p>",
    },

    {
        id : "OCA_JSAC_2020",
        name : "Online Combinatorial Auctions for Resource Allocation with Supply Costs and Capacity Limits",
        coauthors : new Array(authorList.XQTan, authorList.YuanWu, authorList.Garcia, authorList.DHKTsang),
        journal : "IEEE Journal of Selected Areas in Communication",
        pubinfo: "in press",
        publisher: "/documents/OCA-JSAC-2020.pdf",
        arxiv : "https://arxiv.org/abs/2002.01802",
        highlight : "yes",
        paperAbstract : "<p> We study a general online combinatorial auction problem in algorithmic mechanism design. A provider allocates multiple types of capacity-limited resources to customers that arrive in a sequential and arbitrary manner. Each customer has a private valuation function on bundles of resources that she can purchase (e.g., a combination of different resources such as CPU and RAM in cloud computing). The provider charges payment from customers who purchase a bundle of resources and incurs an increasing supply cost with respect to the totality of resources allocated. The goal is to maximize the social welfare, namely, the total valuation of customers for their purchased bundles, minus the total supply cost of the provider for all the resources that have been allocated. We adopt the competitive analysis framework and provide posted-price mechanisms with optimal competitive ratios. Our pricing mechanism is optimal in the sense that no other online algorithms can achieve a better competitive ratio. We validate the theoretic results via empirical studies of online resource allocation in cloud computing. Our numerical results demonstrate that the proposed pricing mechanism is competitive and robust against system uncertainties and outperforms existing benchmarks.</p>",
    },

    {
        id : "PPR_JSAC_2020",
        name : "Posted-Price Retailing of Transactive Energy: An Optimal Online Mechanism without Prediction",
        coauthors : new Array(authorList.XQTan, authorList.YuanWu, authorList.Garcia, authorList.DHKTsang),
        journal : "IEEE Journal of Selected Areas in Communication",
        pubinfo: "vol. 38, no. 1, pp. 5-16, Jan. 2020",
        publisher: "https://arxiv.org/abs/1912.05770",
        arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "yes",
        paperAbstract : "<p>We consider a generalization of the third degree price discrimination problem studied in Bergemann et al. (2015), where an intermediary between the buyer and the seller can design market segments to maximize any linear combination of consumer surplus and seller revenue. Unlike in Bergemann et al. (2015), we assume that the intermediary only has partial information about the buyer's value. We consider three different models of information, with increasing order of difficulty. In the first model, we assume that the intermediary's information allows him to construct a probability distribution of the buyer's value. Next we consider the sample complexity model, where we assume that the intermediary only sees samples from this distribution. Finally, we consider a bandit online learning model, where the intermediary can only observe past purchasing decisions of the buyer, rather than her exact value. For each of these models, we present algorithms to compute optimal or near optimal market segmentation.</p>",
    },
	
	
    {
        id : "MDF_mechanism_TPS",
        name : "Eliciting Multi-dimensional Flexibility from Electric Vehicles: A Mechanism Design Approach",
        coauthors : new Array(authorList.BSun, authorList.XQTan, authorList.DHKTsang),
        journal : "IEEE Transactions on Power Systems",
        pubinfo: "vol. 34, no. 5, pp. 4038–4047, Setp. 2019",
        publisher: "/documents/MDF_mechanism_TPS.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        paperAbstract : "<p>Electric vehicles (EVs) have been well recognized as a deferrable load with the flexibility to shift their energy demands over time. Although this one-dimensional flexibility has been extensively investigated both by research and industrial implementations, the expanding energy demand and the associated uncertainties still make the integration of a large population of EVs into power system reliably and economically greatly challenging. In this paper, we design an auction scheme via mechanism design to elicit two additional flexibilities from EVs, namely energy flexibility and deadline flexibility. An offline mechanism is firstly designed as a benchmark based on the famous Vickrey–Clark– Groves mechanism. Then based on the primal-dual approach, we propose an online auction, in which all bids are truthful, the loss of social welfare is bounded by competitive ratio, and the mechanism can be implemented in polynomial time. By the numerical results, we quantitatively show that both the power system operators and individual EVs can benefit from the integration of the multi-dimensional flexibilities through our proposed mechanisms.</p>",
    },
	
	
    {
        id : "yuan_SDRM_net",
        name : "Secrecy-Driven Resource Management for Vehicular Computation-Ofﬂoading Networks",
        coauthors : new Array(authorList.YuanWu, authorList.XQTan, authorList.DHKTsang),
        journal : "IEEE Network",
        pubinfo: "vol. 32, no. 3, pp. 84-91, June 2018",
        publisher: "/documents/yuan_SDRM_net.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        paperAbstract : "<p>Electric vehicles (EVs) have been well recognized as a deferrable load with the flexibility to shift their energy demands over time. Although this one-dimensional flexibility has been extensively investigated both by research and industrial implementations, the expanding energy demand and the associated uncertainties still make the integration of a large population of EVs into power system reliably and economically greatly challenging. In this paper, we design an auction scheme via mechanism design to elicit two additional flexibilities from EVs, namely energy flexibility and deadline flexibility. An offline mechanism is firstly designed as a benchmark based on the famous Vickrey–Clark– Groves mechanism. Then based on the primal-dual approach, we propose an online auction, in which all bids are truthful, the loss of social welfare is bounded by competitive ratio, and the mechanism can be implemented in polynomial time. By the numerical results, we quantitatively show that both the power system operators and individual EVs can benefit from the integration of the multi-dimensional flexibilities through our proposed mechanisms.</p>",
    },
    
    {
        id : "sareh_contract_tii",
        name : "Contract Design for Aggregating, Trading, and Distributing Reserves in Demand-side Frequency Regulation",
        coauthors : new Array(authorList.Sareh, authorList.XQTan, authorList.BSun, authorList.DHKTsang),
        journal : "IEEE Transactions on Industrial Informatics",
        pubinfo: "vol. 14, no. 6, pp. 2539-2549, June 2018",
        publisher: "/documents/sareh_contract_tii.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        paperAbstract : "<p>We consider a generalization of the third degree price discrimination problem studied in Bergemann et al. (2015), where an intermediary between the buyer and the seller can design market segments to maximize any linear combination of consumer surplus and seller revenue. Unlike in Bergemann et al. (2015), we assume that the intermediary only has partial information about the buyer's value. We consider three different models of information, with increasing order of difficulty. In the first model, we assume that the intermediary's information allows him to construct a probability distribution of the buyer's value. Next we consider the sample complexity model, where we assume that the intermediary only sees samples from this distribution. Finally, we consider a bandit online learning model, where the intermediary can only observe past purchasing decisions of the buyer, rather than her exact value. For each of these models, we present algorithms to compute optimal or near optimal market segmentation.</p>",
    },
    
	
	
	
	
);
