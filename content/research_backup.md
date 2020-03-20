---
title: Research
description: This is the abstract
---

<a id="research_overview"></a>

<img src="/img/overview.png" style="max-width:30%; min-width:300px; float: right; margin:10px 20px" alt="overview"/>

Many network-based applications and services are carried out by providing resources to systems of interacting agents.  Managing these systems faces two separate, but interrelated, challenges. First, in any system, a good decision, whether that be defined as an algorithm for resource allocation in cloud computing, a strategy for traffic routing in communication networks, or a policy for renewable energy integration in smart grids, are often computed by solving some explicit or implicit optimization problems with incomplete future information. Thus,  performing efficient _online decision-making under uncertainty_ is, in many cases, not just an advantage, but a necessity. Second, and often more difficult, the outcome of a decision-making process often depends on a collective behavior of multiple agents with divergent or even competing interests (and thus, not directly controllable by the system). As a result, we must design appropriate incentives, based on _economic and game theoretic-models_, to encourage agent interactions towards a desired direction; otherwise, the  decisions cannot be implemented with a guaranteed efficiency and rationality.

To tackle these two challenges, my research focuses both on developing analytical techniques in [**online algorithms**](/research/#OA), [**algorithmic game theory**](/research/#AGT), and [**mechanism design**](/research/#ML), and applying these techniques to improve the economic and computational efficiency of networked systems emerging from application domains such as [**cloud computing**](/research/#computing), [**computer networks**](/research/#communication), and [**smart grid**](/research/#energy). For more details, please see my research description below by topics. 



[commet]: # (with a focus on applications in [**cloud computing**](/research/#cloud_computing), [**network economics**](/research/#networking), and [**smart grid**](/research/#smart_grid). In particular, a large part of my current research focuses on [**online algorithms**](/research/#online_algorithms) and [**algorithmic game theory**](/research/#mechanism_design). The goal is to develop algorithms and incentives for efficient online decision-making in managing networked systems of interacting and possibly self-interested agents. ) 


[comment]: # (I believe that solutions to alleviate or resolve these research challenges provide insights into how to tackle many societal challenges such as computing efficiency, cyber security, energy sustainability, traffic congestion, and climate change, etc. e.g., random job arrivals in cloud computing or volatile renewable energy generation in energy systems. The design of economic incentives, termed as mechanism design, sits at the intersection of artificial intelligence and economics, and has led to transformative applications in various domains such as online advertising and on-demand service platforms. My research)

[comment]: # (For examples, how incentives influence the behavior of self-interested agents, and thus the peformance of online decisions? how online decisions influence the outcome of incentives if there exist zero knowledge of future information? )


<a id="OA"></a>  

---

##  Online Algorithms

<ul class=circle>
            <script>
                var i;
                for (i = 0; i < papers_journal.length; i++) {
                    if (papers_journal[i].topic.search("algorithms") >= 0) {
                        document.write("<li class=paper>");
                        printPaper(papers_journal[i], "algorithms");
                        document.write("</li>");
                    }
                }
            </script>
</ul>



<a id="AGT"></a>

---

##  Algorithmic Game Theory

<ul class=circle>
            <script>
                var i;
                for (i = 0; i < papers_journal.length; i++) {
                    if (papers_journal[i].topic.search("mechanism") >= 0) {
                        document.write("<li class=paper>");
                        printPaper(papers_journal[i], "mechanism");
                        document.write("</li>");
                    }
                }
            </script>
</ul>


---
<a id="networking"></a> 

## Computer Networks

<ul class=circle>
            <script>
                var i;
                for (i = 0; i < papers_journal.length; i++) {
                    if (papers_journal[i].topic.search("network") >= 0) {
                        document.write("<li class=paper>");
                        printPaper(papers_journal[i], "network");
                        document.write("</li>");
                    }
                }
            </script>
</ul>


<a id="energy"></a>

---
<a id="computing"></a> 

## Cloud Computing

<ul class=circle>
            <script>
                var i;
                for (i = 0; i < papers_journal.length; i++) {
                    if (papers_journal[i].topic.search("cloud") >= 0) {
                        document.write("<li class=paper>");
                        printPaper(papers_journal[i], "cloud");
                        document.write("</li>");
                    }
                }
            </script>
</ul>

---

##  Smart Grid

<ul class=circle>
            <script>
                var i;
                for (i = 0; i < papers_journal.length; i++) {
                    if (papers_journal[i].topic.search("energy") >= 0) {
                        document.write("<li class=paper>");
                        printPaper(papers_journal[i], "energy");
                        document.write("</li>");
                    }
                }
            </script>
</ul>