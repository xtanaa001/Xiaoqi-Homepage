---
title: PUBLICATIONS (By Type)
--- 

> 
<span style="color:#00204E">**Research Summary**</span>: My research focuses on the design of <span style="color:#00204E">Online Algorithms and Mechanisms</span>, and <span style="color:#00204E">the interplay between Mechanism Design and Machine Learning</span>, with applications to networked systems in various domains, ranging from <span style="color:#00204E">Cloud Computing</span> to <span style="color:#00204E">Internet of Things</span>, Network Economics,  <span style="color:#00204E">Energy Systems</span>, and <span style="color:#00204E">Transportation Systems</span>. These systems can all be modeled as networks of interacting agents, sharing and competing limited resources in the presence of stochastic dynamics and strategic behaviors. My goal is to understand fundamental performance limits of such networked systems, and develop rigorous models, algorithms, and markets, with provable guarantees, that can navigate key design tradeoffs in these systems. My research spans various topics in computer science, electrical engineering, and operations research, using mathematical tools from optimization theory, economics and computation, artificial intelligence (esp. multi-agent systems), machine learning, network science, applied probability, and queueing theory. For more details, see my publications below [by type](/publications_type) or [by year](/publications_year).

[comment]: # (> I study the interplay between online algorithms, mechanism design, and machine learning, with applications to computing and networked systems in various domains, ranging from cloud computing to energy and transportation systems. Broadly, my research strives to  address systems challenges at the intersection of computation and sustainability. For more details, see my publications below [[by type]](/publications_type) or [[by year]](/publications_year).)

\

> <span style="color:#00204E">**By-type Quick Links**</span>: [Preprints](/publications_type/#preprints) | [Journal Papers](/publications_type/#journal) | [Conference Papers](/publications_type/#conference)

> <span style="color:#00204E">**By-year Quick Links**</span>: [2020+](/publications_year/#2020) | [2019](/publications_year/#2019) | [2018](/publications_year/#2018) | [2017](/publications_year/#2017) | [2016](/publications_year/#2016) | [2015](/publications_year/#2015) | [2014](/publications_year/#2014) | [2013](/publications_year/#2013)


---

### <a id="preprints"></a> <span style="color:#BB133E">`PREPRINTS`</span>

<ul class=circle>
        <script>
            var i;
            for (i = 0; i < papers_full.length; i++) {
                if (papers_full[i].journal == "Preprint") {
                    document.write("<li class=paper>");
                    printPaper(papers_full[i], "g");
                    document.write("</li>");
                }
            }
        </script>
</ul>


### <a id="journal"></a> <span style="color:#BB133E">`JOURNAL PAPERS`</span>

<ol reversed>
        <script>
            var i;
            for (i = 0; i < papers_full.length; i++) {
                if (typeof papers_full[i].journal == "string") 
                    if (papers_full[i].journal != "Preprint") {
                        document.write("<li class=paper>");
                        printPaper(papers_full[i], "g");
                        document.write("</li>");
                    }
            }
        </script>
</ol>



### <a id="conference"></a> <span style="color:#BB133E">`CONFERENCE PAPERS`</span>
 
<ol reversed>
        <script>
            var i;
            for (i = 0; i < papers_full.length; i++) {
                if (typeof papers_full[i].conference == "string") 
                    if (papers_full[i].conference != "") {
                        document.write("<li class=paper>");
                        printPaper(papers_full[i], "g");
                        document.write("</li>");
                    }
            }
        </script>
</ol>