
$("#searchbtn").click(function(event){
    event.preventDefault();
    // var search= $("#search-term").val();
 var searchTerm= $("#search-term").val();
 var startYear=$("#start-year").val();
 var endYear=$("#end-year").val();
 var numberofRecordes=$("#numberofrecords").val();
 
 
    console.log(searchTerm);
    var queryUrl= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&begin_date="+startYear+"0101&end_date="+endYear+"0101&api-key=qwoC4AFp6dTecyJQH6IGVYaHWmZBUPhI";

$.ajax({
    url: queryUrl,
    method:"GET"
}).then(function(response){

        console.log(queryUrl);
        
})

});


