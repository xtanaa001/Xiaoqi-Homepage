---
title: Publications
--- 

## Journal Papers

<ul class=circle>
        <script>
            var i;
            for (i = 0; i < papers_journal.length; i++) {
                if (papers_journal[i].journal == "Preprint") {
                    document.write("<li class=paper>");
                    printPaper(papers_journal[i], "g");
                    document.write("</li>");
                }
            }
        </script>
</ul>

<ol reversed>
        <script>
            var i;
            for (i = 0; i < papers_journal.length; i++) {
                if (papers_journal[i].journal != "Preprint") {
                    document.write("<li class=paper>");
                    printPaper(papers_journal[i], "g");
                    document.write("</li>");
                }
            }
        </script>
</ol>


## Conference Papers


<ol reversed>
        <script>
            var i;
            for (i = 0; i < papers_conference.length; i++) {
                if (papers_conference[i].conference != "Preprint") {
                    document.write("<li class=paper>");
                    printPaper(papers_conference[i], "g");
                    document.write("</li>");
                }
            }
        </script>
</ol>