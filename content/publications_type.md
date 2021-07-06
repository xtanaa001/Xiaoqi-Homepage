---
title: Publications (By Type)
--- 


[comment]: # (> I study the interplay between online algorithms, mechanism design, and machine learning, with applications to computing and networked systems in various domains, ranging from cloud computing to energy and transportation systems. Broadly, my research strives to  address systems challenges at the intersection of computation and sustainability. For more details, see my publications below [[by type]](/publications_type) or [[by year]](/publications_year).)

# Publications

Sort [[by year]](/publications_year) or [[by type]](/publications_type) 


<span style="color:#00204e">**`By-type quick links`**</span>: [Preprints](/publications_type/#preprints) | [Conference Papers](/publications_type/#conference) | [Journal Papers](/publications_type/#journal) 


<span style="color:#00204e">**`By-year quick links`**</span>: [2021+](/publications_year/#2021) | [2020](/publications_year/#2020) | [2019](/publications_year/#2019) | [2018](/publications_year/#2018) | [2017](/publications_year/#2017) | [2016](/publications_year/#2016) | [2015](/publications_year/#2015) | [2014](/publications_year/#2014) | [2013](/publications_year/#2013)


<span style="color:#00204e">**`External links`**</span>: [Google Scholar](https://scholar.google.com/citations?user=drR_WcAAAAAJ&hl=en&sortby=pubdate) | [DBLP](https://dblp.org/pid/139/4363.html)


---

## <a id="preprints"></a> Preprints

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


\


## <a id="conference"></a> Conference Papers

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

\


## <a id="journal"></a> Journal Papers

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