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
    let $section = $('<section>').attr('id', 'section-rider');
    $section.append($('<h3>').text('Billy\'s Rider')).appendTo($('#sections'));
    $('#section-bio').css('color', 'black');
    $('#section-quotes').css('background-color', 'black').css('padding', '10px').css('border-radius', '12px');
    $('body').css('background-color', 'black').css('background-image', 'url(/projects/billypedia/images/200011_108b.jpg)').css('background-size', 'contain').css('background-repeat', 'no-repeat').css('background-attachment', 'fixed');
    $('#all-contents').css('position', 'absolute').css('right', '0px');
    $('main').css('background-color', /*'rgba(255, 255, 255, 0.5'*/ 'white');
    $('nav').css('background-color', 'transparent');
    $('nav a').css('font-family', 'Lily Script One').css('font-size', '50px');
        
        // uncomment this to inspect all available data; delete when done //
        //console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        
        
        _.map(topRated, function(value, index, array) {
            let $listrecording = $('<li>').attr('class', 'sub-list');
            let $recording = $('<li>').attr('class', 'list-recordings');
            $recording.append($('<li>').text(value.title)).attr('class', 'top-recording').appendTo($('#list-top-rated'));
            
        });
        
        var recordings = data.discography.recordings;
        
        function makeList(content){
            
            var $list = $('<ul>').attr('id', 'list-recordings');
            _.forEach(content, function(recording){
                var $listitem = $('<li>').attr('class', 'recording').appendTo($list);
                $('<div>').attr('class', 'title').text("Title: " + recording.title).appendTo($listitem);
                $('<div>').attr('class', 'artist').text("Artist: " + recording.artist).appendTo($listitem);
                $('<div>').attr('class', 'release').text("Release: " + recording.release).appendTo($listitem);
                $('<div>').attr('class', 'year').text("Year: " + recording.year).appendTo($listitem);
                
            });
                
            return $list;
        }
        var recordingsList = makeList(recordings);
        
       
        var $recordings = $('<section>').attr('id', 'section-recordings').append(recordingsList);
        $('#sidebar').append($recordings);
        
        var $imgContainer = $('<div>').attr('id', 'image-container-recording').attr('class', 'image-container');
        var topImage = $('<img>').attr('src', "images/album/voice-in-the-night.jpg").attr('class', 'image').appendTo($imgContainer);
        var recordingsImage = $('<img>').attr('src', 'images/album/eastern-rebellion.jpg').attr('class', 'image').appendTo($imgContainer);
        
        $(topImage).prependTo('#section-top-rated');
        $(recordingsImage).prependTo($recordings);
       
        var counter = 0;
        $('#image-billy').click(function(){
            counter++;
            if(counter === 4) {
                counter = 0;
            }
            
            $('#image-billy').fadeOut(0);
            $('#image-billy').attr('src', data.images.billy[counter]);
            $('#image-billy').fadeIn();
        });
        
        _.forEach($('.recording'), function(value, index){
            $('.recording').eq(index).click(function(){
                $(recordingsImage).attr('src', recordings[index].art);
            });
            
             });
             
             _.forEach($('.top-recording'), function(value, index){
            $('.top-recording').eq(index).click(function(){
                $(topImage).attr('src', topRated[index].art);
            });
            
             });
             
             var rider = data.rider;
             
    var createTable = function(rider){
    var createRow = function(rider){
        var $row = $("<tr>");
        var $type = $("<td>").text(rider.type);
        var $description = $("<td>").text(rider.desc);
        $row.append($type);
        $row.append($description);
        return $row;
    };
    var $table = $("<table>");
    var $rows = rider.map(createRow);
    $table.append($rows);
    return $table;
};
createTable(rider).appendTo($('#section-rider'));
             
       
        
        
        // function imageContain(content){
        //   var $imgContainer = $('<div>').attr('id', 'image-container-recording').attr('class', 'image-container');
        //   _.forEach(content, function(value){
        //       $('<img>').attr('src', value.art).attr('class', 'image').appendTo($imgContainer);
              
        //   });
           
        //   return $imgContainer;
        // }
        
        // $('#sidebar').append(imageContain(recordings));
        
        // var topImage = imageContain(topRated);
        // var recordingsImage = imageContain(recordings);
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


