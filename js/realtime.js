function show()

{

    $.ajax({

        url: "run.php", 

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
