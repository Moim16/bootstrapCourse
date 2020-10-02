$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButtona").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButtona").children("span").removeClass('fa-pause');
            $("#carouselButtona").children("span").addClass('fa-play');
        }
        else if ($("#carouselButtona").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButtona").children("span").removeClass('fa-play');
            $("#carouselButtona").children("span").addClass('fa-pause');

        }

    });
    $("#buttonReservation").click(function () {
        $('#reservationFormModal').modal('show');
    });

    $("#buttonLogin").click(function () {
        $('#loginModal').modal('show');
    });


});