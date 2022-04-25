// Terminal Input
var term_input = document.getElementById("term_dialog_input");
var term_output = document.getElementsByTagName("term")[0];
term_input.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        if(term_input.value == "") {
            return;
        }



        commands(term_input.value);
        term_input.value = "";
    }
})



function commands(cmd) {
    term_output.innerHTML = term_output.innerHTML + "<p>" + cmd + "</p>";
    if (cmd == "help") {
        term_output.innerHTML = term_output.innerHTML + "<p>Commands: help, projects, clear</p>"
    } else if (cmd == "projects") {
        term_output.innerHTML = term_output.innerHTML + "<p>Active Projects: <a href='dissection.html'>Electronics Dissection</a></p>"
    } else if (cmd == "clear") {
        term_output.innerHTML = "";
    } else {
        term_output.innerHTML = term_output.innerHTML + "<p style='color:red'> Unknown Command: " + term_input.value + "</p>";
    }
}
