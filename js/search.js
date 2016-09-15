(function () {
    
    $('a[href="#search"]').on('click', function (event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#query').focus().select();
        // $('#search > form > input[type="search"]').focus();
    });
        console.log("Start jquery");

    $('#search, #search button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

        // $('#search').addClass('open');
        // $('#query').focus().select();


}());
