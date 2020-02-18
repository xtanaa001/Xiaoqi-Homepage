function printAuthor(author) {
    if (author.web != "#") document.write("<a href=\""+author.web+"\">"+author.name+"</a>");
    else document.write(""+author.name+"");
};

function printPaper(paper, type){
    document.write("<div class=title display=block style=\"cursor:pointer\" onclick=\"return toggleAbstract(\'abs-" + paper.id + "-" + type + "\');\">");
    document.write(paper.name);
    document.writeln("</b></div>");
    if (typeof paper.coauthors != "undefined"){
        var i;
        //document.write("<div>joint work with ");
        document.write("<div>");
        for (i = 0; i < paper.coauthors.length; i++){
            printAuthor(paper.coauthors[i]);
            if (i == paper.coauthors.length - 2)
                document.write(", and ");
            else if (i != paper.coauthors.length - 1) document.write(", ");
        }
        document.writeln("</div>");
    }
    if (paper.conference == "Preprint") document.writeln("<i>Preprint</i>");
    else if (paper.conference == "Dissertation") document.writeln("<i>Ph.D. Dissertation</i>");
    //else
    //    document.writeln("In <i>" + paper.conference + "</i>");

    if (typeof paper.note == "string") document.write("&emsp;<i><b>("+paper.note+")</b></i>");
    
    if (typeof paper.confVersion == "string") document.write("&emsp;<a href=\""+paper.confVersion+"\">[pdf]</a>"); 
    
    if (paper.journal == "Preprint") document.writeln("<i>Preprint</i>");
    else 
        document.write("<i>"+paper.journal+"</i>");

    if (typeof paper.pubinfo == "string") document.write(", "+paper.pubinfo+".");
    
    if (typeof paper.publisher == "string") document.write("&emsp;<a href=\""+paper.publisher+"\">[Publisher Version]</a>");
    
    if (typeof paper.arxiv == "string") document.write("&emsp;<a href=\""+paper.arxiv+"\">[Report in arXiv]</a>");
    
    //if (typeof paper.slides == "string") document.write("&emsp;<a href=\""+paper.slides+"\">[slides]</a>");
    if (typeof paper.talk == "string") document.write("&emsp;<a href=\""+paper.talk+"\">[talk]</a>");
    if (typeof paper.paperAbstract == "string") {
        document.writeln("<div class=\"abstract\" id=\'abs-" + paper.id + "-" + type + "\'>");
        document.writeln("<p><b>Abstract</b></p>");
        document.writeln(paper.paperAbstract);
        document.writeln("</div>");
    };
};