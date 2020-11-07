$(document).ready(function(){
  $("button").click(function(){
    $(".test").hide();
  })
})
$("*") $(this) $("p.intro") $("p:first") $("ul li:first") $("ul li:first-child") $("[href]")
$("a[target='[_blank]']") $("a[target!='_blank']") $(":button") $("tr:even") $("tr:odd")
click dbclick mouseenter mouseleave keypress keydown keyup submit ch

$("p").click(function(){

})

$(document).ready(function(){

})

$("p").click(function(){
  $("this").hide();
})

$("p").dbclick(function(){
  $(this).hide();
})

$("#p1").mouseover(function(){
  alert("You entered p1!");
})

$("#p1").mouseleave(function(){
  alert("Bye! you now leave p1");
})

$("#p1").mousedown(function(){
  alert("Mouse down over p1!");
})

$("#p1").mouseup(function(){
  alert("Mouse up over p1");
})

$("#p1").hover(function(){
  alert("You entered");
},
function(){
  alert("You now leaver");
})

$("input").focus(function(){
  $(this).css("background-color", "#cccccc");
})

$("input").blur(function(){
  $(this).css("background-image", "#ffffff");
})

$("p").on("click", function(){
  $(this).hide();
})

$("p").on({
  mouseenver: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
})

$("#hide").click(function(){
  $("p").hide();
});

$("#show").click(function(){
  $("p").show();
})

$("button").click(function(){
  $("p").hide(1000)
})

$("button").click(function(){
  $("p").toggle();
})

$("button").click(function(){
  $("#div1").fafeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000)
})

$("button").click(function(){
  $("#div1").fadeOut();
  $("#div2").fadeOut("slow");
  $("#div3").fadeOut(3000);
});

$("button").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000)
})

$("button").click(function(){
  $("#div1").fadeTo("slow", 0.15);
  $("#div2").fadeTo("slow", 0.5);
  $("#div3").fadeTo("slow", 0.8)
})

$("#flip").click(function(){
  $("#panel").slideDown();
})

$("#flip").click(function(){
  $("#panel").slideUp();
})

$("#flip").click(function(){
  $("#panel").slideToggle();
})

$("button").click(function(){
  $("div").animate({left: "250px"});
})

$("button").click(function(){
  $("div").animate({
    left: "250px",
    opacity: 0.5,
    height: "150px",
    width: "150px"
  });
});

$("button").click(function(){
  $("div").animate({
    left: "250px",
    height: "+= 150px",
    width: "+= 150px"
  })
})

$("button").click(function(){
  $("div").animate({
    height: "toggle"
  })
})

$("button").click(function(){
  var div = $("div");
  div.animate({height: "300px", opacity: "0.4"}, "slow");
  div.animate({width: "300px", opacity: "0.8"}, "slow");
  div.animate({height: "100px", opacity: "0.4"}, "slow");
  div.animate({width: "100px", opacity: "0.8"}, "slow");
})

$("button").click(function(){
  var div = $("div");
  div.animate({left: "100px"}, "slow");
  div.animate({fontSize: "3em"}, "slow");
})

$("#stop").click(function(){
  $("#panel").stop();
})

$("button").click(function(){
  $("p").hide("slow", function(){
    alert("The paragraph is now hidden");
  });
});

$("button").click(function(){
  $("p").hide(1000);
  alert("The paragraph is now hiddwn");
})

$("#p1").css("color", "red").slideUp(2000).slideDown(2999)

$("#btn1").click(function(){
  alert("Text: " + $("#test").text());
})

$("#btn2").click(function(){
  alert("HTML: " + $("#test").html());
})

$("button").click(function(){
  alert($("#w3s").attr("href"));
})

$("#btn1").click(function(){
  $("#test1").text("Hello world");
});
$("#btn2").click(function(){
  $("#test2").html("<b>Hello world</b>")
});
$("#btn3").click(function(){
  $("#test3").val("Dolly Duck")
})

$("#btn1").click(function(){
  $("#test1").text(function(i, origText){
    return "Old text: " + origText + "New text: Hello world!(index: " + i + ")";
  });
});
$("#btn2").click(function(){
  $("#test2").html(function(i, origText){
    return "Old html: " + origText + " New html: Hello <b>World</b>(index: " + i + ")";
  })
})

