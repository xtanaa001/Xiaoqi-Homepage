var papers_full = new Array (

    {
        id : "mk_search2021",
        name : "Competitive $(m,k)$-Searching under Generalized Budget Constraints",
        coauthors : new Array(authorList.XQTan, authorList.RBoutaba, authorList.Garcia),
        journal : "Preprint",
        //arxiv: "",
        highlight : "yes",
        topic: "O",
        year: "2021",
        note: "Full version is available upon request",
        //paperAbstract : "<p></p>",
    },

    {
        id : "knapsack_2021",
        name : "Online Knapsack Problems with Convex Packing Costs: Variants and Algorithms",
        coauthors : new Array(authorList.XQTan, authorList.RBoutaba, authorList.Garcia),
        type : "journal",
        journal : "Preprint",
        //arxiv: "",
        highlight : "yes",
        topic: "O",
        year: "2021",
        note: "Full version is available upon request",
        //paperAbstract : "<p></p>",
    },

    {
        id : "EVBSS_TTE_2020",
        name : "Inventory Planning and Real-time Routing for Network of Electric Vehicle Battery Swapping Stations",
        coauthors : new Array(authorList.LNi, authorList.BSun, authorList.XQTan, authorList.DHKTsang),
        journal : "IEEE Transactions on Transportation Electrification",
        highlight : "no",
        topic: "E",
        year: "2021",
        note: "in press",
        paperAbstract : "<p>Battery swapping stations (BSSs) are one of the main types of electric vehicle (EV) refueling facilities. By battery swapping, EVs first replace their depleted batteries (DBs) with fully-charged ones, and then the demounted DBs can be recharged in charging facilities in a stand-alone mode, leading to a decouple between batteries and EVs during refueling. This paper targets the planning and operation of a network of geographically-distributed BSSs, termed as BSS-Net. In particular, we focus on two important decisions being made within two different timescales, namely a long-term decision on planning the initial inventory in each individual BSS, and a short-term decision on real-time vehicle-to-station (V2S) routing of EVs. We formulate a two-stage optimization problem and propose a two-step solution scheme. Specifically, in the first step, we determine the long-term initial inventory by sample average approximation, and the resulting planning decision leads to a maximized total expected revenue for the BSS-Net. Based on the optimal initial inventory, we design a randomized online algorithm in the second step to perform real-time V2S routing, without assuming any future EV arrival information. We rigorously prove that the worst-case performance of the randomized online algorithm is theoretically bounded by a closed-form competitive ratio.</p>",
    },


    {
        id : "market_tsg_2020",
        name : "Aggregation of Demand-Side Flexibility in Electricity Markets: Negative Impact Analysis and Mitigation Method",
        coauthors : new Array(authorList.SWang, authorList.XQTan, authorList.TLiu, authorList.DHKTsang),
        journal : "IEEE Transactions on Smart Grid",
        pubinfo: "vol. 12, no. 1, pp. 774-786, January 2021",
        //arxiv: "",
        highlight : "no",
        topic: "E",
        year: "2021",
        paperAbstract : "<p> Aggregation of demand-side flexibility plays a crucial role in helping improve the system-wide performance of power grids. However, less known is the potential negative impact of self-interested flexibility aggregators being strategic for their own benefits at the cost of other market participants and even system-wide performance. This paper aims to theoretically analyze this negative impact, as well as the corresponding mitigation method. Specifically, we consider a strategic aggregator derives the optimal bidding strategy of the flexibility bounds (for cumulative energy and instantaneous power consumption) and trades electricity in a pool. A multi-period bi-level program with a DC network setup is considered. The upper-level problem represents the aggregator’s cost minimization, and the lower-level problem represents the market clearing process. Based on this bi-level formulation, our theoretical analysis shows that the potential negative impacts of the strategic behavior on the system generation cost, the payments of the fixed loads and non-strategic aggregators depend on the bus locations of both the strategic and non-strategic aggregators. We propose to additionally charge the strategic aggregator for the newly introduced congestion so as to avoid the system performance degradation. The analytical results are validated via simulations.</p>",
    },

    /* ----------------------- 2020 --------------------------*/
    /* ----------------------- 2020 --------------------------*/
    /* ----------------------- 2020 --------------------------*/


    {
        id : "unified_POMACS",
        name : "Mechanism Design for Online Resource Allocation: A Unified Approach",
        coauthors : new Array(authorList.XQTan, authorList.BSun, authorList.Garcia, authorList.YWu, authorList.DHKTsang),
        journal : "ACM SIGMETRICS 2020/Proceedings of the ACM on Measurement and Analysis of Computing Systems",
        pubinfo: "vol. 4, no. 2, June 2020",
        pdf: "/documents/pomacs20_mdora.pdf",
        arxiv: "https://arxiv.org/abs/2004.09640",
        talk: "/documents/SIGMETRICS20_slides.pdf",
        video: "https://www.youtube.com/watch?v=7s09s9p2ZYQ",
        highlight : "yes",
        topic: "ON",
        year: "2020",
        //note: "Conference version appeared in ACM SIGMETRICS 2020",
        paperAbstract : "<p>This paper concerns the mechanism design for online resource allocation in a strategic setting.  In this setting, a single supplier allocates capacity-limited resources to requests that arrive in a sequential and arbitrary manner. Each request is associated with an agent who may act selfishly to misreport the requirement and valuation of her request. The supplier charges payment from agents whose requests are satisfied, but incurs a load-dependent supply cost. The goal is to design an incentive compatible  online mechanism, which determines not only the resource allocation of each request, but also the payment of each agent,  so as to (approximately) maximize  the social welfare (i.e., aggregate valuations minus supply cost). We study this problem under the framework of competitive analysis. The major contribution of this paper is the development of a unified approach that achieves the best-possible competitive ratios for setups with different supply costs. Specifically, we show that when there is no supply cost or the supply cost function is linear, our model is essentially a standard 0-1 knapsack problem, for which our approach achieves logarithmic competitive ratios that match the state-of-the-art (which is optimal). For the more challenging setup when the supply cost is  strictly-convex, we provide online mechanisms, for the first time, that lead to the optimal competitive ratios as well.  To the best of our knowledge, this is the first approach that unifies the characterization of optimal competitive ratios in online resource allocation for different setups including zero, linear and strictly-convex supply costs.</p>",
    },

    {
        id : "unified_sigmetrics",
        name : "Mechanism Design for Online Resource Allocation: A Unified Approach",
        coauthors : new Array(authorList.XQTan, authorList.BSun, authorList.Garcia, authorList.YWu, authorList.DHKTsang),
        conference : "ACM SIGMETRICS 2020",
        pdf: "/documents/pomacs20_mdora.pdf",
        arxiv: "https://arxiv.org/abs/2004.09640",
        talk: "/documents/SIGMETRICS20_slides.pdf",
        video: "https://www.youtube.com/watch?v=7s09s9p2ZYQ",
        highlight : "no",
        topic: "",
        //year: "2020",
        note: "Journal version appeared in Proceedings of the ACM on Measurement and Analysis of Computing Systems, vol. 4, no. 2, June 2020",
        paperAbstract : "<p>This paper concerns the mechanism design for online resource allocation in a strategic setting.  In this setting, a single supplier allocates capacity-limited resources to requests that arrive in a sequential and arbitrary manner. Each request is associated with an agent who may act selfishly to misreport the requirement and valuation of her request. The supplier charges payment from agents whose requests are satisfied, but incurs a load-dependent supply cost. The goal is to design an incentive compatible  online mechanism, which determines not only the resource allocation of each request, but also the payment of each agent,  so as to (approximately) maximize  the social welfare (i.e., aggregate valuations minus supply cost). We study this problem under the framework of competitive analysis. The major contribution of this paper is the development of a unified approach that achieves the best-possible competitive ratios for setups with different supply costs. Specifically, we show that when there is no supply cost or the supply cost function is linear, our model is essentially a standard 0-1 knapsack problem, for which our approach achieves logarithmic competitive ratios that match the state-of-the-art (which is optimal). For the more challenging setup when the supply cost is  strictly-convex, we provide online mechanisms, for the first time, that lead to the optimal competitive ratios as well.  To the best of our knowledge, this is the first approach that unifies the characterization of optimal competitive ratios in online resource allocation for different setups including zero, linear and strictly-convex supply costs.</p>",
    },

    {
        id : "OCA_JSAC_2020",
        name : "Online Combinatorial Auctions for Resource Allocation with Supply Costs and Capacity Limits",
        coauthors : new Array(authorList.XQTan, authorList.YWu, authorList.Garcia, authorList.DHKTsang),
        journal : "IEEE Journal on Selected Areas in Communications",
        pubinfo: "vol. 38, no. 4, pp. 655-668, April 2020",
        pdf: "/documents/OCA_JSAC_2020.pdf",
        //confVersion: "https://www.sigmetrics.org/mama/abstracts/Tan.pdf",
        //report: "/documents/jsac_sdp_report.pdf",
        highlight : "yes",
        topic: "ON",
        year: "2020",
        //note: "Earlier version appeared in ACM MAMA 2019 - in conjunction with ACM SIGMETRICS 2019",
        paperAbstract : "<p> We study a general online combinatorial auction problem in algorithmic mechanism design. A provider allocates multiple types of capacity-limited resources to customers that arrive in a sequential and arbitrary manner. Each customer has a private valuation function on bundles of resources that she can purchase (e.g., a combination of different resources such as CPU and RAM in cloud computing). The provider charges payment from customers who purchase a bundle of resources and incurs an increasing supply cost with respect to the totality of resources allocated. The goal is to maximize the social welfare, namely, the total valuation of customers for their purchased bundles, minus the total supply cost of the provider for all the resources that have been allocated. We adopt the competitive analysis framework and provide posted-price mechanisms with optimal competitive ratios. Our pricing mechanism is optimal in the sense that no other online algorithms can achieve a better competitive ratio. We validate the theoretic results via empirical studies of online resource allocation in cloud computing. Our numerical results demonstrate that the proposed pricing mechanism is competitive and robust against system uncertainties and outperforms existing benchmarks.</p>",
    },

    {
        id : "PPR_JSAC_2020",
        name : "Posted-Price Retailing of Transactive Energy: An Optimal Online Mechanism without Prediction",
        coauthors : new Array(authorList.XQTan, authorList.YWu, authorList.Garcia, authorList.DHKTsang),
        journal : "IEEE Journal on Selected Areas in Communications",
        pubinfo: "vol. 38, no. 1, pp. 5-16, Jan. 2020",
        pdf: "/documents/PPR_JSAC_2020.pdf",
        //report: "/documents/jsac_pprTE_report.pdf",
        highlight : "yes",
        topic: "E",
        year: "2020",
        paperAbstract : "<p>In this paper, we study a general transactive energy (TE) retailing problem in smart grids: a TE retailer (e.g., a utility company) publishes the energy price, which may vary over time. TE customers arrive in an arbitrary manner and may choose to either purchase a certain amount of energy based on the posted price, or leave without buying. Typical examples of such a setup include a transactive electric vehicle charging platform, or a general market-based demand-side management program, etc. We consider the setting where the customer arrival information is unknown (i.e., without prediction), and focus on maximizing the social welfare of the TE system through a posted-price mechanism (PPM) that runs in an online fashion with causal information only. We quantify the performance of the proposed PPM in the competitive analysis framework, and show that our proposed PPM is optimal in the sense that no other online mechanisms can achieve a better competitive ratio. We evaluate our theoretic results for the case of transactive electric vehicle charging. Our extensive experimental results show that the proposed PPM is competitive and robust against system uncertainties, and outperforms several existing benchmarks.</p>",
    },


    /* ----------------------- 2019 --------------------------*/
    /* ----------------------- 2019 --------------------------*/
    /* ----------------------- 2019 --------------------------*/
    

    {
        id : "MDF_mechanism_TPS",
        name : "Eliciting Multi-dimensional Flexibility from Electric Vehicles: A Mechanism Design Approach",
        coauthors : new Array(authorList.BSun, authorList.XQTan, authorList.DHKTsang),
        journal : "IEEE Transactions on Power Systems",
        pubinfo: "vol. 34, no. 5, pp. 4038–4047, Setp. 2019",
        pdf: "/documents/MDF_mechanism_TPS.pdf",
        highlight : "no",
        topic: "E",
        year: "2019",
        paperAbstract : "<p>Electric vehicles (EVs) have been well recognized as a deferrable load with the flexibility to shift their energy demands over time. Although this one-dimensional flexibility has been extensively investigated both by research and industrial implementations, the expanding energy demand and the associated uncertainties still make the integration of a large population of EVs into power system reliably and economically greatly challenging. In this paper, we design an auction scheme via mechanism design to elicit two additional flexibilities from EVs, namely energy flexibility and deadline flexibility. An offline mechanism is firstly designed as a benchmark based on the famous Vickrey–Clark– Groves mechanism. Then based on the primal-dual approach, we propose an online auction, in which all bids are truthful, the loss of social welfare is bounded by competitive ratio, and the mechanism can be implemented in polynomial time. By the numerical results, we quantitatively show that both the power system operators and individual EVs can benefit from the integration of the multi-dimensional flexibilities through our proposed mechanisms.</p>",
    },


    {
        id : "mama_2019",
        name : "Optimal Posted Prices for Online Resource Allocation with Supply Costs",
        coauthors : new Array(authorList.XQTan, authorList.Garcia, authorList.DHKTsang),
        conference : "ACM MAMA 2019 - in conjunction with ACM SIGMETRICS 2019",
        pubinfo: "June 2019",
        pdf: "https://www.sigmetrics.org/mama/2019/abstracts/Tan.pdf",
        highlight : "yes",
        //note: "Extended Abstract",
        topic: "O",
        year: "2019",
        paperAbstract : "<p>We study a general online resource allocation problem, where a service provider sells multiple types of capacity-limited resources to heterogeneous customers that arrive in a sequential manner. The provider charges payment from customers who purchase the resource but must pay an increasing marginal supply cost with respect to the total resource allocated (e.g., production costs and/or operational costs). The goal is to maximize the social welfare, namely, the total valuation of customers minus the total supply cost of the provider. We adopt the standard competitive analysis framework and provide an optimal online posted-pricing mechanism. Our online mechanism is optimal in the sense that no other online algorithms can achieve a better competitive ratio.</p>",
    },


    {
        id : "e_energy_19",
        name : "A Novel Online Mechanism for Demand-Side Flexibility Management under Arbitrary Arrivals",
        coauthors : new Array(authorList.XQTan, authorList.Garcia, authorList.BSun, authorList.DHKTsang),
        conference : "ACM e-Energy",
        pubinfo: "June 2019",
        pdf: "/documents/e_energy_19.pdf",
        highlight : "no",
        note: "Extended Abstract",
        topic: "E",
        year: "2019",
        paperAbstract : "<p>This paper proposes a price-based online mechanism for real-time demand-side flexibility management in smart grids. The major contribution of this paper is the design of a novel pricing function, based on which the price-based online mechanism achieves a tighter competitive ratio than previous work [3].</p>",
    },

    {
        id : "noma_mec_wcnc19",
        name : "Energy-efficient Resource Allocation and Channel Assignment for NOMA-based Mobile Edge Computing",
        coauthors : new Array(authorList.LLiu, authorList.BSun, authorList.XQTan, authorList.YSXiao, authorList.DHKTsang),
        conference : "IEEE Wireless Communications and Networking Conference (WCNC)",
        pubinfo: "April 2019",
        pdf: "/documents/noma_mec_wcnc19.pdf",
        highlight : "no",
        topic: "N",
        year: "2019",
        paperAbstract : "<p>In this paper, we study resource allocation (including power and computation resources) and channel assignment in an uplink Non-orthogonal Multiple Access (NOMA)-based Mobile Edge Computing (MEC) system. Our objective is to minimize the total energy consumption of all users. The problem, however, is a non-convex combinatorial optimization problem. We first investigate the hidden convexity by reformulating the resource allocation problem when the channel assignment is given, and propose an efficient algorithm to allocate the resources by dual decomposition methods. Furthermore, we design a heuristic algorithm to decide the channel assignment leveraging the structural property in the reformulation. Extensive simulations verify that NOMA has great advantages over Orthogonal Multiple Access (OMA) in multi-user latency-intensive MEC systems.</p>",
    },

    {
        id : "bcs_scheduling_ev_tsg",
        name : "Optimal Scheduling of Battery Charging Stations Serving Electric Vehicles Based on Battery Swapping",
        coauthors : new Array(authorList.XQTan, authorList.GQu, authorList.BSun, authorList.NLi, authorList.DHKTsang),
        journal : "IEEE Transactions on Smart Grid",
        pubinfo: "vol. 10, no. 2, pp. 1372-1384, March 2019",
        pdf: "/documents/bcs_scheduling_ev_tsg.pdf",
        highlight : "no",
        topic: "E",
        year: "2019",
        paperAbstract : "<p>A battery charging station (BCS) is a charging facility that supplies electric energy for recharging electric vehicles’ depleted batteries (DBs). A BCS has a certain number of charging bays and maintains a dynamic inventory of fully charged batteries (FBs). This paper studies a BCS scheduling (BCSS) problem whose target is to schedule the charging processes of the charging bays such that the charging cost is minimized while satisfying the FB demand. Specifically, the BCSS problem has two types of operations: 1) loading DBs into the charging bays and then unloading them to the FB inventory when they are fully charged and 2) controlling the charging rate of each charging bay. We formulate the BCSS problem as a mixed-integer program with quadratic battery degradation cost. A generalized benders decomposition algorithm is then developed to solve the problem efficiently. The salience of the developed algorithm is that: 1) each charging bay can solve its own subproblem separately and 2) each subproblem can be further partitioned into multiple independent and identically structured quadratic programming problems, and thus the algorithm facilitates an efficient parallel implementation. We perform extensive real data simulation to validate the optimization model and demonstrate the efficiency of the proposed algorithm.</p>",
    },



    /* ----------------------- 2018 --------------------------*/
    /* ----------------------- 2018 --------------------------*/
    /* ----------------------- 2018 --------------------------*/
    {
        id : "amod_uv_2018",
        name : "Autonomous Mobility and Energy Service Management in Future Smart Cities: An Overview",
        coauthors : new Array(authorList.XQTan, authorList.Garcia),
        conference : "IEEE UV",
        pubinfo: "October 2018",
        arxiv : "https://arxiv.org/abs/1810.04576",
        highlight : "no",
        topic: "E",
        year: "2018",
        paperAbstract : "<p>With the rise of transportation electrification, autonomous driving and shared mobility in urban mobility systems, and increasing penetrations of distributed energy resources and autonomous demand-side management techniques in energy systems, tremendous opportunities, as well as challenges, are emerging in the forging of a sustainable and converged urban mobility and energy future. This paper is motivated by these disruptive transformations and gives an overview of managing autonomous mobility and energy services in future smart cities. First, we propose a three-layer architecture for the convergence of future mobility and energy systems. For each layer, we give a brief overview of the disruptive transformations that directly contribute to the rise of autonomous mobility-on-demand (AMoD) systems. Second, we propose the concept of autonomous flexibility-on-demand (AFoD), as an energy service platform built directly on existing infrastructures of AMoD systems. In the vision of AFoD, autonomous electric vehicles provide charging flexibilities as a service on demand in energy systems. Third, we analyze and compare AMoD and AFoD, and we identify four key decisions that, if appropriately coordinated, will create a synergy between AMoD and AFoD. Finally, we discuss key challenges towards the success of AMoD and AFoD in future smart cities and present some key research directions regarding the system-wide coordination between AMoD and AFoD.</p>",
    },


    {
        id : "online_v2s_sgc",
        name : "Online Price-based Vehicle-to-Station Recommendations for EV Battery Swapping",
        coauthors : new Array(authorList.LNi, authorList.BSun, authorList.XQTan, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "October 2018",
        pdf: "/documents/online_v2s_sgc.pdf",
        highlight : "no",
        topic: "E",
        year: "2018",
        paperAbstract : "<p>We present a framework to integrate the choice of electric vehicle (EV) customers into the vehicle-to-station (V2S) routing problem for battery swapping. Instead of assigning stations to each EV customer directly, we provide a recommendation, including a list of station-price pairs that are available for EV battery swapping services, for customers to choose. Compared with assignment, recommendation is closer to reality for scenarios lacking incentives for the cooperation of customers such as the battery swapping services of private EVs. In this paper, we model customers’ behavior by their choice probability given a particular recommendation, which can be readily obtained based on analytics techniques once the real data are available. We propose an online V2S recommendation algorithm, which aims at maximizing the expected revenue of a group of battery swapping stations (BSSs) and ensuring the quality service of EV customers. Leveraging the primal-dual analysis, we show that the loss of revenue due to online EV arrivals is theoretically bounded by a provable competitive ratio. Moreover, numerical tests also validate that the proposed online algorithm can significantly outperform benchmarks in maximizing revenues in online settings.</p>",
    },
    
    {
        id : "operation_BSCS_QoS",
        name : "Optimal Charging Operation of Battery Swapping and Charging Stations with QoS Guarantee",
        coauthors : new Array(authorList.BSun, authorList.XQTan, authorList.DHKTsang),
        journal : "IEEE Transactions on Smart Grid",
        pubinfo: "vol. 9, no. 5, pp. 4689-4701, Sept. 2018",
        pdf: "/documents/operation_BSCS_QoS.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        topic: "E",
        year: "2018",
        paperAbstract : "<p>Motivated by the urgent demand for the electric vehicle (EV) fast refueling technologies, battery swapping and charging stations (BSCSs) are envisioned as a promising solution to provide timely EV refueling services. However, inappropriate battery charging operation in BSCSs cannot only incur unnecessary high charging cost but also threaten the reliability of the power grid. In this paper, we aim at obtaining an optimal charging operation policy for a single BSCS to minimize its charging cost while ensuring its quality-of-service. Leveraging the novel queueing network model, we propose to formulate the charging operation problem as a constrained Markov decision process and derive the optimal policy by the standard Lagrangian method and dynamic programming. To avoid the curse of dimensionality in practical large-scale systems, we further analyze the structure of the optimal policy and transform the dynamic programming procedure into an equivalent threshold optimization problem with a discrete separable convex objective function. Numerical results validate our theoretical analysis and the computational efficiency of our proposed algorithms. This paper also shows the impact of the system parameters (e.g., numbers of batteries and chargers) on the average cost under the optimal charging policy, which gives rich insights into the infrastructure planning of future BSCS networks.</p>",
    },
	
    {
        id : "yuan_SDRM_net",
        name : "Secrecy-Driven Resource Management for Vehicular Computation-Ofﬂoading Networks",
        coauthors : new Array(authorList.YWu, authorList.LQian, authorList.HMao, authorList.XYang, authorList.HZhou, authorList.XQTan, authorList.DHKTsang),
        journal : "IEEE Network",
        pubinfo: "vol. 32, no. 3, pp. 84-91, June 2018",
        pdf: "/documents/yuan_SDRM_net.pdf",
        highlight : "no",
        topic: "N",
        year: "2018",
        paperAbstract : "<p>The growing developments in vehicular networks and vehicular Internet services have yielded a variety of computation-intensive applications, resulting in great pressure on vehicles equipped with limited computation resources. The cloud/ edge-based service, which enables in-motion vehicles to actively offload computation tasks to cloud/edge servers, has provided a promising approach to address the intensive computation burden. However, due to the possibility of disclosing private data, offloading computation tasks suffers from potential eavesdropping attacks. In this article, we focus on the eavesdropping attack when vehicular users (VUs) deliver computation tasks to cloud/edge servers over radio frequency channels. We take the tool of physical layer security and investigate resource management for secrecy provisioning when the VUs offload computation tasks. We then discuss three promising technologies, including non-orthogonal multiple access, multi-access assisted computation offloading, and mobility- and delay-aware offloading, which facilitate the enhancement of secrecy against the eavesdropping attack. Finally, as a detailed example of the multi-access assisted computation offloading, we present a case study on the optimal dual-connectivity-assisted computation task offloading with secrecy provisioning and show the performance of the proposed computation offloading.</p>",
    },
    
    {
        id : "sareh_contract_tii",
        name : "Contract Design for Aggregating, Trading, and Distributing Reserves in Demand-side Frequency Regulation",
        coauthors : new Array(authorList.Sareh, authorList.XQTan, authorList.BSun, authorList.DHKTsang),
        journal : "IEEE Transactions on Industrial Informatics",
        pubinfo: "vol. 14, no. 6, pp. 2539-2549, June 2018",
        pdf: "/documents/sareh_contract_tii.pdf",
        highlight : "no",
        topic: "E",
        year: "2018",
        paperAbstract : "<p>With the integration of renewable energy sources to the power grid, the volatility of supply in the system will increase. Consequently, the mismatch between the power supply and demand may happen frequently and, thus, lead to frequency deviation from its nominal value. To avoid this scenario, demand-side flexibility has been widely considered to provide frequency regulation services. In this paper, we focus on the flexibility of thermal systems in buildings and propose a hierarchical demand-response market with a three-step algorithm to model the interactions among three entities: the independent system operators (ISOs), aggregators, and end users. The flexibility from the end users is aggregated in step 1, which is based on the incentive and electricity prices broadcasted by the aggregator. A robust optimization approach is adopted to improve the user’s decision under the electricity price uncertainty. To model the interaction between the ISO and aggregators in step 2, a bilevel optimization problem is solved, in which the ISO seeks to minimize its cost, while the aggregators maximize their benefits in the day-ahead market. In step 3, each aggregator allocates its successful trading reserve among end users based on their performance scores.</p>",
    },
    
	{
        id : "bscs_queuing_pe",
        name : "Asymptotic Performance Evaluation of Battery Swapping and Charging Station for Electric Vehicles",
        coauthors : new Array(authorList.XQTan, authorList.BSun, authorList.YWu, authorList.DHKTsang),
        journal : "Performance Evaluation (Elsevier)",
        pubinfo: "vol. 119, pp. 43-57, March 2018",
        pdf: "/documents/bscs_queuing_pe.pdf",
        arxiv : "https://arxiv.org/abs/1707.07175",
        highlight : "no",
        topic: "E",
        year: "2018",
        note: "Appeared in the list of \"Most Downloaded Performance Evaluation Paper\" ",
        paperAbstract : "<p>A battery swapping and charging station (BSCS) is an energy refueling station, where (i) electric vehicles (EVs) with depleted batteries (DBs) can swap their DBs for fully-charged ones, and (ii) the swapped DBs are then charged until they are fully-charged. Successful deployment of a BSCS system necessitates a careful planning of swapping- and chargingrelated infrastructures, and thus a comprehensive performance evaluation of the BSCS is becoming crucial. This paper studies such a performance evaluation problem with a novel mixed queueing network (MQN) model and validates this model with extensive numerical simulation. We adopt the EVs’ blocking probability as our quality-of-service measure and focus on studying the impact of the key parameters of the BSCS (e.g., the numbers of parking spaces, swapping islands, chargers, and batteries) on the blocking probability. We prove a necessary and sufficient condition for showing the ergodicity of the MQN when the number of batteries approaches infinity, and further prove that the blocking probability has two different types of asymptotic behaviors. Meanwhile, for each type of asymptotic behavior, we analytically derive the asymptotic lower bound of the blocking probability.</p>",
    },

    {
        id : "jason_bcs_iet",
        name : "Optimal Power Dispatch of a Centralized Electric Vehicle Battery Charging Station with Renewables",
        coauthors : new Array(authorList.JWLi, authorList.XQTan, authorList.BSun, authorList.DHKTsang),
        journal : "IET Communications",
        pubinfo: "vol. 12, no. 5, pp. 579-585, March 2018",
        pdf: "/documents/jason_bcs_iet.pdf",
        highlight : "no",
        topic: "E",
        year: "2018",
        paperAbstract : "<p>Historically, transportation electrification has been largely hindered by the limited battery capacity and the long charging time. Battery swapping has emerged as one promising technology to mitigate these problems. A centralised battery charging station (BCS) is responsible for charging depleted batteries (DBs) and providing fully-charged batteries (FBs) for multiple geographically-distributed battery swapping stations (BSSs) so that they can carry out battery swapping services. Facilitated by the recent advancement in sensor and communication technologies, one salient advantage of this centralised approach lies in its convenience to better utilise dual energy sources (i.e. the traditional power grid and local renewable energy generators). This is achieved via optimising the charging processes of a large number of DBs. In this study, the authors propose an optimisation framework for a centralised BCS to minimise the energy cost from the dual energy sources to satisfy the FB demands from multiple BSSs. Particularly, the power dispatch problem in the day-ahead and real-time electricity markets is formulated as a two-stage stochastic optimisation through consideration of the intermittent renewable energy. Numerical simulations show that the proposed optimised power dispatch is capable of achieving cost saving of 76% compared with the benchmark, subject to the limited information available in day-ahead.</p>",
    },

    {
        id : "distributed_MG_IJEPES",
        name : "Energy Management of Cooperative Microgrids: A Distributed Optimization Approach",
        coauthors : new Array(authorList.TLiu, authorList.XQTan, authorList.BSun, authorList.YWu, authorList.DHKTsang),
        journal : "International Journal of Electrical Power and Energy Systems",
        pubinfo: "vol. 96, pp. 335-346, March 2018",
        pdf: "/documents/distributed_MG_IJEPES.pdf",
        highlight : "no",
        topic: "E",
        year: "2018",
        paperAbstract : "<p>The cooperation of multiple networked microgrids (MGs) can alleviate the mismatch problem between distributed generation and demand and reduce the overall cost of the power system. Energy management with direct energy exchange among MGs is a promising approach for improving energy efficiency. However, existing methods on microgrid cooperation usually overlook the underlying distribution network with operating constraints (e.g., voltage tolerance and power flow constraints). Hence the results may not be applicable to actual systems. This paper studies the energy management problem of multiple MGs that are interconnected by both the direct current (DC) energy exchange network and the alternating current (AC) traditional distribution networks. In our problem, each MG is equipped with renewable energy generators as well as distributed storage devices. In order to handle the non-convex power flow constraints, we exploit the recent results of the exact optimal power flow (OPF) relaxation method which can equivalently transform the original non-convex problem into a second-order cone programming problem and efficiently determine the optimal solution successfully. The objective of our problem is to minimize the overall energy cost in a distribution network consisting of multiple MGs, with the practical operating constraints (e.g., power balance and the battery’s operational constraints) explicitly incorporated. Considering the privacy and scalability, we propose a distributed algorithm with convergence assurance based on the alternating direction method of multipliers (ADMM). We also implement our method based on the model predictive control (MPC) approach in order to handle the forecasting errors of the renewable energy generation. Simulations are made for different MG exchange topologies on three radial distribution network testbeds. Numerical results demonstrate that certain topologies are more favorable than others, and the cooperation strategy for the energy exchange is significantly affected by the MGs’ locations in the distribution network.</p>",
    },


    {
        id : "ev_discrete_charging_tsg",
        name : "Optimal Scheduling for Electric Vehicle Charging with Discrete Charging Levels in Distribution Grid",
        coauthors : new Array(authorList.BSun, authorList.XQTan, authorList.YWu, authorList.DHKTsang),
        journal : "IEEE Transactions on Smart Grid",
        pubinfo: "vol. 9, no. 2, pp. 624-634, March 2018",
        pdf: "/documents/ev_discrete_charging_tsg.pdf",
        highlight : "no",
        topic: "E",
        year: "2018",
        paperAbstract : "<p>To accommodate the increasing electric vehicle (EV) penetration in distribution grid, coordinated EV charging has been extensively studied in the literature. However, most of the existing works optimistically consider the EV charging rate as a continuous variable and implicitly ignore the capacity limitation in distribution transformers, which both have great impact on the efficiency and stability of practical grid operation. Towards a more realistic setting, this paper formulates the EV coordinated discrete charging problem as two successive binary programs. The first one is designed to achieve a desired aggregate load profile (e.g., valley-filling profile) at the distribution grid level while taking into account the capacity constraints of distribution transformers. Leveraging the properties of separable convex function and total unimodularity, the problem is transformed into an equivalent linear program, which can be solved efficiently and optimally. The second problem aims to minimize the total number of on-off switchings of all the EVs’ charging profiles while preserving the optimality of the former problem. We prove the second problem is NP-hard and propose a heuristic algorithm to approximately achieve our target in an iterative manner. Case studies confirm the validity of our proposed scheduling methods and indicate our algorithm’s potential for real-time implementations.</p>",
    },

    {
        id : "JVFR_EV_ISGT",
        name : "Joint Voltage and Frequency Regulation by EV Charging Scheduling in the Distribution Network",
        coauthors : new Array(authorList.AZhang, authorList.BSun, authorList.TLiu, authorList.XQTan, authorList.DHKTsang),
        conference : "IEEE ISGT",
        pubinfo: "February 2018",
        pdf: "/documents/JVFR_EV_ISGT.pdf",
        highlight : "no",
        topic: "E",
        year: "2018",
        paperAbstract : "<p>This paper proposes a novel electric vehicle (EV) charging scheduling mechanism by controlling active and reactive charging power of EVs to provide joint voltage and frequency regulation (JVFR) in the distribution network. The objective of the scheduling problem is to minimize the net cost of the distribution system operator (DSO) for operating the distribution grid in the presence of both wind-based renewable generation and EV charging stations. We test the method on a 34-bus radial distribution network for different levels of VAR requirements of wind DG units to demonstrate the feasibility and performance of the proposed JVFR approach. The simulation results show that this JVFR greatly reduces the cost of DSO in comparison with Volt-VAR Optimization (VVO) technique, which is traditionally used to optimize voltage and minimize losses of a distribution network.</p>",
    },


    /* ----------------------- 2017 --------------------------*/
    /* ----------------------- 2017 --------------------------*/
    /* ----------------------- 2017 --------------------------*/
    
    {
        id : "realtime_coordination_sgc",
        name : "Real-time Market-based Coordination Mechanism for Transmission and Distribution Networks",
        coauthors : new Array(authorList.SWang, authorList.BSun, authorList.TLiu, authorList.XQTan, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "October 2017",
        pdf: "/documents/realtime_coordination_sgc.pdf",
        highlight : "no",
        topic: "E",
		year: "2017",
        paperAbstract : "<p>Distributed energy resources (DERs) such as renewable generation, energy storage and flexible loads have been acknowledged as the key drivers to transform the passive distribution networks into proactive players in the electricity market. In order to reduce the communication and computational complexity of integrating the huge number of DERs into the power system operation, the distribution system operator (DSO) is considered as the central controller to take charge of the dispatch of all the DERs within a distribution network. Through the exchange of boundary power flows and control signals, the independent system operator (ISO) coordinates all the DSOs to achieve certain social objective. In this paper, we study the interactions between the ISO and all the DSOs in both the dayahead market and the real-time balancing market. Particularly, we identify that the locational marginal price (LMP) based realtime market is unfair and discourages the integration of DERs. To achieve a win-win solution for both the ISO and the DSOs, we propose a real-time coordination mechanism to determine the power dispatch and the corresponding charge/payments via a Nash bargaining problem. Numerical results show that our proposed mechanism guarantees that the ISO and all the DSOs can cooperatively maximize the social welfare and share the benefits fairly due to the cooperation.</p>",
    },

    {
        id : "market_mdf_naps",
        name : "Market for Multi-Dimensional Flexibility with Parametric Demand Response Bidding",
        coauthors : new Array(authorList.TLiu, authorList.BSun, authorList.XQTan, authorList.DHKTsang),
        conference : "49th North American Power Symposium",
        pubinfo: "September 2017",
        pdf: "/documents/market_mdf_naps.pdf",
        highlight : "no",
        topic: "E",
		year: "2017",
        paperAbstract : "<p>Demand side management (DSM) exploits flexibility of the end-user side to help improve the performance of the power grid. However, how to model and evaluate the multi-dimensional flexibility (MDF) of the energy consumers (such as the flexibilities in terms of energy, power, time period and locations, etc.) is an important and challenging issue. To handle this, we propose a day-ahead market design for the MDF services. In this market, the MDF aggregators need to submit the characteristics of their virtual battery models and parametric reward functions, which represent the aggregate load flexibilities and the required remunerations, respectively. One key feature of this new market is that the system operator is allowed to accept only a portion of every bid instead of the whole of them. This can bring more flexibilities for the operator to minimize the total system cost. With various case studies on a 6-bus transmission network, we show that this market can help flatten the locational marginal prices (LMPs) across the peak load period. Moreover, we show that even if the MDF bids at different buses are the same, the clearing results can be quite different, which reflect the practical values of different load flexibilities from the perspective of the system operator.</p>",
    },

    {
        id : "ssp_bess_tsg",
        name : "A Stochastic Shortest Path Framework for Quantifying the Value and Lifetime of Battery Energy Storage under Dynamic Pricing",
        coauthors : new Array(authorList.XQTan, authorList.YWu, authorList.DHKTsang),
        journal : "IEEE Transactions on Smart Grid",
        pubinfo: "vol. 8, no. 2, pp. 769-778, March 2017",
        pdf: "/documents/ssp_bess_tsg.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        topic: "E",
        year: "2017",
        paperAbstract : "<p>This paper aims at quantifying the value of a lifetime-constrained battery energy storage system (BESS) operated by a consumer who faces fluctuating electricity prices. We define the lifetime of the BESS as the serving duration within which the BESSs capacity stays above a certain threshold of its initial capacity and define the value of the BESS as the total peakshaving value within its entire lifetime. Under the assumption that the price dynamics are Markovian, we show that maximizing the average value of the BESS can be formulated as a stochastic shortest path (SSP) problem, and the average lifetime corresponds to the average number of steps before being absorbed in the SSP problem. We propose an efficient parallel value iteration algorithm to solve the proposed SSP problem with guarantees of achieving optimality and a fast convergence. We also derive a closed form expression for the average lifetime based on the principle of an embedded absorbing Markov chain. We validate our model and algorithm on a practical BESS via real price data sets from two different markets. Comparison of the computational efficiency between the standard Gauss–Seidel value iteration and our parallel algorithm is also illustrated through extensive simulation.</p>",
    },
    
   
    /* ----------------------- 2016 --------------------------*/
    /* ----------------------- 2016 --------------------------*/
    /* ----------------------- 2016 --------------------------*/

    {
        id : "pareto_bess_tpds",
        name : "Pareto Optimal Operation of Distributed Battery Energy Storage Systems for Energy Arbitrage under Dynamic Pricing",
        coauthors : new Array(authorList.XQTan, authorList.YWu, authorList.DHKTsang),
        journal : "IEEE Transactions on Parallel and Distributed Systems",
        pubinfo: "vol. 27, no. 7, pp. 2103-2115, July 2016",
        pdf: "/documents/pareto_bess_tpds.pdf",
        highlight : "no",
        topic: "E",
        year: "2016",
        paperAbstract : "<p>The optimal operation of a distributed battery energy storage system (BESS) for energy arbitrage under dynamic pricing is studied in this paper, and the Pareto optimal arbitrage policy that balances the economic value and lifetime tradeoff of the BESSis obtained. Specifically, the lifetime performance of the BESS is represented by its average lifetime, i.e., the average operational duration within which its capacity stays above a certain threshold, and the value performance of the BESS is defined as the total average arbitrage value within its entire lifetime. We propose a constrained stochastic shortest path (CSSP) model to characterize the optimal value-lifetime performance pair. By exploiting the hidden structure of this CSSP problem, an efficient parallel algorithm is proposed to compute the optimal policy. We further prove the condition under which the optimal policy is Pareto optimal. This implies that the achievable optimal value-lifetime performance pair is globally optimal as long as the system-wide utility is monotonically increasing in both the value performance and the lifetime performance. We validate our proposed model and algorithm via real battery specifications and electricity market data, and the results show promising insights for both infrastructure planning and operational management of BESSs in practice.</p>",
    },


    {
        id : "robust_dsf_icit",
        name : "Robust Provisioning of Demand-Side Flexibility Under Electricity Price Uncertainty",
        coauthors : new Array(authorList.Sareh, authorList.XQTan, authorList.BSun, authorList.DHKTsang),
        conference : "IEEE ICIT",
        pubinfo: "March 2016",
        pdf: "/documents/robust_dsf_icit.pdf",
        highlight : "no",
        topic: "E",
		year: "2016",
        paperAbstract : "<p>With the successful integration of renewable energy sources to the grid, the volatility of supply in the system will increase and therefore a gap between power generation and demand on the grid may occur, which causes the grid frequency to move away from its nominal value. To avoid this scenario, frequency regulation service has been introduced and demandside flexible loads have been widely considered in recent years. In this paper, we focus on the flexibility of an HVAC system in the building sector and propose a robust optimization approach to improve the user’s decision making subject to the electricity price uncertainty. In particular, by explicitly taking into account the price uncertainty in the demand-side frequency regulation, we develop an intelligent building energy management system. The deterministic and robust solutions are compared to explain the influence of price uncertainty on the users’ contribution in the frequency regulation service and daily energy payment. The importance of comfort weight factor on the demand-side power consumption profile as well as the corresponding up and down reserve are also investigated. According to the numerical analysis, the robust optimization approach may bring about monetary savings in the electricity bill of the user, particularly in a drastic uncertainty level.</p>",
    },

    /* ----------------------- 2015 --------------------------*/
    /* ----------------------- 2015 --------------------------*/
    /* ----------------------- 2015 --------------------------*/


    {
        id : "pricing_hybrid_market_tii",
        name : "Optimal Pricing and Energy Scheduling for Hybrid Energy Trading Market in Future Smart Grid",
        coauthors : new Array(authorList.YWu, authorList.XQTan, authorList.LQian, authorList.DHKTsang),
        journal : "IEEE Transactions on Industrial Informatics",
        pubinfo: "vol. 11, no. 6, pp. 1585-1596, December 2015",
        pdf: "/documents/pricing_hybrid_market_tii.pdf",
        highlight : "no",
        topic: "E",
        year: "2015",
        paperAbstract : "<p>Future smart grid (SG) has been considered a complex and advanced power system, where energy consumers are connected not only to the traditional energy retailers (e.g., the utility companies), but also to some local energy networks for bidirectional energy trading opportunities. This paper aims to investigate a hybrid energy trading market that is comprised of an external utility company and a local trading market managed by a local trading center (LTC). The existence of local energy market provides new opportunities for the energy consumers and the distributed energy sellers to perform the local energy trading in a cooperative manner such that they all can benefit. This paper first quantifies the respective benefits of the energy consumers and the sellers from the local trading and then investigates how they can optimize their benefits by controlling their energy scheduling in response to the LTC’s pricing. Two different types of the LTC are considered: 1) the nonprofit-oriented LTC, which solely aims at benefiting the energy consumers and the sellers; and 2) the profit-oriented LTC, which aims at maximizing its own profit while guaranteeing the required benefit for each consumer and seller. For each type of the LTC, the optimal trading problem is formulated and the associated algorithm is further proposed to efficiently find the LTC’s optimal price, as well as the optimal energy scheduling for each consumer and seller. Numerical results are provided to validate the benefits of the hybrid energy trading market and the performance of the proposed algorithms.</p>",
    },

    {
        id : "microgrid_p2p_sgc",
        name : "Energy Management of Cooperative Microgrids with P2P Energy Sharing in Distribution Networks",
        coauthors : new Array(authorList.TLiu, authorList.XQTan, authorList.BSun, authorList.YWu, authorList.XHGuan, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "October 2015",
        pdf: "/documents/microgrid_p2p_sgc.pdf",
        highlight : "no",
        topic: "E",
		year: "2015",
        paperAbstract : "<p>To handle the mismatch problem between local demand and local generation in microgrids (MGs), the paradigm of peer-to-peer (P2P) energy sharing among neighboring MGs has been considered as a promising solution for improving the utilization of local distributed energy resources and saving the energy bills for all MGs. Existing works on cooperative MGs usually consider the high-level energy sharing and trading strategies but little about the physical constraints (e.g. voltage tolerance and power flow constraints) in the underlying distribution network. Hence, their solutions may not be applicable to practical power systems. This paper proposes an optimization problem that aims at minimizing the overall energy cost and the P2P energy sharing losses in a distribution network consisting of multiple MGs and explicitly incorporates the practical constraints (e.g., power balance and battery’s operational constraints). The proposed optimization problem is difficult to solve directly due to the non-convex constraints. Nevertheless, motivated by the very recent result in radial distribution networks, the proposed non-convex optimization problem can be relaxed to a secondorder cone programming (SOCP) problem without incurring any loss of optimality. We apply the proposed problem to a radial distribution network testbed and obtain the corresponding optimal energy management strategy, which exploits the diversified energy consumption profiles to dynamically coordinate multiple MGs and reduces the total energy bill of all MGs. Moreover, an interesting observation from the simulation results is that the cooperation scheme in the P2P sharing network is significantly affected by the MGs’ relative locations in the distribution network.</p>",
    },

    {
        id : "smart_home_nilm_sgc",
        name : "Smart Home Energy Management Systems Based on Non-Intrusive Load Monitoring",
        coauthors : new Array(authorList.JWLi, authorList.XQTan, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "October 2015",
        pdf: "/documents/smart_home_nilm_sgc.pdf",
        highlight : "no",
        topic: "E",
		year: "2015",
        paperAbstract : "<p>The concept of smart home has attracted considerable attention in recent years, and energy management is one of its key component. This attributes to the growing concern in environmental protection and energy conservation, as well as the demands for big data collection from utility companies and policy makers. Current solutions often approach this problem by either the centralized non-intrusive load monitoring (NILM) or the decentralized smart controls but seldom both, rendering them impractical to some extent. Therefore, in this paper, we propose a novel framework of smart home energy management systems incorporating both approaches, so that accurate power consumption monitoring and intuitive interaction with the home appliances are simultaneously achieved. The smart components directly control the appliances, while the central controller coordinates the data collection and communication. The key feature is the capability of automatically mapping the appliances to their corresponding sockets, reducing the necessity for manual initial setup. Numerical simulations prove the accuracy and efficiency of the framework. We believe that our systems, if widely deployed, can benefit not only individual households by saving energy bills and simplifying life but also society by the big data generated.</p>",
    },

    {
        id : "mpc_room_sgc",
        name : "Model Predictive Control of Integrated Room Automation Considering Occupants Preference",
        coauthors : new Array(authorList.Sareh, authorList.XQTan, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "October 2015",
        pdf: "/documents/mpc_room_sgc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        topic: "E",
		year: "2015",
        paperAbstract : "<p>A framework for the simultaneous control of temperature, illumination and window roller blind position is considered. The occupants are allowable to adjust their comfort preference to a strict, mild or loose level. The cost function has two parts including energy consumption and comfort dissatisfaction, each of which is expected to be minimized based on the users’ comfort settings. The control strategy is Model Predictive Control (MPC) and it computes a trajectory of future manipulated variables to optimize future room temperature, illumination and outside view along with the minimum possible departure from the desired level. Weather data like solar radiation, solar illumination and outside temperature are considered in the model with the aim of taking advantage of daylight without disrupting other comfort levels. Simulation analyses were performed for the summer and winter days revealing the influence of the roller blind position on the building total energy consumption. The simulation results affirm that the proposed model can save energy by minimally changing occupants’ comfort requirements during some hours of the day.</p>",
    },

    
    {
        id : "downlink_scheduling_monet",
        name : "Optimal Downlink Scheduling for Heterogeneous Traffic in LET-A Based on MDP and Chance-Constrained Approaches",
        coauthors : new Array(authorList.Niafar, authorList.XQTan, authorList.DHKTsang),
        journal : "ACM Springer Mobile Networks and Applications (MONET) Journal",
        pubinfo: "September 2015",
        pdf: "/documents/downlink_scheduling_monet.pdf",
        highlight : "no",
        topic: "N",
        year: "2015",
        paperAbstract : "<p>The current mobile broadband market experiences major growth in data demand and average revenue loss. To remain profitable from the perspective of a service provider (SP), one needs to maximize revenue as much as possible by making subscribers satisfied within the limited budget. On the other hand, traffic demands are moving toward supporting the wide range of heterogeneous applications with different quality of service (QoS) requirements. In this paper, we consider two related packet scheduling problems, i.e., long-term and short-term approaches in the 4th generation partnership project (3GPP) long term evolution-advanced (LTE-A) system. In the longterm approach, the long-term average revenue of SP subject to the long-term QoS constraints for heterogeneous traffic demands is optimized. The problem is first formulated as a constrained Markov decision process (CMDP) problem, of which the optimal control policy is achieved by utilizing the channel and queue information simultaneously. Subsequently, in the short-term approach, we consider the short-term revenue optimization problem which stochastically guarantees the short-term QoS for heterogeneous traffic demands through a set of chance constraints. To make the proposed chance-constrained programming problem computationally tractable, we use the Bernstein approximation technique to analytically approximate the chance constraint as a convex conservative constraint. Finally, the proposed packet scheduling schemes and solution methods are validated via numerical simulations.</p>",
    },


    {
        id : "trading_pricing_sdc",
        name : "Optimal Management of Local Energy Trading in Future Smart Microgrid via Pricing",
        coauthors : new Array(authorList.YWu, authorList.XQTan, authorList.LQian, authorList.DHKTsang),
        conference : "IEEE INFOCOM Workshop on Smart Data Pricing",
        pubinfo: "May 2015",
        pdf: "/documents/trading_pricing_sdc.pdf",
        highlight : "no",
        topic: "E",
		year: "2015",
        paperAbstract : "<p>In this paper, we investigate optimal management of local energy trading in future smart micro-grid (SMG) via pricing. In SMG, energy consumers and providers, in addition to trading with utility company, can also perform local energy trading controlled by a local trading manager (LTM) for reaping benefits. We first quantify the benefits achieved by the consumers and providers from local trading and then formulate a two-layered optimization framework to investigate i) how the energy consumers and providers maximize their benefits via appropriately adjusting their local trading decisions in response to the LTM’s pricing, and ii) how the LTM adjusts its price in local market to benefit the consumers and providers as much as possible while guaranteeing a required gain for itself. We propose two algorithms to solve the layered optimization problem and perform numerical experiments with practical data set to validate the proposed local trading model and the algorithms.</p>",
    },

    /* ----------------------- 2014 --------------------------*/
    /* ----------------------- 2014 --------------------------*/
    /* ----------------------- 2014 --------------------------*/

    {
        id : "queueing_bscs_sgc",
        name : "Queueing Network Models for Electric Vehicle Charging Station with Battery Swapping",
        coauthors : new Array(authorList.XQTan, authorList.BSun, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "October 2014",
        pdf: "/documents/queueing_bscs_sgc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        topic: "E",
		year: "2014",
        paperAbstract : "<p>Electric Vehicle (EV) charging stations with battery swapping, as one promising energy supplement solution to cope with the increasing in EVs, demand a theoretical performance analysis framework. In this paper, we propose a queueing network model to serve as such a framework for battery swapping stations with a locally-charging mode. The model is a mixed queueing network with an open queue of EVs and a closed queue of batteries. Based on mild assumptions, we show the equilibrium equations for the queueing system, and the steady-state distribution is the solution of these finite equilibrium equations. In order to show the uniqueness of the solution, we prove the ergodicity of the system. Meanwhile, by leveraging the embedded Markov chain, we present an alternative yet much easier way to compute the steady-state distribution. Based on the steadystate distribution, various important performance indicators have been analytically determined. Simulation results demonstrate the validity of the queueing network model and reveal rich insights for the infrastructure planning of practical battery swapping stations.</p>",
    },


    {
        id : "trading_bess_sgc",
        name : "Optimal Energy Trading with Battery Energy Storage under Dynamic Pricing",
        coauthors : new Array(authorList.XQTan, authorList.YWu, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "October 2014",
        pdf: "/documents/trading_bess_sgc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        topic: "E",
		year: "2014",
        paperAbstract : "<p>This paper proposes a mathematical framework for finding the optimal energy trading policy with battery energy storage (BES) under a dynamic pricing environment. We have previously shown that finding the arbitrage value of BES with known historical price data can be solved by iterative linear programming. The objective of the present paper is to show that, when the price information remains unknown, finding the optimal economic value of lifetime-constrained BES falls within the purview of stochastic shortest path problems, and the optimal policy presents the property of a threshold structure. To overcome the dimensionality difficulty, we propose a structure-based aggregation method, i.e., Layer and Group, to construct optimal trading policies. The elegance of this approach lies in its circumventing of the need for exhausted value iteration over the entire state space. Instead, the approach works in a hierarchical and parallel fashion, thus significantly speeding up the convergence to the optimality. Extensive experimental results show that this approach can dramatically reduce the computational complexity, thus contributing to the computationally tractable optimality without requiring any approximation. Numerical simulation also demonstrates the validity of the proposed framework, and various trading insights for practical BES systems have been formed.</p>",
    },


    {
        id : "operation_bscs_sgc",
        name : "Optimal Charging Operation of Battery Swapping Stations with QoS Guarantee",
        coauthors : new Array(authorList.BSun, authorList.XQTan, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "October 2014",
        pdf: "/documents/operation_bscs_sgc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        topic: "E",
		year: "2014",
        paperAbstract : "<p>Electric Vehicle (EV) drivers have an urgent demand for fast battery refueling methods for long distance trip and emergency drive. A well-planned battery swapping station (BSS) network can be a promising solution to offer timely refueling services. However, an inappropriate battery recharging process in the BSS may not only violate the stabilization of the power grid by their large power consumption, but also increase the charging cost from the BSS operators’ point of view. In this paper, we aim to obtain the optimal charging policy to minimize the charging cost while ensuring the quality of service (QoS) of the BSS. A novel queueing network model is proposed to capture the operation nature for an individual BSS. Based on practical assumptions, we formulate the charging schedule problem as a stochastic control problem and achieve the optimal charging policy by dynamic programming. Monte Carlo simulation is used to evaluate the performance of different policies for both stationary and non-stationary EV arrival cases. Numerical results show the importance of determining the number of total batteries and charging outlets held in the BSS. Our work gives insight for the future infrastructure planning and operational management of BSS network.</p>",
    },


    {
        id : "coop_trading_ccc",
        name : "Cooperative Distributed Energy Generation and Energy Trading for Future Smart Grid",
        coauthors : new Array(authorList.YWu, authorList.XSun, authorList.XQTan, authorList.LMeng, authorList.LYu, authorList.WZSong, authorList.DHKTsang),
        conference : "Chinese Control Conference (CCC)",
        pubinfo: "July  2014",
        pdf: "/documents/coop_trading_ccc.pdf",
        highlight : "no",
        topic: "E",
		year: "2014",
        paperAbstract : "<p>In this paper, we investigate the cooperative distributed energy generation and energy trading for future smart grid. In our model, a group of energy users, who are equipped with the capabilities of distributed energy generation, are allowed to trade energy in a cooperative manner with the goal to minimize their total energy-provisioning cost while meeting the local demand of each individual energy user. Moreover, each user also expects to benefit from the cooperative energy generation and trading with the others. Motivated by these objectives, we first jointly determine the optimal energy scheduling decisions for all energy users such that their total energy-provisioning cost can be minimized. Then, based on the optimal energy scheduling decisions, we further determine the optimal transaction costs associated with the users’ energy trading to ensure that each of them can positively benefit from the cooperation. Extensive numerical results are provided to show the advantages of the proposed cooperative energy generation and trading model as well as our proposed algorithms to achieve the optimal solutions.</p>",
    },


    {
        id : "downlink_sheduling_qhine",
        name : "The Optimal User Scheduling for LTE-A Downlink with Heterogeneous Traffic Types",
        coauthors : new Array(authorList.Niafar, authorList.XQTan, authorList.DHKTsang),
        conference : "Qshine",
        pubinfo: "July  2014",
        pdf: "/documents/downlink_sheduling_qhine.pdf",
        highlight : "no",
        note: "Invited Paper",
        topic: "E",
		year: "2014",
        paperAbstract : "<p>The current mobile broadband market experiences major growth in data demand and average revenue loss. To remain profitable from the perspective of a service provider (SP), one needs to maximize revenue as much as possible by making subscribers satisfied within the limited budget. On the other hand, traffic demands are moving toward supporting the wide range of heterogeneous services with different quality of service (QoS) requirements. In this paper, we consider packet scheduling problem in the 4th generation partnership project (3GPP) long term evolution-advanced (LTE-A) system to optimize the long-term average revenue of SPs subject to differential QoS constraints for heterogeneous traffic demands. The QoS-constrained control problem is first formulated as a constrained Markov decision process (CMDP) problem, of which the optimal control policy is achieved by utilizing the channel and queue information simultaneously. Subsequently, based on the proposed CMDP problem, we further formulated an optimization problem which stochastically grantees the QoS through a chance constraint. To make the proposed chance-constraint programming problem computationally tractable, we use Bernstein approximation technique to analytically approximate the chance constraint as a convex conservative constraint. Finally, the proposed scheduling framework and solution methods are validated via numerical simulation.</p>",
    },

    /* ----------------------- 2013 --------------------------*/
    /* ----------------------- 2013 --------------------------*/
    /* ----------------------- 2013 --------------------------*/
    

    {
        id : "lifetime_analysis_bess_sgc",
        name : "Economic Analysis of Lifetime-Constrained Battery Storage under Dynamic Pricing",
        coauthors : new Array(authorList.XQTan, authorList.YWu, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "October 2013",
        pdf: "/documents/lifetime_analysis_bess_sgc.pdf",
        highlight : "no",
        topic: "E",
		year: "2013",
        paperAbstract : "<p>Battery Energy Storage System (BESS), as one type of the storage systems, serves as a particularly important role for future power grid systems. However, since both the capital cost of BESS and the potential economic value vary dramatically for large-scale systems, the total cost induced by BESS remains a major source of uncertainty for potential power system operators when the limited lifetime of BESS is taken into account. Therefore, appropriate configuration and operation of BESS are of paramount importance for its deployments in practice. In this paper, we propose a novel model for BESS that attempts to capture the fact of limited lifetime and to exploit the potential economic value. We develop a finite horizon optimization model for BESS operators with unknown stopping-time. The stoppingtime is determined by the policy itself, which makes the problem technically challenging. We first propose an algorithm called Forward-iteration of relaxed-Linear Programming (FirLP), which solves the problem by iterating on every time instance and achieves the optimality. Subsequently, we observe that some time instances are not necessary to be iterated on. Thus, we propose Jumpiteration of relaxed-Linear Programming (JirLP). By utilizing a well defined jump step, we can avoid exhaustive iteration on those unnecessary time instances. We examine our model and algorithms with the real price data. The computational results further validate our model, and shows that our proposed JirLP can achieve optimality and reduce the unnecessary iterations by 50% in comparison with the FirLP.</p>",
    },


);