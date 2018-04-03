$(document).ready(function () {
    $('.event').on("dragstart", function (event) {   //finds when dragging an element or text area.
        var dt = event.originalEvent.dataTransfer;
        dt.setData('Text', $(this).attr('id'));
    });
    $('table td').on("dragenter dragover drop", function (event) {  //dragenter is when dragged area enters desired area.
        event.preventDefault();                                     //dragover is when element is dragged over an area.
        if (event.type === 'drop') {
            var data = event.originalEvent.dataTransfer.getData('Text', $(this).attr('id'));
            de = $('#' + data).detach();
            de.appendTo($(this));    //if element is in dropzone then it is added to function.

            $('td').click(function(){
                $(this).attr("contenteditable"); ///becomes editable
            });
        };
    });
})
