---
title: PUBLICATIONS (By Type)
--- 

>
## <span style="color:#00204E"> RESEARCH </span>

> 
My research strives to **_navigate fundamental relationships between <span style="color:#00204e">algorithms</span>, <span style="color:#00204e">incentives</span>, and <span style="color:#00204e">performance</span> in the design and management of networked systems_**. I develop new theory and methodologies  in <span style="color:#E78100">online algorithms</span> (i.e., algorithm design for optimization/learning problems without having the entire input/data available from the start) and <span style="color:#E78100">mechanism design</span> (i.e., design of incentive-aware algorithms in settings when there exist strategic interactions between self-interested agents), and focus on applying these methodologies to advance the theory and practice of performance modeling, analysis, and optimization of networked systems in various domains, ranging from <span style="color:#E78100">computer systems and networks</span> (e.g., cloud computing and network economics)  to <span style="color:#E78100">energy systems</span> (e.g., smart grid and the urban energy-transport nexus). My research features interdisciplinarity and mathematical rigor, utilizing and contributing to algorithms and complexity, economics and computation, stochastic modeling and analysis, artificial intelligence (esp. multi-agent systems), and machine learning. For more details, see my publications below [by type](/publications_type) or [by year](/publications_year).

[comment]: # (> I study the interplay between online algorithms, mechanism design, and machine learning, with applications to computing and networked systems in various domains, ranging from cloud computing to energy and transportation systems. Broadly, my research strives to  address systems challenges at the intersection of computation and sustainability. For more details, see my publications below [[by type]](/publications_type) or [[by year]](/publications_year).)


> <span style="color:#00204E">**By-type Quick Links**</span>: [Preprints](/publications_type/#preprints) | [Journal Papers](/publications_type/#journal) | [Conference Papers](/publications_type/#conference)

> <span style="color:#00204E">**By-year Quick Links**</span>: [2020+](/publications_year/#2020) | [2019](/publications_year/#2019) | [2018](/publications_year/#2018) | [2017](/publications_year/#2017) | [2016](/publications_year/#2016) | [2015](/publications_year/#2015) | [2014](/publications_year/#2014) | [2013](/publications_year/#2013)



### <a id="preprints"></a> <span style="color:#E78100">`PREPRINTS`</span>

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


### <a id="journal"></a> <span style="color:#E78100">`JOURNAL PAPERS`</span>

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



### <a id="conference"></a> <span style="color:#E78100">`CONFERENCE PAPERS`</span>
 
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