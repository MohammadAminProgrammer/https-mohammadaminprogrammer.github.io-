$(document).ready(function () {
    $(".HeaderLink").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 800, function () {
                // window.location.hash = hash;
            });
        }
    });

    $("#Button").click(function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: 0
            }, 800, function () {
                // window.location.hash = "";
            });
        }
    })
});

function ProgressLoader() {
    var progress = $(".ProgressBar");
    // console.log(progress);

    for (let i = 0; i < progress.length; i++) {
        // console.log(progress[i]);
        progress[i].style.width = progress[i].ariaValueNow + "%";
    }

    // progress.style.width = progress.ariaValueNow + "%";
}

// window.onload = function() {
//     ProgressLoader();
// }

$(document).scroll(function (e) {
    if (Math.floor($("#My-Languages").offset().top) - 300 <= window.scrollY) {
        ProgressLoader();
    }
    // alert($("#Bottom-Header").offset().top);
    if ($("#Bottom-Header").offset().top >= 300) {
        $("#Bottom-Header").css("box-shadow", "1px 3px 30px rgb(209, 209, 209)");
    } else {
        $("#Bottom-Header").css("box-shadow", "");
    }

    if(window.scrollY > 30) {
        $("#Up-Button").css("top", "85vh");
    } else {
        $("#Up-Button").css("top", "100vh");
    }

    if ($("#My-Works").offset().top - 300 <= window.scrollY) {
        $("#My-Works").css("left", "0");
        $("#My-Works img").css("opacity", "100%");
    }

    if ($("#Call-Me").offset().top - 600 <= window.scrollY) {
        $("#Call-Me").css("bottom", "0");
        $("#Call-Me").css("opacity", "100%");
    }
    
    if ($("#Footer").offset().top - 800 <= window.scrollY) {
        $("#Footer").css("bottom", "0");
        $("#Footer").css("opacity", "100%");
    }

    // alert($("#My-Works").offset().top);
    // console.log(window.scrollY);
})

// console.log(Math.floor($("#My-Languages").offset().top));
// console.log(window.scrollY);