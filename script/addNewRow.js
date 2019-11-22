$(document).ready(function() {
    let i = 1;
    $("#row-button").on("click", function() {
      i++;
      $("#example-table").append("<tr><td contenteditable='true' rowspan='2'>0</td><td contenteditable='true'>0</td><td contenteditable='true' rowspan='2'>0</td></tr><tr><td contenteditable='true'>0</td></tr>");
    });
});

