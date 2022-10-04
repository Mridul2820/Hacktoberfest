$(document).ready(function() {

    $(".head").hide();

    $("#main").hide();

    $(".text").hide();

    $(".head").css({opacity:100});

    $(".head").slideDown(1000);

    setTimeout(function(){

        $(".text").fadeIn("slow");

        $("#main").fadeIn(5000)

    },1900);

    setInterval(()=>{

        var clock = new Date();

        $("#hour").html(clock.getHours() > 12 ? clock.getHours()-12:clock.getHours());

        $("#sec").html(clock.getSeconds());

        $("#min").html(clock.getMinutes());

        $("#am").html(clock.getHours() > 12 ? "PM" : "AM")

    },1000);

    $("#button").on("click",function(){

            var medName = $("#med-name").val()

            var time = $("#time").val()

            var details = $("#detail").val()

            

            if (medName !== "" && time !== "" && details !== "") {

            

            var elem = $("<p></p>").text(time);

            

            $(elem).append(`<br>Medicine Name: ${medName}<br>Extra Details : ${details}<br><br><button class='rem'>Remove</button><br><br><hr><br>`);

            $("#all-items").append(elem);

            $(".rem").on("click", function() {

                $(this).parent().remove();

            });

        } else {

            alert("Fill All The Input Boxes!!");

        }

    });

});
