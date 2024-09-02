$(document).ready(function() {
    $('#search-button').click(function() {
        let searchTerm = $('#search-input').val();
        if (searchTerm) {
            $.ajax({
                url: `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${searchTerm}&jsoncallback=?`,
                dataType: 'jsonp',
                success: function(data) {
                    $('#image-container').empty();
                    $.each(data.items, function(i, item) {
                        if (i < 10) {
                            $('<img>').attr('src', item.media.m).appendTo('#image-container');
                        }
                    });
                }
            });
        }
    });
});
