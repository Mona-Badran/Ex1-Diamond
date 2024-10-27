var rows = parseInt(prompt("Enter the number of rows:"));

function diamond(rows){
    for(var i = 0; i < rows; i++){
        for(var j = 0; j < rows - i - 1; j++){
            document.write("&nbsp;&nbsp;");
        }
        for (var j = 0; j < 2 * i + 1; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
    for(var i = rows - 2; i >= 0; i--){
        for(var j = 0; j < rows - i - 1; j++){
            document.write("&nbsp;&nbsp;");
        }
        for (var j = 0; j < 2 * i + 1; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
}
diamond(rows);

