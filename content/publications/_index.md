---
title: Publications
---

Sort [[by year]](/publications/by_year) or [[by type]](/publications/by_type) 

<span style="color:#00204e">By-type quick links</span>: [Preprints](/publications/by_type/#preprints) | [Conference Papers](/publications/by_type/#conference) | [Journal Papers](/publications/by_type/#journal)


<span style="color:#00204e">By-year quick links</span>: [2021+](/publications/by_year/#2021) | [2020](/publications/by_year/#2020) | [2019](/publications/by_year/#2019) | [2018](/publications/by_year/#2018) | [2017](/publications/by_year/#2017) | [2016](/publications/by_year/#2016) | [2015](/publications/by_year/#2015) | [2014](/publications/by_year/#2014) | [2013](/publications/by_year/#2013)

<span style="color:#00204e">External links</span>: [Google Scholar](https://scholar.google.com/citations?user=drR_WcAAAAAJ&hl=en&sortby=pubdate) | [DBLP](https://dblp.org/pid/139/4363.html)



## <a id="preprints"></a> `Preprints`

<blockquote>
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
</blockquote>



## <a id="conference"></a> `Conference Papers`

<blockquote>
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
</blockquote>


## <a id="journal"></a> `Journal Papers`

<blockquote>
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
</blockquote>