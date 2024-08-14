// For the trending houseplant part
// Ready event listener
$(document).ready(function () {
    // For on hover effect on image
    $("#plants").on("mouseover", ".img", function () {
        $(this).next(".plantDetails").addClass("show");
    });

    // For mouse out action
    $("#plants").on("mouseout", ".img", function () {
        $(this).next(".plantDetails").removeClass("show");
    });
});

// For the plant grow part
$(document).ready(function () {
    // click event listener on drop
    $(".drop").click(function () {
        // Adding class rain on click
        $(".stem").addClass("rain");
    });

    // Initially hiding information part
    $("#info").hide();

    $(".drop").click(function () {
        // Showing information part on click
        $("#info").show();
        // Adding class info
        $("#info").addClass("info");
    });
});

// For animations on submit button of the form
let button = document.querySelector('.button');

// For tick mark sign
const tickMark = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

button.innerHTML = "Subscribe";

button.addEventListener('click', function() {
    if (button.innerHTML === "Subscribe") {
        // Changing the subscribe text to the tickmark
        button.innerHTML = tickMark;
    } else {
        button.innerHTML = "Subscribe";
    }
    // Toggling class circle
    this.classList.toggle('circle');
});