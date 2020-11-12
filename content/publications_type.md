---
title: PUBLICATIONS (By Type)
--- 


> Sort [[by type]](/publications_type) or [[by year]](/publications_year) or [[by topic]](/publications_topic)

> By-year links: [2020+](/publications_year/#2020) | [2019](/publications_year/#2019) | [2018](/publications_year/#2018) | [2017](/publications_year/#2017) | [2016](/publications_year/#2016) | [2015](/publications_year/#2015) | [2014](/publications_year/#2014) | [2013](/publications_year/#2013)

> By-topic links: [Online Algorithms/Mechanisms](/publications_topic/#online-algorithms) |  [Computer Systems & Networks](/publications_topic/#networks) | [Energy & Transportation Systems](/publications_topic/#energy)


### <span style="color:darkred">`Preprints`</span>

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


### <span style="color:darkred">`Journal Papers`</span>

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



### <span style="color:darkred">`Conference Papers`</span>
 
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