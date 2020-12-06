---
title: PUBLICATIONS (By Type)
--- 

> My research strives to  address systems challenges at the intersection of _computation_ and _sustainability_. Specifically, I study the interplay between online algorithms, mechanism design, and machine learning, with applications to computing and networked systems in various domains, ranging from cloud computing to IoT, energy, and transportation.


> For more details, see my publications below [[by type]](/publications_type) or [[by year]](/publications_year)

> By-type quick links: [Preprints](/publications_type/#preprints) | [Journal Papers](/publications_type/#journal) | [Conference Papers](/publications_type/#conference)


> By-year quick links: [2020+](/publications_year/#2020) | [2019](/publications_year/#2019) | [2018](/publications_year/#2018) | [2017](/publications_year/#2017) | [2016](/publications_year/#2016) | [2015](/publications_year/#2015) | [2014](/publications_year/#2014) | [2013](/publications_year/#2013)


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