$("button").click(function(){
  $("#w3e").attr("href", "https://www.w3chools.com/jquery/");
})

$("button").click(function(){
  $("#w3e").attr({
    "href": "https://www.w3eschools.com/jquery",
    "title": "W3Schools jquery Tutorial"
  });
});

$("button").click(function(){
  $("#w3e").attr("href", function(i, origValue){
    return oriValue + "/jquery";
  })
})

$("p").append("Some appended text")

$("p").prepend("Some prepend text")

function addText(){
  var text1 = "<p>Text. </p>"
  var text2 = $("<p></p>").text("Text");
  var text3 = document.createElement("p")
  text3.innerHTML = "Text";
  $("body").append(text1, text2, text3)
}
$("img").after("Some textafter");
$("img").before("Some text before");

function afterText(){
  var text1 = "<b>I </b>"
  var text2 = $("<i></i>").text("Love ");
  var text3 = document.createElement("b");
  text3.innerHTML = "Jquery";
  $("img").after(text1, text2, text3);
}

$("#div1").remove();
$("#div1").empty();

$("p").remove(".test");

$("p").remove(".test, .demo")

$("button").click(function(){
  $("h1, h2, p").addClass("blue");
  $("div").addClass("important");
})

$("button").click(function(){
  $("#div1").addClass("important blue");
})

$("button").click(function(){
  $("h1, h2, p").removeClass("blue");
})

$("button").click(function(){
  $("h1, h2, p").toggleClass("blue");
})

$("p").css("background-color");

$("p").css("background-color", "yellow");

$("p").css({"background-color": "yellow", "font-size": "200%"});

$("button").click(function(){
  var txt = "";
  txt += "Width: " + $("#div1").width() + "<br>";
  txt += "Height: " + $("#div1").height() + "<br>";
  $("#div1").html(txt);
})

$("button").click(function(){
  var text = "";
  text += "InnerWidth: " + $("#div1").innerWidth() + "<br>";
  text += "InnerHeight "+ $("#div1").innerHeight();
  $("#div1").html(text);
})

$("button").click(function(){
  var text = "";
  text += "OuterWidth: " + $("#div1").outerWidth() + "<br>";
  text += "OuterHeight: " + $("#div1").outerHeight() + "<br>";
  $("#div1").html(text);
})

$("button").click(function(){
  $("#div1").width(599).height(5999);
})

$(document).ready(function(){
  $("span").parent();
})

$(document).ready(function(){
  $("span").parents();
})

$(document).ready(function(){
  $("span").parentUntil("div");
})

$(document).ready(function(){
  $("div").children();
})

$(document).ready(function(){
  $("div").children("p.first");
})

$(document).ready(function(){
  $("div").find("span");
})

$(document).ready(function(){
  $("div").find("*");
})

$(document).ready(function(){
  $("h2").siblings();
})

$(document).ready(function(){
$("h2").siblings("p");  
})

$(document).ready(function(){
  $("h2").next();
})

$(document).ready(function(){
  $("h2").nextAll();
})

$(document).ready(function(){
  $("h2").nextUntil("h6");
})

$(document).ready(function(){
  $("div").first();
})

$(document).ready(function(){
  $("div").last();
})

$(document).ready(function(){
  $("p").eq(1);
})

$(document).ready(function(){
  $("p").filter(".intro");
})

$(document).ready(function(){
  $("p").not(".intro");
})

$("#div").load("demo_test.txt")

$("#div1").load("demo_test.txt #p1");

$("button").click(function(){
  $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success"){
      alert("External content loaded susseccfully");
    }
    if(statusTxt == "error"){
      alert("Error: " + xhr.status + ": " + xhr.statusText);
    }
  })
})

$(document).ready(function(){
  $("button").on("click", function(){
    $.get("demo_test.asp", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    })
  })
})

$(document).ready(function(){
  $("button").on("click", function(){
    $.post("demo_test._post.asp", 
    {
      name: "Donald",
      city: "DuckBurg"
    }, function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    })
  })
})