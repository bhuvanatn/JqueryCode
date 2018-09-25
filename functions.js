$(document).ready(function () {

    $('.cta a').click(function () {
        $('html,body').animate({
            scrollTop: $('#tours').offset().top
        }, 500);
        return false;
    });

    $('#tours li').on('click', function () {
        $('#location').val($('img', this).attr('alt'));
        console.log("li's")
    });

    var url = 'https://9ss7bxey8k.execute-api.ap-southeast-2.amazonaws.com/default/dummy_service';
    $.getJSON(url, function (response) {
        console.log("Data: ", response);
        console.log("Data: ", response.Data.length);
        console.log(response.Data[0].node.frontmatter.cover);
        $.each(response.Data, function (key, val) {
            console.log("KEY:"+ key + "Val:", val);
            $("#tours img").eq(key).attr('src', val.node.frontmatter.cover);
        });

        
// this Code I have written for modal pop up // its still need to be refactored to get it working
        $(".open").on("click", function () {
            $(".popup-overlay, .popup-content").addClass("active");
        });

        //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
        $(".close, .popup-overlay").on("click", function () {
            $(".popup-overlay, .popup-content").removeClass("active");
        });
    });
});