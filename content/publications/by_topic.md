---
title: PUBLICATIONS (By Topic)
author:
--- 

>
## <span style="color:#00204E"> RESEARCH </span>

> 
My research strives to _navigate fundamental relationships between <span style="color:#00204e">**algorithms**</span>, <span style="color:#00204e">**incentives**</span>, and <span style="color:#00204e">**performance**</span> in the design and management of networked systems_. I develop new theory and methodologies in <span style="color:#E78100">online algorithms</span> (i.e., algorithm design for optimization/learning problems without having the entire input/data available from the start) and <span style="color:#E78100">mechanism design</span> (i.e., design of incentive-aware algorithms in settings when there exist strategic interactions between self-interested agents), and focus on applying these methodologies to advance the design of networked systems, markets, and platforms in various domains, ranging from <span style="color:#E78100">computer systems and networks</span> (e.g., cloud computing and network economics)  to <span style="color:#E78100">energy systems</span> (e.g., smart grid and the urban energy-transport nexus). My research features interdisciplinarity and mathematical rigor, utilizing and contributing to algorithms and complexity, economics and computation, performance  evaluation, and artificial intelligence (esp. multi-agent systems).


> Sort [[by type]](/publications_type) or [[by year]](/publications_year) or [[by topic]](/publications_topic) (some papers are listed under more than one topic)

> By-year links: [2020+](/publications_year/#2020) | [2019](/publications_year/#2019) | [2018](/publications_year/#2018) | [2017](/publications_year/#2017) | [2016](/publications_year/#2016) | [2015](/publications_year/#2015) | [2014](/publications_year/#2014) | [2013](/publications_year/#2013)

> By-topic links: [Online Algorithms/Mechanisms](/publications_topic/#online-algorithms) |  [Computer Systems & Networks](/publications_topic/#networks) | [Energy Systems](/publications_topic/#energy) 


<a id="online-algorithms"></a> 

### <span style="color:darkred">`Online Algorithms/Mechanisms`</span>

<blockquote>
<ul class=circle>
        <script>
            var i;
            for (i = 0; i < papers_full.length; i++) {
                if (papers_full[i].topic.search("O") >= 0) {
                    document.write("<li class=paper>");
                    printPaper(papers_full[i], "O");
                    document.write("</li>");
                }
            }
        </script>
</ul>
</blockquote>

<a id="networks"></a> 

### <span style="color:darkred">`Computer Systems & Networks`</span>
<ul class=circle>
        <script>
            var i;
            for (i = 0; i < papers_full.length; i++) {
                if (papers_full[i].topic.search("N") >= 0) {
                    document.write("<li class=paper>");
                    printPaper(papers_full[i], "N");
                    document.write("</li>");
                }
            }
        </script>
</ul>


<a id="energy"></a> 

### <span style="color:darkred">`Energy & Transportation Systems`</span>
<ul class=circle>
        <script>
            var i;
            for (i = 0; i < papers_full.length; i++) {
            if (papers_full[i].topic.search("E") >= 0) {
                    document.write("<li class=paper>");
                    printPaper(papers_full[i], "E");
                    document.write("</li>");
                }
            }
        </script>
</ul>
