
  function buildQueryUrl(){

    var queryUrl="https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    var queryParams={"api-key":"qwoC4AFp6dTecyJQH6IGVYaHWmZBUPhI"};
    queryParams.q=$("#search-term").val().trim();

    var startYear= $("#start-year").val().trim();
    if (startYear){
        queryParams.begin_date=startYear+"0101";
    }
    var endYear=$("#end-year").val().trim();
    if (endYear){
        queryParams.end_date=endYear+"0101";
    }
    
    return queryUrl+$.param(queryParams);
    console.log(queryParams)
   }

$("#searchbtn").click(function(event){
    event.preventDefault();

    var numberofRecordes=$("#numberofrecords").val().trim();
    var queryUrl=buildQueryUrl();
    $.ajax({
        url: queryUrl,
        method:"GET"
    }).then(function(NYTData){
        console.log(queryUrl);

        for (i=0;i<parseInt(numberofRecordes);i++){

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


$("#clearbtn").click(function(event){

    event.preventDefault();
    $("#show-article-here").empty();

});
   



