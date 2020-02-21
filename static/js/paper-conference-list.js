var papers_conference = new Array (

    {
        id : "mama_2019",
        name : "Optimal Posted Prices for Online Resource Allocation with Supply Costs",
        coauthors : new Array(authorList.XQTan, authorList.Garcia, authorList.DHKTsang),
        conference : "ACM Sigmetrics Workshop on MAMA",
        pubinfo: "June 2019",
        pdf: "https://www.sigmetrics.org/mama/abstracts/Tan.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>We study a general online resource allocation problem, where a service provider sells multiple types of capacity-limited resources to heterogeneous customers that arrive in a sequential manner. The provider charges payment from customers who purchase the resource but must pay an increasing marginal supply cost with respect to the total resource allocated (e.g., production costs and/or operational costs). The goal is to maximize the social welfare, namely, the total valuation of customers minus the total supply cost of the provider. We adopt the standard competitive analysis framework and provide an optimal online posted-pricing mechanism. Our online mechanism is optimal in the sense that no other online algorithms can achieve a better competitive ratio.</p>",
    },

    {
        id : "e_energy_19",
        name : "A Novel Online Mechanism for Demand-Side Flexibility Management under Arbitrary Arrivals",
        coauthors : new Array(authorList.XQTan, authorList.Garcia, authorList.BSun, authorList.DHKTsang),
        conference : "ACM e-Energy",
        pubinfo: "June 2019",
        pdf: "/documents/e_energy_19.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>This paper proposes a price-based online mechanism for real-time demand-side flexibility management in smart grids. The major contribution of this paper is the design of a novel pricing function, based on which the price-based online mechanism achieves a tighter competitive ratio than previous work [3].</p>",
    },

    {
        id : "noma_mec_wcnc19",
        name : "Energy-efficient Resource Allocation and Channel Assignment for NOMA-based Mobile Edge Computing",
        coauthors : new Array(authorList.LLiu, authorList.BSun, authorList.XQTan, authorList.YSXiao, authorList.DHKTsang),
        conference : "IEEE Wireless Communications and Networking Conference (WCNC)",
        pubinfo: "April 2019",
        pdf: "/documents/noma_mec_wcnc19.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>In this paper, we study resource allocation (including power and computation resources) and channel assignment in an uplink Non-orthogonal Multiple Access (NOMA)-based Mobile Edge Computing (MEC) system. Our objective is to minimize the total energy consumption of all users. The problem, however, is a non-convex combinatorial optimization problem. We first investigate the hidden convexity by reformulating the resource allocation problem when the channel assignment is given, and propose an efficient algorithm to allocate the resources by dual decomposition methods. Furthermore, we design a heuristic algorithm to decide the channel assignment leveraging the structural property in the reformulation. Extensive simulations verify that NOMA has great advantages over Orthogonal Multiple Access (OMA) in multi-user latency-intensive MEC systems.</p>",
    },

    {
        id : "amod_uv_2018",
        name : "Autonomous Mobility and Energy Service Management in Future Smart Cities: An Overview",
        coauthors : new Array(authorList.XQTan, authorList.Garcia),
        conference : "IEEE UV",
        pubinfo: "2018",
        //pdf: "/documents/noma_mec_wcnc19.pdf",
        arxiv : "https://arxiv.org/abs/1810.04576",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>With the rise of transportation electrification, autonomous driving and shared mobility in urban mobility systems, and increasing penetrations of distributed energy resources and autonomous demand-side management techniques in energy systems, tremendous opportunities, as well as challenges, are emerging in the forging of a sustainable and converged urban mobility and energy future. This paper is motivated by these disruptive transformations and gives an overview of managing autonomous mobility and energy services in future smart cities. First, we propose a three-layer architecture for the convergence of future mobility and energy systems. For each layer, we give a brief overview of the disruptive transformations that directly contribute to the rise of autonomous mobility-on-demand (AMoD) systems. Second, we propose the concept of autonomous flexibility-on-demand (AFoD), as an energy service platform built directly on existing infrastructures of AMoD systems. In the vision of AFoD, autonomous electric vehicles provide charging flexibilities as a service on demand in energy systems. Third, we analyze and compare AMoD and AFoD, and we identify four key decisions that, if appropriately coordinated, will create a synergy between AMoD and AFoD. Finally, we discuss key challenges towards the success of AMoD and AFoD in future smart cities and present some key research directions regarding the system-wide coordination between AMoD and AFoD.</p>",
    },


    {
        id : "online_v2s_sgc",
        name : "Online Price-based Vehicle-to-Station Recommendations for EV Battery Swapping",
        coauthors : new Array(authorList.LNi, authorList.BSun, authorList.XQTan, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "October 2018",
        pdf: "/documents/online_v2s_sgc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>We present a framework to integrate the choice of electric vehicle (EV) customers into the vehicle-to-station (V2S) routing problem for battery swapping. Instead of assigning stations to each EV customer directly, we provide a recommendation, including a list of station-price pairs that are available for EV battery swapping services, for customers to choose. Compared with assignment, recommendation is closer to reality for scenarios lacking incentives for the cooperation of customers such as the battery swapping services of private EVs. In this paper, we model customers’ behavior by their choice probability given a particular recommendation, which can be readily obtained based on analytics techniques once the real data are available. We propose an online V2S recommendation algorithm, which aims at maximizing the expected revenue of a group of battery swapping stations (BSSs) and ensuring the quality service of EV customers. Leveraging the primal-dual analysis, we show that the loss of revenue due to online EV arrivals is theoretically bounded by a provable competitive ratio. Moreover, numerical tests also validate that the proposed online algorithm can significantly outperform benchmarks in maximizing revenues in online settings.</p>",
    },

    {
        id : "JVFR_EV_ISGT",
        name : "Joint Voltage and Frequency Regulation by EV Charging Scheduling in the Distribution Network",
        coauthors : new Array(authorList.AZhang, authorList.BSun, authorList.TLiu, authorList.XQTan, authorList.DHKTsang),
        conference : "IEEE ISGT",
        pubinfo: "February 2018",
        pdf: "/documents/JVFR_EV_ISGT.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>This paper proposes a novel electric vehicle (EV) charging scheduling mechanism by controlling active and reactive charging power of EVs to provide joint voltage and frequency regulation (JVFR) in the distribution network. The objective of the scheduling problem is to minimize the net cost of the distribution system operator (DSO) for operating the distribution grid in the presence of both wind-based renewable generation and EV charging stations. We test the method on a 34-bus radial distribution network for different levels of VAR requirements of wind DG units to demonstrate the feasibility and performance of the proposed JVFR approach. The simulation results show that this JVFR greatly reduces the cost of DSO in comparison with Volt-VAR Optimization (VVO) technique, which is traditionally used to optimize voltage and minimize losses of a distribution network.</p>",
    },

    {
        id : "realtime_coordination_sgc",
        name : "Real-time Market-based Coordination Mechanism for Transmission and Distribution Networks",
        coauthors : new Array(authorList.SWang, authorList.BSun, authorList.TLiu, authorList.XQTan, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "October 2017",
        pdf: "/documents/realtime_coordination_sgc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>Distributed energy resources (DERs) such as renewable generation, energy storage and flexible loads have been acknowledged as the key drivers to transform the passive distribution networks into proactive players in the electricity market. In order to reduce the communication and computational complexity of integrating the huge number of DERs into the power system operation, the distribution system operator (DSO) is considered as the central controller to take charge of the dispatch of all the DERs within a distribution network. Through the exchange of boundary power flows and control signals, the independent system operator (ISO) coordinates all the DSOs to achieve certain social objective. In this paper, we study the interactions between the ISO and all the DSOs in both the dayahead market and the real-time balancing market. Particularly, we identify that the locational marginal price (LMP) based realtime market is unfair and discourages the integration of DERs. To achieve a win-win solution for both the ISO and the DSOs, we propose a real-time coordination mechanism to determine the power dispatch and the corresponding charge/payments via a Nash bargaining problem. Numerical results show that our proposed mechanism guarantees that the ISO and all the DSOs can cooperatively maximize the social welfare and share the benefits fairly due to the cooperation.</p>",
    },

    {
        id : "market_mdf_naps",
        name : "Market for Multi-Dimensional Flexibility with Parametric Demand Response Bidding",
        coauthors : new Array(authorList.TLiu, authorList.BSun, authorList.XQTan, authorList.DHKTsang),
        conference : "49th North American Power Symposium",
        pubinfo: "Sept. 2017",
        pdf: "/documents/market_mdf_naps.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>Demand side management (DSM) exploits flexibility of the end-user side to help improve the performance of the power grid. However, how to model and evaluate the multi-dimensional flexibility (MDF) of the energy consumers (such as the flexibilities in terms of energy, power, time period and locations, etc.) is an important and challenging issue. To handle this, we propose a day-ahead market design for the MDF services. In this market, the MDF aggregators need to submit the characteristics of their virtual battery models and parametric reward functions, which represent the aggregate load flexibilities and the required remunerations, respectively. One key feature of this new market is that the system operator is allowed to accept only a portion of every bid instead of the whole of them. This can bring more flexibilities for the operator to minimize the total system cost. With various case studies on a 6-bus transmission network, we show that this market can help flatten the locational marginal prices (LMPs) across the peak load period. Moreover, we show that even if the MDF bids at different buses are the same, the clearing results can be quite different, which reflect the practical values of different load flexibilities from the perspective of the system operator.</p>",
    },

    {
        id : "robust_dsf_icit",
        name : "Robust Provisioning of Demand-Side Flexibility Under Electricity Price Uncertainty",
        coauthors : new Array(authorList.Sareh, authorList.XQTan, authorList.BSun, authorList.DHKTsang),
        conference : "IEEE ICIT",
        pubinfo: "March 2016",
        pdf: "/documents/robust_dsf_icit.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>With the successful integration of renewable energy sources to the grid, the volatility of supply in the system will increase and therefore a gap between power generation and demand on the grid may occur, which causes the grid frequency to move away from its nominal value. To avoid this scenario, frequency regulation service has been introduced and demandside flexible loads have been widely considered in recent years. In this paper, we focus on the flexibility of an HVAC system in the building sector and propose a robust optimization approach to improve the user’s decision making subject to the electricity price uncertainty. In particular, by explicitly taking into account the price uncertainty in the demand-side frequency regulation, we develop an intelligent building energy management system. The deterministic and robust solutions are compared to explain the influence of price uncertainty on the users’ contribution in the frequency regulation service and daily energy payment. The importance of comfort weight factor on the demand-side power consumption profile as well as the corresponding up and down reserve are also investigated. According to the numerical analysis, the robust optimization approach may bring about monetary savings in the electricity bill of the user, particularly in a drastic uncertainty level.</p>",
    },

    {
        id : "microgrid_p2p_sgc",
        name : "Energy Management of Cooperative Microgrids with P2P Energy Sharing in Distribution Networks",
        coauthors : new Array(authorList.TLiu, authorList.XQTan, authorList.BSun, authorList.YWu, authorList.XHGuan, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "2015",
        pdf: "/documents/microgrid_p2p_sgc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>To handle the mismatch problem between local demand and local generation in microgrids (MGs), the paradigm of peer-to-peer (P2P) energy sharing among neighboring MGs has been considered as a promising solution for improving the utilization of local distributed energy resources and saving the energy bills for all MGs. Existing works on cooperative MGs usually consider the high-level energy sharing and trading strategies but little about the physical constraints (e.g. voltage tolerance and power flow constraints) in the underlying distribution network. Hence, their solutions may not be applicable to practical power systems. This paper proposes an optimization problem that aims at minimizing the overall energy cost and the P2P energy sharing losses in a distribution network consisting of multiple MGs and explicitly incorporates the practical constraints (e.g., power balance and battery’s operational constraints). The proposed optimization problem is difficult to solve directly due to the non-convex constraints. Nevertheless, motivated by the very recent result in radial distribution networks, the proposed non-convex optimization problem can be relaxed to a secondorder cone programming (SOCP) problem without incurring any loss of optimality. We apply the proposed problem to a radial distribution network testbed and obtain the corresponding optimal energy management strategy, which exploits the diversified energy consumption profiles to dynamically coordinate multiple MGs and reduces the total energy bill of all MGs. Moreover, an interesting observation from the simulation results is that the cooperation scheme in the P2P sharing network is significantly affected by the MGs’ relative locations in the distribution network.</p>",
    },

    {
        id : "smart_home_nilm_sgc",
        name : "Smart Home Energy Management Systems Based on Non-Intrusive Load Monitoring",
        coauthors : new Array(authorList.JWLi, authorList.XQTan, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "2015",
        pdf: "/documents/smart_home_nilm_sgc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>The concept of smart home has attracted considerable attention in recent years, and energy management is one of its key component. This attributes to the growing concern in environmental protection and energy conservation, as well as the demands for big data collection from utility companies and policy makers. Current solutions often approach this problem by either the centralized non-intrusive load monitoring (NILM) or the decentralized smart controls but seldom both, rendering them impractical to some extent. Therefore, in this paper, we propose a novel framework of smart home energy management systems incorporating both approaches, so that accurate power consumption monitoring and intuitive interaction with the home appliances are simultaneously achieved. The smart components directly control the appliances, while the central controller coordinates the data collection and communication. The key feature is the capability of automatically mapping the appliances to their corresponding sockets, reducing the necessity for manual initial setup. Numerical simulations prove the accuracy and efficiency of the framework. We believe that our systems, if widely deployed, can benefit not only individual households by saving energy bills and simplifying life but also society by the big data generated.</p>",
    },

    {
        id : "mpc_room_sgc",
        name : "Model Predictive Control of Integrated Room Automation Considering Occupants Preference",
        coauthors : new Array(authorList.Sareh, authorList.XQTan, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "2015",
        pdf: "/documents/mpc_room_sgc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>A framework for the simultaneous control of temperature, illumination and window roller blind position is considered. The occupants are allowable to adjust their comfort preference to a strict, mild or loose level. The cost function has two parts including energy consumption and comfort dissatisfaction, each of which is expected to be minimized based on the users’ comfort settings. The control strategy is Model Predictive Control (MPC) and it computes a trajectory of future manipulated variables to optimize future room temperature, illumination and outside view along with the minimum possible departure from the desired level. Weather data like solar radiation, solar illumination and outside temperature are considered in the model with the aim of taking advantage of daylight without disrupting other comfort levels. Simulation analyses were performed for the summer and winter days revealing the influence of the roller blind position on the building total energy consumption. The simulation results affirm that the proposed model can save energy by minimally changing occupants’ comfort requirements during some hours of the day.</p>",
    },

    {
        id : "trading_pricing_sdc",
        name : "Optimal Management of Local Energy Trading in Future Smart Microgrid via Pricing",
        coauthors : new Array(authorList.YWu, authorList.XQTan, authorList.LQian, authorList.DHKTsang),
        conference : "IEEE INFOCOM Workshop on Smart Data Pricing",
        pubinfo: "May 2015",
        pdf: "/documents/trading_pricing_sdc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>In this paper, we investigate optimal management of local energy trading in future smart micro-grid (SMG) via pricing. In SMG, energy consumers and providers, in addition to trading with utility company, can also perform local energy trading controlled by a local trading manager (LTM) for reaping benefits. We first quantify the benefits achieved by the consumers and providers from local trading and then formulate a two-layered optimization framework to investigate i) how the energy consumers and providers maximize their benefits via appropriately adjusting their local trading decisions in response to the LTM’s pricing, and ii) how the LTM adjusts its price in local market to benefit the consumers and providers as much as possible while guaranteeing a required gain for itself. We propose two algorithms to solve the layered optimization problem and perform numerical experiments with practical data set to validate the proposed local trading model and the algorithms.</p>",
    },

    {
        id : "queueing_bscs_sgc",
        name : "Queueing Network Models for Electric Vehicle Charging Station with Battery Swapping",
        coauthors : new Array(authorList.XQTan, authorList.BSun, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "2014",
        pdf: "/documents/queueing_bscs_sgc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>Electric Vehicle (EV) charging stations with battery swapping, as one promising energy supplement solution to cope with the increasing in EVs, demand a theoretical performance analysis framework. In this paper, we propose a queueing network model to serve as such a framework for battery swapping stations with a locally-charging mode. The model is a mixed queueing network with an open queue of EVs and a closed queue of batteries. Based on mild assumptions, we show the equilibrium equations for the queueing system, and the steady-state distribution is the solution of these finite equilibrium equations. In order to show the uniqueness of the solution, we prove the ergodicity of the system. Meanwhile, by leveraging the embedded Markov chain, we present an alternative yet much easier way to compute the steady-state distribution. Based on the steadystate distribution, various important performance indicators have been analytically determined. Simulation results demonstrate the validity of the queueing network model and reveal rich insights for the infrastructure planning of practical battery swapping stations.</p>",
    },


    {
        id : "trading_bess_sgc",
        name : "Optimal Energy Trading with Battery Energy Storage under Dynamic Pricing",
        coauthors : new Array(authorList.XQTan, authorList.YWu, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "2014",
        pdf: "/documents/trading_bess_sgc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>This paper proposes a mathematical framework for finding the optimal energy trading policy with battery energy storage (BES) under a dynamic pricing environment. We have previously shown that finding the arbitrage value of BES with known historical price data can be solved by iterative linear programming. The objective of the present paper is to show that, when the price information remains unknown, finding the optimal economic value of lifetime-constrained BES falls within the purview of stochastic shortest path problems, and the optimal policy presents the property of a threshold structure. To overcome the dimensionality difficulty, we propose a structure-based aggregation method, i.e., Layer and Group, to construct optimal trading policies. The elegance of this approach lies in its circumventing of the need for exhausted value iteration over the entire state space. Instead, the approach works in a hierarchical and parallel fashion, thus significantly speeding up the convergence to the optimality. Extensive experimental results show that this approach can dramatically reduce the computational complexity, thus contributing to the computationally tractable optimality without requiring any approximation. Numerical simulation also demonstrates the validity of the proposed framework, and various trading insights for practical BES systems have been formed.</p>",
    },


    {
        id : "operation_bscs_sgc",
        name : "Optimal Charging Operation of Battery Swapping Stations with QoS Guarantee",
        coauthors : new Array(authorList.BSun, authorList.XQTan, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "2014",
        pdf: "/documents/operation_bscs_sgc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>Electric Vehicle (EV) drivers have an urgent demand for fast battery refueling methods for long distance trip and emergency drive. A well-planned battery swapping station (BSS) network can be a promising solution to offer timely refueling services. However, an inappropriate battery recharging process in the BSS may not only violate the stabilization of the power grid by their large power consumption, but also increase the charging cost from the BSS operators’ point of view. In this paper, we aim to obtain the optimal charging policy to minimize the charging cost while ensuring the quality of service (QoS) of the BSS. A novel queueing network model is proposed to capture the operation nature for an individual BSS. Based on practical assumptions, we formulate the charging schedule problem as a stochastic control problem and achieve the optimal charging policy by dynamic programming. Monte Carlo simulation is used to evaluate the performance of different policies for both stationary and non-stationary EV arrival cases. Numerical results show the importance of determining the number of total batteries and charging outlets held in the BSS. Our work gives insight for the future infrastructure planning and operational management of BSS network.</p>",
    },


    {
        id : "coop_trading_ccc",
        name : "Cooperative Distributed Energy Generation and Energy Trading for Future Smart Grid",
        coauthors : new Array(authorList.YWu, authorList.XSun, authorList.XQTan, authorList.LMeng, authorList.LYu, authorList.WZSong, authorList.DHKTsang),
        conference : "Chinese Control Conference (CCC)",
        pubinfo: "July  2014",
        pdf: "/documents/coop_trading_ccc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>In this paper, we investigate the cooperative distributed energy generation and energy trading for future smart grid. In our model, a group of energy users, who are equipped with the capabilities of distributed energy generation, are allowed to trade energy in a cooperative manner with the goal to minimize their total energy-provisioning cost while meeting the local demand of each individual energy user. Moreover, each user also expects to benefit from the cooperative energy generation and trading with the others. Motivated by these objectives, we first jointly determine the optimal energy scheduling decisions for all energy users such that their total energy-provisioning cost can be minimized. Then, based on the optimal energy scheduling decisions, we further determine the optimal transaction costs associated with the users’ energy trading to ensure that each of them can positively benefit from the cooperation. Extensive numerical results are provided to show the advantages of the proposed cooperative energy generation and trading model as well as our proposed algorithms to achieve the optimal solutions.</p>",
    },


    {
        id : "downlink_sheduling_qhine",
        name : "The Optimal User Scheduling for LTE-A Downlink with Heterogeneous Traffic Types",
        coauthors : new Array(authorList.Niafar, authorList.XQTan, authorList.DHKTsang),
        conference : "Qshine",
        pubinfo: "July  2014",
        pdf: "/documents/downlink_sheduling_qhine.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        note: "invited paper",
        //topic: "energy",
        paperAbstract : "<p>The current mobile broadband market experiences major growth in data demand and average revenue loss. To remain profitable from the perspective of a service provider (SP), one needs to maximize revenue as much as possible by making subscribers satisfied within the limited budget. On the other hand, traffic demands are moving toward supporting the wide range of heterogeneous services with different quality of service (QoS) requirements. In this paper, we consider packet scheduling problem in the 4th generation partnership project (3GPP) long term evolution-advanced (LTE-A) system to optimize the long-term average revenue of SPs subject to differential QoS constraints for heterogeneous traffic demands. The QoS-constrained control problem is first formulated as a constrained Markov decision process (CMDP) problem, of which the optimal control policy is achieved by utilizing the channel and queue information simultaneously. Subsequently, based on the proposed CMDP problem, we further formulated an optimization problem which stochastically grantees the QoS through a chance constraint. To make the proposed chance-constraint programming problem computationally tractable, we use Bernstein approximation technique to analytically approximate the chance constraint as a convex conservative constraint. Finally, the proposed scheduling framework and solution methods are validated via numerical simulation.</p>",
    },


    {
        id : "lifetime_analysis_bess_sgc",
        name : "Economic Analysis of Lifetime-Constrained Battery Storage under Dynamic Pricing",
        coauthors : new Array(authorList.XQTan, authorList.YWu, authorList.DHKTsang),
        conference : "IEEE SmartGridComm",
        pubinfo: "2013",
        pdf: "/documents/lifetime_analysis_bess_sgc.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        //topic: "energy",
        paperAbstract : "<p>Battery Energy Storage System (BESS), as one type of the storage systems, serves as a particularly important role for future power grid systems. However, since both the capital cost of BESS and the potential economic value vary dramatically for large-scale systems, the total cost induced by BESS remains a major source of uncertainty for potential power system operators when the limited lifetime of BESS is taken into account. Therefore, appropriate configuration and operation of BESS are of paramount importance for its deployments in practice. In this paper, we propose a novel model for BESS that attempts to capture the fact of limited lifetime and to exploit the potential economic value. We develop a finite horizon optimization model for BESS operators with unknown stopping-time. The stoppingtime is determined by the policy itself, which makes the problem technically challenging. We first propose an algorithm called Forward-iteration of relaxed-Linear Programming (FirLP), which solves the problem by iterating on every time instance and achieves the optimality. Subsequently, we observe that some time instances are not necessary to be iterated on. Thus, we propose Jumpiteration of relaxed-Linear Programming (JirLP). By utilizing a well defined jump step, we can avoid exhaustive iteration on those unnecessary time instances. We examine our model and algorithms with the real price data. The computational results further validate our model, and shows that our proposed JirLP can achieve optimality and reduce the unnecessary iterations by 50% in comparison with the FirLP.</p>",
    },
);