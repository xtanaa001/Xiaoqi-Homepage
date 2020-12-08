---
title: PUBLICATIONS (By Type)
--- 

> My research focuses on <span style="color:darkblue">the design of online algorithms and mechanisms</span>, and <span style="color:darkblue">the interplay between mechanism design and machine learning</span>, with applications to networked systems in various domains, ranging from <span style="color:darkblue">cloud computing</span> to <span style="color:darkblue">Internet-of-Things</span>, <span style="color:darkblue">energy systems</span>, and <span style="color:darkblue">urban transportation systems</span>. These systems can all be modeled as networks of interacting agents, sharing and competing limited resources in the presence of stochastic dynamics and strategic behaviors. My goal is to understand fundamental performance limits of such networked systems, and develop rigorous models, algorithms, and mechanisms, with provable guarantees, that can navigate key design tradeoffs in these systems. My research has been interdisciplinary in nature, spanning various topics in computer science, electrical engineering, operations research, and economics. For more details, see my publications below [[by type]](/publications_type) or [[by year]](/publications_year).


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