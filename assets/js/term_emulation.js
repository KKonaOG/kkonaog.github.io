// Terminal Input
var term_input = document.getElementById("term_dialog_input");
var term_output = document.getElementsByTagName("term")[0];
var imgs = document.getElementsByTagName("img");
for(var k = 0; k < imgs.length; k++){
    var img = imgs.item(k);
    img.addEventListener("click", imgClicked)
}

if (term_input != null) {
 term_input.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        if(term_input.value == "") {
            return;
        }
        commands(term_input.value);
        term_input.value = "";
    }
})   
}


function imgClicked(event) {
    let src = event.srcElement;
    if (src.id == 'selected') {
        src.id = '';
    } else {
        src.id = 'selected';
    }
}

function commands(cmd) {
    term_output.innerHTML = term_output.innerHTML + "<p>local_user@kkonaog.github.io > " + cmd + "</p>";
    if (cmd == "help") {
        term_output.innerHTML = term_output.innerHTML + "<p>Commands: help, projects, clear</p>"
    } else if (cmd == "projects") {
        term_output.innerHTML = term_output.innerHTML + "<p>Active Projects: <a href='projects/dissection.html'>Electronics Dissection</a></p>"
    } else if (cmd == "clear") {
        term_output.innerHTML = "";
    } else {
        term_output.innerHTML = term_output.innerHTML + "<p style='color:red'> Unknown Command: " + term_input.value + "</p>";
    }
}