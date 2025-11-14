function printAuthor(author) {
    // if (author.web != "#") document.write("<a href=\""+author.web+"\" target=\"_blank\" >"+author.name+"</a>");
    // else 
    document.write(""+author.name+"");
};

function printPaper(paper, type){
    document.write("<div class=title display=block style=\"cursor:pointer\" onclick=\"return toggleAbstract(\'abs-" + paper.id + "-" + type + "\');\"><b>");
    document.write(paper.name);
    document.writeln("</b></div>");
    // if (typeof paper.coauthors != "undefined"){
    //     var i;
    //     //document.write("<div>joint work with ");
    //     document.write("<div>");
    //     for (i = 0; i < paper.coauthors.length; i++){
    //         printAuthor(paper.coauthors[i]);
    //         if (i == paper.coauthors.length - 2)
    //             document.write(", and ");
    //         else if (i != paper.coauthors.length - 1) document.write(", ");
    //     }
    //     document.writeln("</div>");
    // }
    if (typeof paper.coauthors != "undefined"){
        var i;
        //document.write("<div>joint work with ");
        document.write("<div>");
        for (i = 0; i < paper.coauthors.length; i++){
            printAuthor(paper.coauthors[i]);
            if (typeof paper.equalContribution != "undefined" && i < paper.equalContribution.length){
                    document.write("*");
                } // print * for equal contributions
            if (i == paper.coauthors.length - 2)
                document.write(", and ");
            else if (i != paper.coauthors.length - 1) document.write(", ");
        }
        document.writeln("</div>");
    }

    //if (paper.conference == "Preprint") document.writeln("<i>Preprint</i>");
    //else

    if (typeof paper.journal == "string")  
        document.write("<span style=\"color:#7BA4DB;font-family:Optima; font-style:normal; font-weight: bold; 0deg;font-size: 1.1em\">"+paper.journal+"<\/span>");
    
    if (typeof paper.pubinfo == "string") 
        if (typeof paper.conference == "string" || typeof paper.workshop == "string") 
            document.write(", "+paper.pubinfo+".<br>"); // add a new line for conference version
        else 
            document.write(", "+paper.pubinfo+".");
            
    if (typeof paper.conference == "string") 
        document.write("<span style=\"color:#7BA4DB;font-family:Optima; font-style:normal; font-weight: bold; 0deg;font-size: 1.1em\">"+paper.conference+"<\/span>");
    
    if (typeof paper.workshop == "string") 
        document.write("<span style=\"color:black;font-family:Optima; font-style:normal; font-weight: normal; 0deg;font-size: 1.1em\">"+paper.workshop+"<\/span>");
    
    if (typeof paper.pdf == "string") 
        document.write("&emsp;<a href=\" " +paper.pdf+ " \" target=\"_blank\" >[PDF]</a>");
    
    if (typeof paper.confVersion == "string") 
        document.write("&emsp;<a href=\""+paper.confVersion+"\" target=\"_blank\" >[Conference Version]</a>"); 

    if (typeof paper.arxiv == "string") 
        document.write("&emsp;<a href=\""+paper.arxiv+"\" target=\"_blank\" >[arXiv]</a>");

    if (typeof paper.short == "string") 
        document.write("&emsp;<a href=\""+paper.short+"\" target=\"_blank\" >[Workshop Version]</a>");

    if (typeof paper.report == "string") 
        document.write("&emsp;<a href=\""+paper.report+"\" target=\"_blank\" >[Technical Report]</a>");
    
    if (typeof paper.talk == "string") 
        document.write("&emsp;<a href=\" " +paper.talk+ " \" target=\"_blank\" >[Slides]</a>");

    if (typeof paper.video == "string") 
        document.write("&emsp;<a href=\" " +paper.video+ " \" target=\"_blank\" >[Video]</a>");

    if (typeof paper.prize == "string") 
        document.write("<span style=\"color:red;font-family:Optima;font-size: 1em\">&emsp;<b>("+paper.prize+")</b><\/span>");
        //document.write("&emsp;(<b>"+paper.note+"</b>)");

    if (typeof paper.note == "string") 
        document.write("<span style=\"color:gray;font-family:Optima;font-size: 1em\">&emsp;("+paper.note+")<\/span>");
        //document.write("&emsp;(<b>"+paper.note+"</b>)");
        
    
    //if (typeof paper.slides == "string") document.write("&emsp;<a href=\""+paper.slides+"\">[slides]</a>");
    //if (typeof paper.talk == "string") document.write("&emsp;<a href=\""+paper.talk+"\">[talk]</a>");
    
    if (typeof paper.paperAbstract == "string") {
        document.writeln("<div class=\"abstract\" id=\'abs-" + paper.id + "-" + type + "\'>");
        document.writeln("<p><b>Abstract</b></p>");
        document.writeln(paper.paperAbstract);
        document.writeln("</div>");
    };
};


