
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    }); 

    // $(document).ready(function () {
    //   $("#mycarousel").carousel({
    //     interval: 2000
    //   });
    //   $("#carousel-pause").click(function () {
    //     $("#mycarousel").carousel('pause');
    //   });
    //   $("#carousel-play").click(function () {
    //     $("#mycarousel").carousel('cycle');
    //   });
    // });
    // this is an extended version of carousel
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        } else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
$(document).ready(function () {
    $("#log").click(function () {
        $('#loginModal').modal('show');
    });
    $('.close').click(function () {
        $('#loginModal').modal('hide');
    });
});
$(document).ready(function () {
    $("#reserve").click(function () {
        $('#reserveModal').modal('show');
    });
    $('#reclose').click(function () {
        $('#reserveModal').modal('hide');
    });
});