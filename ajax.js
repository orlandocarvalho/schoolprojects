$(document).ready(function() {
    $('#btnToggle').on('click', function(e){
        let status;
        $.ajax({
            url: '/led?status=' + status,
            method: 'GET',
            success: function(result) {
                console.log(result);
         }
        });
        e.preventDefault();
    });
});
