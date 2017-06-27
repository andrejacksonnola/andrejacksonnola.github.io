/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        
    $('div').css('color', 'black');
    $('#section-quotes').css('background-color', 'grey').css('border-radius', '4px');
    $('.heading-quotes').css('color', 'white').css('padding-left', '10px');
    $('.quote').css('color', 'white').css('font-style', 'italic');
    $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
    $('#quotes:last child').css('padding-bottom', '4px');
    $('#section-quotes').prependTo('#sections');
    $('#image-billy').attr('src', 'images/billy/billy-1.jpg');
    let $section = $('<section>').attr('id', 'section-rider');
    $section.append($('<h3>').text('Billy\'s Rider')).appendTo($('#sections'));
    $('#section-bio').css('color', 'navy');
    $('#section-quotes').css('background-color', 'navy').css('padding', '10px').css('border-radius', '12px');
        
        // uncomment this to inspect all available data; delete when done //
        //console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        
        
        _.map(topRated, function(value, index, array) {
            let $listrecording = $('<li>').attr('class', 'sub-list')
            let $recording = $('<li>').attr('class', 'list-recordings');
            $recording.append($('<li>').text(value.title)).appendTo($('#list-top-rated'));
            
        });
        
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


