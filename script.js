var main = function() {
    var numOfClicks =0;
    $('.meme').click(function(){
        numOfClicks++;
        $('.num').html(numOfClicks + " times");
    });

};

$(document).ready(main);

