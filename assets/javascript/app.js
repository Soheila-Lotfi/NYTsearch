
  function buildQueryUrl(){

    var queryUrl="https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    var queryParams={"api-key":"qwoC4AFp6dTecyJQH6IGVYaHWmZBUPhI"};
    queryParams.q=$("#search-term").val().trim();
    queryParams.begin_date=$("#start-year").val().trim()+"0101";
    queryParams.end_date=$("#end-year").val().trim()+"0101";

    return queryUrl+$.param(queryParams);
    console.log(queryParams)
   }

$("#searchbtn").click(function(event){
    event.preventDefault();
    // var searchTerm= $("#search-term").val().trim();
    // var startYear=$("#start-year").val().trim();
    // var endYear=$("#end-year").val().trim();
     var numberofRecordes=$("#numberofrecords").val().trim();
    // console.log(numberofRecordes);
    // var queryUrl= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&begin_date="+startYear+"0101&end_date="+endYear+"0101&api-key=qwoC4AFp6dTecyJQH6IGVYaHWmZBUPhI";
    
    //build query url using @param - The param() method creates a serialized representation
    // of an array or an object.The serialized values can be used in the URL query string when
    // making an AJAX request.
  var queryUrl=buildQueryUrl();
  console.log(queryUrl)
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


