$(document).ready(function(){
	$("#hell").css("color","green");
	$("h1,p").css("fontSize","30px");
    $(".el1").css("color","red");
    $("form *").attr("disabled", true);
    $("#mail").css("color","blue");
    $("#go").css("color","yellow");

    $("a").prepend("↗");
    //$("a").append("↗");
    $("a").attr("target","_blank")	//загрузка страницы в новом окне
	$("[href^='http://']").each(function() {
		$(this).attr("href", $(this).attr("href").replace("http://", "https://"));
	});
	$("#nope").click(function(){
		$("[href]").each(function() {
			$(this).contents().eq(0).remove();
		});	//↗
		$("[href]").removeAttr("target");//target _self
    });
});
$(document).ready(function(){
            $("#tr1").click(function(){
                $(".toggleIt").toggle();
            })
            $("#tr2").click(function(){
                $(".fadeToggleIt").fadeToggle();
            })
            $("#tr3").click(function(){
                $(".scroy").fadeOut(1000);
            })
            $("#tr4").click(function(){
                $(".move").slideUp(1000);
            })
});

function reload(){
     $("#pg").load("https://inxaoc.github.io/example/ajax-1.html");   
}

function JsonParser(data) {
            let output = "";
            $.each(data, function(key, value) {
                output +=  '<li>' + key + ': </li>';
                if ($.isPlainObject(value)) {
                    output += '<ul>' + JsonParser(value) + '</ul>';
                } else if ($.isArray(value)) {
                    output += '<ul>';
                    $.each(value, function(index, value) {
                        output +='<li>' + value + '</li>';
                    })
                    output += '</ul>';
                } else {
                  output += '<ul><li>' + value + '</li></ul>';
                }
            })
    return output;
}

function PJson(){
        $.getJSON( "https://inxaoc.github.io/example/ajax.json", function(data) {
        var tmpJSON = data;
        var JSON_Wrapper = $('#json');
        JSON_Wrapper.append(JsonParser(tmpJSON));
    });
}