function insertRow(){
    var newRow = $("<tr>");
    newRow.append("<td>New Row Cell1</td>");
    newRow.append("<td>New Row Cell2</td>");
    $("#myTable").append(newRow);
}