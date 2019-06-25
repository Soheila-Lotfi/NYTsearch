
$("#searchbtn").click(function(event){
    event.preventDefault();
    var searchTerm= $("#search-term").val().trim();
    var startYear=$("#start-year").val().trim();
    var endYear=$("#end-year").val().trim();
    var numberofRecordes=$("#numberofrecords").val().trim();
    console.log(numberofRecordes);
    var queryUrl= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&begin_date="+startYear+"0101&end_date="+endYear+"0101&api-key=qwoC4AFp6dTecyJQH6IGVYaHWmZBUPhI";
    
    $.ajax({
        url: queryUrl,
        method:"GET"
    }).then(function(NYTData){
        console.log(queryUrl);

        for (i=0;i<parseInt(numberofRecordes);i++){
            console.log(5);
            console.log(numberofRecordes);
            var article=NYTData.response.docs[i]
            console.log(article);
            var headline=$("<p>").css("font-weight" ,"bold").text(article.headline.main);

            var byLine=$("<p>").text(article.byline.original);
            
            var sectionName=$("<p>").text(article.section_name);

            var punDate=$("<p>").text(article.pub_date);

            var webUrl=$("<a>").attr("href", article.web_url).text (article.web_url);

            $("#show-article-here").append(headline,byLine,sectionName,punDate,webUrl);

        };
        
        
            
    })

});


