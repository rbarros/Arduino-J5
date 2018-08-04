$(document).ready(function() {
    console.log('arduino.js');
    $.get( "/led/state", function( data ) {
        $btn = $('#pin13');
        if (data.state == 1) {
            $btn.text('Off').removeClass('btn-success').addClass('btn-danger');
        } else {
            $btn.text('On').removeClass('btn-danger').addClass('btn-success');
        }
    });
    $(document).on('click', '#pin13', function() {
        var $btn = $(this);
        if ($btn.hasClass('btn-success')) {
            $.get( "/led/on", function( data ) {
                $btn.text('Off').removeClass('btn-success').addClass('btn-danger');
            });
        } else {
            $.get( "/led/off", function( data ) {
                $btn.text('On').removeClass('btn-danger').addClass('btn-success');
            });
        }
    });
});