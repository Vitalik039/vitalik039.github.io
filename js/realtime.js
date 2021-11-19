function show()

{

    $.ajax({

        url: "balanc.html", 

        cache: false,

        success: function(html){

            $("#block").html(html);

        }

    });

}



$(document).ready(function(){

    show();

    setInterval('show()',1000);

});
