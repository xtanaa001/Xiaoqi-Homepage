---
title: Publications
---

Names with [clickable links](/people) indicate students under my (co-)supervision; **\*** denotes equal contribution. 

---

### `Preprints`

<ul class=circle>
        <script>
            var i;
            for (i = 0; i < papers_full.length; i++) {
                if (papers_full[i].year == "Preprint") {
                    document.write("<li class=paper>");
                    printPaper(papers_full[i], "g");
                    document.write("</li>");
                }
            }
        </script>
</ul>

---

### `2025 + Forthcoming`

<blockquote>
<ul class=circle>
    <script>
            var i;
            for (i = 0; i < papers_full.length; i++) {
                if (papers_full[i].year == "2025") {
                    document.write("<li class=paper>");
                    printPaper(papers_full[i], "g");
                    document.write("</li>");
                }
            }
    </script>
</ul>
</blockquote>

### `2024`

<blockquote>
<ul class=circle>
        <script>
            var i;
            for (i = 0; i < papers_full.length; i++) {
                if (papers_full[i].year == "2024") {
                    document.write("<li class=paper>");
                    printPaper(papers_full[i], "g");
                    document.write("</li>");
                }
            }
        </script>
</ul>
</blockquote>


### `2023`

<blockquote>
<ul class=circle>
       <script>
            var i;
            for (i = 0; i < papers_full.length; i++) {
                if (papers_full[i].year == "2023") {
                    document.write("<li class=paper>");
                    printPaper(papers_full[i], "g");
                    document.write("</li>");
                }
            }
        </script>
</ul>
</blockquote>


### `2022`

<blockquote>
<ul class=circle>
        <script>
            var i;
            for (i = 0; i < papers_full.length; i++) {
                if (papers_full[i].year == "2022") {
                    document.write("<li class=paper>");
                    printPaper(papers_full[i], "g");
                    document.write("</li>");
                }
            }
        </script>
</ul>
</blockquote>


### `2021-`

<blockquote>

<span style="color:gray;font-size:1em;"> Selected publications before 2021 (Complete list: [Google Scholar](https://scholar.google.com/citations?user=drR_WcAAAAAJ&hl=en&sortby=pubdate) | [DBLP](https://dblp.org/pid/139/4363.html)) </span>

<ul class=circle>
        <script>
            var i;
            for (i = 0; i < papers_full.length; i++) {
            if (papers_full[i].selected == "yes") {
                document.write("<li class=paper>");
                printPaper(papers_full[i], "E");
                document.write("</li>");
            }
        }
        </script>
</ul>

</blockquote>