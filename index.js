$(document).ready(function () {
    $('.event').on("dragstart", function (event) {
        var dt = event.originalEvent.dataTransfer;
        dt.setData('Text', $(this).attr('id'));
    });
    $('table td').on("dragenter dragover drop", function (event) {
        event.preventDefault();
        if (event.type === 'drop') {
            var data = event.originalEvent.dataTransfer.getData('Text', $(this).attr('id'));
            de = $('#' + data).detach();
            de.appendTo($(this));

            $('td').click(function(){
                $(this).attr("contenteditable");
            });
        };
    });
})

//This is my insert week function. Every time the insert week button is pressed a new week row is added.

//Variable n is set to 0.
var n = 0;    

function Insert_Week() {


    //Table ID is found.
    var x=document.getElementById("Table1");

    //    A new row is added.
    var row=x.insertRow(1);
    var cell1=row.insertCell(0);

//    The draggable cells are set to true, and can be edited.
    var newspan = document.createElement("span");
    newspan.setAttribute("draggable",true);
    newspan.setAttribute("contenteditable",true);

    newspan.setAttribute("id", "cell"+n);
    newspan.classList.add("event");
    //the new span is added to the event class, which is set as the class of the span.

    cell1.appendChild(newspan);

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "index.js"; 
    document.getElementsByTagName("head")[0].appendChild(script);
    
//N is incremented each time.
    n++;
    return false;

}


//This is my remove week function. Every time the remove week button is pressed a week row is removed.

function Remove_Week() {

    document.getElementById("Table1").deleteRow(1);

}



//This is my insert lecture function. Every time the insert lecture button is pressed a new week row is added.



var n = 0;    

function Insert_Lecture() {


    var x=document.getElementById("Table2");

    var row=x.insertRow(1);
    var cell1=row.insertCell(0);

    var newspan = document.createElement("span");
    newspan.setAttribute("draggable",true);
    newspan.setAttribute("contenteditable",true);


    newspan.setAttribute("id", "cell"+n);

    newspan.classList.add("event");

    cell1.appendChild(newspan);

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "index.js"; 
    document.getElementsByTagName("head")[0].appendChild(script);

    n++;
    return false;

}

//This is my remove lecture function. Every time the remove lecture button is pressed a lecture row is removed.


function Remove_Lecture() {

    document.getElementById("Table2").deleteRow(1);

}


//This is my insert session function. Every time the insert session button is pressed a new week practical session is added.




var n = 0;    

function Insert_Session() {

    //Table 3 ID is found.
    var x=document.getElementById("Table3");

    var row=x.insertRow(1);
    var cell1=row.insertCell(0);

    var newspan = document.createElement("span");
    newspan.setAttribute("draggable",true);
    newspan.setAttribute("contenteditable",true);


    newspan.setAttribute("id", "cell"+n);

    newspan.classList.add("event");

    cell1.appendChild(newspan);

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "index.js"; 
    document.getElementsByTagName("head")[0].appendChild(script);

    n++;
    return false;

}

//This is my remove session function. Every time the remove session button is pressed a session is removed.



function Remove_Session() {

    document.getElementById("Table3").deleteRow(1);

}


//This is my insert notes function. Every time the insert notes button is pressed a new notes row is added.

var n = 0;    

function Insert_Notes() {


    var x=document.getElementById("Table4");

    var row=x.insertRow(1);
    var cell1=row.insertCell(0);

    var newspan = document.createElement("span");
    newspan.setAttribute("draggable",true);
    newspan.setAttribute("contenteditable",true);


    newspan.setAttribute("id", "cell"+n);

    newspan.classList.add("event");

    cell1.appendChild(newspan);

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "index.js"; 
    document.getElementsByTagName("head")[0].appendChild(script);

    n++;
    return false;

}

//This is my remove session function. Every time the remove session button is pressed a session is removed.

function Remove_Notes() {

    document.getElementById("Table4").deleteRow(1);

}








