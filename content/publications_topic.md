---
title: PUBLICATIONS (By Topic)
author:
--- 

> Sort [[by type]](/publications_type) or [[by year]](/publications_year) or [[by topic]](/publications_topic) (some papers are listed under more than one topic)

> By-year links: [2020+](/publications_year/#2020) | [2019](/publications_year/#2019) | [2018](/publications_year/#2018) | [2017](/publications_year/#2017) | [2016](/publications_year/#2016) | [2015](/publications_year/#2015) | [2014](/publications_year/#2014) | [2013](/publications_year/#2013)

> By-topic links: [Online Algorithms/Mechanisms](/publications_topic/#online-algorithms) |  [Computer Systems & Networks](/publications_topic/#networks) | [Energy Systems](/publications_topic/#energy) 


<a id="online-algorithms"></a> 

### <span style="color:darkred">`Online Algorithms/Mechanisms`</span>

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
