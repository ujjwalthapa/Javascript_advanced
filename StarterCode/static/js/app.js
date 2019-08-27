// from data.js
var tableData = data;

window.onload = function() {onPageLoad();}

function filterRecords(val) {

  var inputDate = Date.parse(val);

  if(isNaN(inputDate)) {
    alert("Enter a valid date (in MM/DD/YYYY format)");
    return;
  }
  var formattedTable="";
  data.forEach(
    function(data1){
        if(Date.parse(data1.datetime) == inputDate ) {
        formattedTable+="<tr><th class='table-head'>"+data1.datetime+"</th><th class='table-head'>"+data1.city+"</th><th class='table-head'>"+data1.state+"</th><th class='table-head'>"+data1.country+"</th><th class='table-head'>"+data1.shape+"</th><th class='table-head'>"+data1.durationMinutes+"</th><th class='table-head'>"+data1.comments+"</th></tr>";
    }
}
);  
//alert(formattedTable);
if (formattedTable != null) {
    formattedTable = "<table id='ufo-table' class='table table-striped'><thead><tr><th class='table-head'>Date</th><th class='table-head'>City</th><th class='table-head'>State</th><th class='table-head'>Country</th><th class='table-head'>Shape</th><th class='table-head'>Duration</th><th class='table-head'>Comments</th></tr></thead><tbody>"+formattedTable
}
document.getElementById("table-area").innerHTML=formattedTable;
}

function onPageLoad() {
    //alert(JSON.parse(data));

    var formattedTable = "<table id='ufo-table' class='table table-striped'><thead><tr><th class='table-head'>Date</th><th class='table-head'>City</th><th class='table-head'>State</th><th class='table-head'>Country</th><th class='table-head'>Shape</th><th class='table-head'>Duration</th><th class='table-head'>Comments</th></tr></thead><tbody>";

 data.forEach(
        function(data1){
            formattedTable+="<tr><th class='table-head'>"+data1.datetime+"</th><th class='table-head'>"+data1.city+"</th><th class='table-head'>"+data1.state+"</th><th class='table-head'>"+data1.country+"</th><th class='table-head'>"+data1.shape+"</th><th class='table-head'>"+data1.durationMinutes+"</th><th class='table-head'>"+data1.comments+"</th></tr>";
        }
    );

    formattedTable+="</tbody></table>";
    
//alert(formattedTable);
  document.getElementById("table-area").innerHTML=formattedTable;



    /*
<div class="col-md-10">
<div id="table-area" class="">
  <table id="ufo-table" class="table table-striped">
    <thead>
      <tr>
        <th class="table-head">Date</th>
        <th class="table-head">City</th>
        <th class="table-head">State</th>
        <th class="table-head">Country</th>
        <th class="table-head">Shape</th>
        <th class="table-head">Duration</th>
        <th class="table-head">Comments</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>
*/


}



// YOUR CODE HERE!
